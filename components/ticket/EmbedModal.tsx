import Image from "next/image";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react"
import config from "@/config/config.mjs"
import { v4 as uuidv4 } from "uuid";
import Modal from "@mui/material/Modal"
import Backdrop from "@mui/material/Backdrop"
import Fade from "@mui/material/Fade"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import BackArrowIcon from "@mui/icons-material/ArrowBack"
import Slide, { SlideProps } from "@mui/material/Slide"
import Buttons from "@/public/Buttons.png"
import { createTheme, ThemeProvider, Snackbar, MenuItem, Select, InputLabel } from "@mui/material"

// Define interface for props
interface Props {
    open: Boolean | boolean
    setOpen: Dispatch<SetStateAction<Boolean>> | Dispatch<SetStateAction<boolean>>
    setEmbed: Dispatch<SetStateAction<{ id: string; name: string }[]>> | Dispatch<SetStateAction<{ id: string; name: string }[]>>
    data?: {
        id: string
        name: string
        embedColor: string
        title: string
        description: string
        footer: string
        imageUrl: string
        buttonStyle: string
        buttonText: string
        buttonEmoji: string
    }
}

export default function EmbedModal(props: Props) {
    const { open, setOpen } = props;
    const [useGuildThumbnail, setUseGuildThumbnail] = useState(false)
    const [useGuildIconInFooter, setUseGuildIconInFooter] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [id, setId] = useState<string>(uuidv4());
    const [embedColor, setEmbedColor] = useState("Blue")
    const [embedName, setEmbedName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [footer, setFooter] = useState("")
    const [imageUrl, setImageUrl] = useState("https://example.com/default-image.jpg")
    const [buttonStyle, setButtonStyle] = useState("primary")
    const [buttonText, setButtonText] = useState("Click Me")
    const [buttonEmoji, setButtonEmoji] = useState("🚀")
    const [showButtonModal, setShowButtonModal] = useState(false)

    if (props.data) {
        setId(props.data.id)
        setEmbedName(props.data.name)
        setEmbedColor(props.data.embedColor)
        setTitle(props.data.title)
        setDescription(props.data.description)
        setFooter(props.data.footer)
        setImageUrl(props.data.imageUrl)
        setButtonStyle(props.data.buttonStyle)
        setButtonText(props.data.buttonText)
        setButtonEmoji(props.data.buttonEmoji)
    }

    const handleOpen = () => {
        setOpen(true)
        setSubmitDisabled(false)
        setErrorMessage("")
    }

    useEffect(() => {
        if (open) handleOpen()
    }, [open])

    const handleClose = () => {
        setOpen(false)
        setShowSnackbar(false)
        setErrorMessage("")
        setShowButtonModal(false)
    }

    const handleUseGuildThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseGuildThumbnail(event.target.value === "true")
    }

    const handleUseGuildIconInFooterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseGuildIconInFooter(event.target.value === "true")
    }

    const handleNext = () => {
        const { error, message } = validateInputs()
        if (error) {
            setErrorMessage(message)
        } else {
            setErrorMessage("")
            setShowButtonModal(true)
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setId(uuidv4())

        const dataToSend = {
            id,
            name: embedName,
            title,
            description,
            footer,
            imageUrl,
            buttonStyle,
            buttonText,
            buttonEmoji,
            useGuildThumbnail,
            useGuildIconInFooter,
            embedColor,
        };


        fetch(config.api(`embeds/new`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store', // Disable caching
            },
            cache: 'no-store',
            next: {
                revalidate: 0,
            },
            body: JSON.stringify(dataToSend)
        }).then(response => response.json()).then(data => {

            if (data?.error) {
                setShowButtonModal(false)
                setErrorMessage(data.message)
            } else {
                setShowSnackbar(true);
                setSubmitDisabled(true);
                setErrorMessage("");

                setTimeout(() => {
                    props.setEmbed(prev => {
                        prev.push({ name: embedName, id });
                        return prev
                    });
                }, 2000);
            }

        }).catch((e) => {
            console.log(e)
            setShowButtonModal(false)
            setErrorMessage("error")
        })

    }

    const validateInputs = () => {

        if (!embedName) {
            return { error: true, message: 'Embed name is require' }
        }

        if (embedName.includes(' ')) {
            return { error: true, message: 'Embed name cant include spaces' }
        }

        if (title && (title.length < 1 || title.length > 200)) {
            return { error: true, message: 'Embed title must be between 5 and 200 max' }
        }

        if (description && (description.length < 5 || description.length > 400)) {
            return { error: true, message: 'Embed description must be between 5 and 400 max' }
        }

        return { error: false, message: 'Invalid input. Please check your inputs' }
    }

    const customTheme = createTheme({
        palette: {
            primary: {
                main: "#2196f3",
            },
            secondary: {
                main: "#f50057",
            },
        },
    })

    return (
        <ThemeProvider theme={customTheme}>
            <div>
                <Modal
                    open={open as boolean}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open as boolean}>
                        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-25">
                            <form className="flex justify-center items-center">
                                <div className="bg-white p-8 shadow-lg opacity-100 w-[80%] h-[85%] rounded-xl">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-semibold">Create Embed</h2>
                                        <Button onClick={handleClose} startIcon={<CloseIcon />}>Close</Button>
                                    </div>
                                    {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
                                    <TextField
                                        label="Name"
                                        value={embedName}
                                        onChange={(e) => setEmbedName(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        className="mb-4"
                                        style={{ marginBottom: 16 }}
                                    />
                                    <TextField
                                        label="Embed Color"
                                        value={embedColor}
                                        onChange={(e) => setEmbedColor(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        className="mb-4"
                                        style={{ marginBottom: 16 }}
                                        disabled
                                    />
                                    <TextField
                                        label="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        className="mb-4"
                                        style={{ marginBottom: 16 }}
                                    />
                                    <TextField
                                        label="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        className="mb-4"
                                        style={{ marginBottom: 16 }}
                                    />
                                    <TextField
                                        label="Footer"
                                        value={footer}
                                        onChange={(e) => setFooter(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        className="mb-4"
                                        style={{ marginBottom: 16 }}
                                    />
                                    <TextField
                                        label="Image URL"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        className="mb-4"
                                        style={{ marginBottom: 16 }}
                                    />

                                    <FormControl component="fieldset" className="mb-4 me-3" style={{ marginRight: 12 }}>
                                        <FormLabel component="legend">Use Guild Thumbnail in Embed</FormLabel>
                                        <RadioGroup
                                            aria-label="Use Guild Thumbnail"
                                            name="useGuildThumbnail"
                                            value={useGuildThumbnail.toString()}
                                            onChange={handleUseGuildThumbnailChange}
                                        >
                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>

                                    <FormControl component="fieldset" className="mb-4">
                                        <FormLabel component="legend">Use Guild Icon in Footer</FormLabel>
                                        <RadioGroup
                                            aria-label="Use Guild Icon in Footer"
                                            name="useGuildIconInFooter"
                                            value={useGuildIconInFooter.toString()}
                                            onChange={handleUseGuildIconInFooterChange}
                                        >
                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>

                                    <div className="mt-4">
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="primary"
                                            startIcon={<CheckIcon />}
                                            className="bg-blue-900"
                                            disabled={submitDisabled}
                                            onClick={handleNext}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </Modal>
                <Modal
                    open={showButtonModal}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Slide in={showButtonModal} direction="up" timeout={{ enter: 300, exit: 300 }}>
                        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-25">
                            <div className="bg-white p-8 shadow-lg opacity-100 w-[80%] h-[85%] rounded-xl">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-semibold">Button</h2>
                                    <Button onClick={handleClose} startIcon={<CloseIcon />}>Close</Button>
                                </div>
                                <InputLabel htmlFor="button-style-select">Button Style</InputLabel>
                                <Select
                                    labelId="button-style-select"
                                    id="button-style"
                                    value={buttonStyle}
                                    onChange={(e) => setButtonStyle(e.target.value)}
                                    fullWidth
                                    className="mb-4"
                                >
                                    <MenuItem value="primary">Primary</MenuItem>
                                    <MenuItem value="secondary">Secondary</MenuItem>
                                    <MenuItem value="Danger">Danger</MenuItem>
                                    <MenuItem value="Success">Success</MenuItem>
                                </Select>
                                <TextField
                                    label="Button Text"
                                    value={buttonText}
                                    onChange={(e) => setButtonText(e.target.value)}
                                    fullWidth
                                    variant="outlined"
                                    className="mb-4"
                                    style={{ marginBottom: 15 }}
                                />
                                <TextField
                                    label="Button Emoji"
                                    value={buttonEmoji}
                                    onChange={(e) => setButtonEmoji(e.target.value)}
                                    fullWidth
                                    variant="outlined"
                                    className="mb-4"
                                />
                                <Image src={Buttons}  alt="Buttons" className="w-full h-36 mt-4" />
                                <div className="mt-4">
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<CheckIcon />}
                                        className="bg-blue-900"
                                        disabled={submitDisabled}
                                        onClick={handleSubmit}
                                        style={{ marginRight: 16 }}

                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="secondary"
                                        className="ms-3 bg-red-600"
                                        disabled={submitDisabled}
                                        startIcon={<BackArrowIcon />}
                                        onClick={() => setShowButtonModal(false)}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Modal>
                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Form submitted successfully"
                />
            </div>
        </ThemeProvider>
    )
}
