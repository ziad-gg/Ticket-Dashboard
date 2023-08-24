import { useInfo } from '@/context/useInfo';
import React, { useEffect, useState } from "react";
import config from "@/config/config.mjs"
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import { v4 as uuidv4 } from "uuid";
import Snackbar from '@mui/material/Snackbar';

const PanelModal: React.FC<PanelModalProps> = ({ open, setOpen, data, refresh }) => {
    const info = useInfo();

    const roles = info.statics?.server.roles.map(role => ({
        label: `@${role.name.startsWith('@') ? role.name.slice(1) : role.name}`,
        id: role.id
    })) as { label: string, id: string }[];

    const channels = info.statics?.server.channels.map(channel => ({
        label: `#${channel.name}`,
        id: channel.id
    }));

    const categories = info.statics?.server.categories.map(category => ({
        label: `#${category.name}`,
        id: category.id
    }));

    const everyone = roles.find(role => role.label === '@everyone')

    const [errorMessage, setErrorMessage] = useState("");
    const [showSnackbar, setshowSnackbar] = useState(false);
    const [disabled, setSubmitDisabled] = useState(false);
    const [name, setName] = useState<string>(data?.name || "");
    const [description, setDescription] = useState<string>(data?.description || "");
    const [category, setCategory] = useState<{ label: string; id: string }>(data?.category || { label: "", id: "" });
    const [limit, setLimit] = useState<number>(data?.limit || 1);
    const [blackListRoles, setBlackListRoles] = useState<{ label: string; id: string }[]>(data?.blackListRoles || []);
    const [allowedRoles, setAllowedRoles] = useState<{ label: string; id: string }[]>(data?.allowedRoles || [roles.find(role => role.label === '@everyone') || roles[0]]);
    const [supportRoles, setSupportRoles] = useState<{ label: string; id: string }[]>(data?.supportRoles || []);
    const [closeChannelLogMenu, setCloseChannelLogMenu] = useState<{ label: string; id: string }>(data?.closeChannelLogMenu || { label: "", id: "" });
    const [openLogChannelMenu, setOpenLogChannelMenu] = useState<{ label: string; id: string }>(data?.openLogChannelMenu || { label: "", id: "" });
    const [claimLogChannelMenu, setClaimLogChannelMenu] = useState<{ label: string; id: string }>(data?.claimLogChannelMenu || { label: "", id: "" });
    const [deleteLogChannelMenu, setDeleteLogChannelMenu] = useState<{ label: string; id: string }>(data?.deleteLogChannelMenu || { label: "", id: "" });
    const [isAllowedRolesSelected, setIsAllowedRolesSelected] = useState(false);
    const [isBlackListRolesSelected, setIsBlackListRolesSelected] = useState(false);
    const [claimButton, setClaimButton] = useState<boolean>(data?.claimButton || true);
    const [addAllBots, setAddAllBots] = useState<boolean>(data?.addAllBots || false);
    const [oneStepClose, setOneStepClose] = useState<boolean>(data?.oneStepClose || false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setIsBlackListRolesSelected(true);
    }, [])

    const reset = () => {
        setErrorMessage("");
        setshowSnackbar(false);
        setName("");
        setDescription("");
        setCategory({ label: "", id: "" });
        setLimit(5);
        setBlackListRoles([]);
        setAllowedRoles([roles.find(role => role.label === '@everyone') || roles[0]]);
        setSupportRoles([]);
        setCloseChannelLogMenu({ label: "", id: "" });
        setOpenLogChannelMenu({ label: "", id: "" });
        setDeleteLogChannelMenu({ label: "", id: "" });
        setClaimLogChannelMenu({ label: "", id: "" });
        setClaimButton(true);
        setAddAllBots(false);
        setSubmitDisabled(false);
        setOneStepClose(false);
    }


    const handleBlackListRolesChange = (_x: undefined, selectedRoles: Array<{ label: string, id: string }>) => {
        if (everyone && selectedRoles.find(role => role.id === everyone.id)) {
            return
        } else {
            setBlackListRoles(selectedRoles);
            selectedRoles?.[0]?.id && setIsAllowedRolesSelected(true);
            !selectedRoles?.[0]?.id && setIsAllowedRolesSelected(false);
        }
    };

    const handleAllowedRolesChange = (_x: undefined, selectedRoles: Array<{ label: string, id: string }>) => {
        if (everyone && selectedRoles.find(role => role.id === everyone.id)) {
            setAllowedRoles([everyone]);
            setBlackListRoles([]);
            setIsBlackListRolesSelected(true)
        } else {
            setIsAllowedRolesSelected(false);
            setAllowedRoles(selectedRoles);
            selectedRoles?.[0]?.id && setIsBlackListRolesSelected(true);
            !selectedRoles?.[0]?.id && setIsBlackListRolesSelected(false);
        }
    };

    const handleSubmit = () => {
        let id = uuidv4()

        if (!name) {
            return setErrorMessage("Name is required");
        }

        if (name.length < 3) {
            return setErrorMessage("Name must be at least 3 characters");
        }

        if (name.length > 100) {
            return setErrorMessage("Name cannot exceed 100 words");
        }

        if (!description) {
            return setErrorMessage("description is required");
        }

        if (description.length < 3) {
            return setErrorMessage("Description must be at least 3 characters");
        }

        if (description.length > 100) {
            return setErrorMessage("Description cannot exceed 100 words");
        }

        if (!category) {
            return setErrorMessage("Category is required");
        }


        if (!allowedRoles[0] && !blackListRoles[0]) {
            return setErrorMessage("Please select at least one blacklisted role or allowed role");
        }

        setErrorMessage('')

        const Senddata = {
            id: data?.id ?? id,
            name,
            limit,
            description,
            category,
            allowedRoles,
            blackListRoles,
            supportRoles,
            openLogChannelMenu,
            closeChannelLogMenu,
            claimLogChannelMenu,
            deleteLogChannelMenu,
            claimButton,
            addAllBots,
            oneStepClose,
        }

        setSubmitDisabled(true);

        fetch(config.api(`panals/new`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store', // Disable caching
            },
            cache: 'no-store',
            next: {
                revalidate: 0,
            },
            body: JSON.stringify(Senddata)
        }).then(res => res.json()).then((data) => {

            if (data?.error) {
                setErrorMessage(data.message)
            } else {
                setOpen(false)
                setshowSnackbar(true);
                setSubmitDisabled(true);

                setTimeout(() => {
                    setshowSnackbar(false);
                }, 2000);

                if (refresh) refresh();
            }

            reset();
        }).catch(() => {
            setErrorMessage('error')
        })

    };


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                className={(!open && "hidden") || ""}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} key={data?.id}>
                    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-25">
                        <div className="bg-white p-8 shadow-lg opacity-100 w-[80%] h-[90%] rounded-xl overflow-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>Create Panal</h2>
                                <Button onClick={handleClose}>Close</Button>
                            </div>
                            {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                variant="outlined"
                                style={{ marginBottom: "1rem" }}
                            />
                            <TextField
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={4}
                                style={{ marginBottom: "1rem" }}
                            />
                            <TextField
                                label="Tickets Limit per user"
                                defaultValue={limit}
                                fullWidth
                                onChange={(event) => setLimit(Number(event.target.value))}
                                variant="outlined"
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Limit</InputAdornment>,
                                    inputProps: {
                                        min: 1, // Set the minimum value
                                        max: 10, // Set the maximum value
                                    },
                                }}
                                style={{ marginBottom: "1rem" }}
                            />
                            <Autocomplete
                                placeholder="Category"
                                value={category}
                                options={categories as Array<{}>}
                                onChange={(e, value) => setCategory(value as { label: string, id: string })}
                                renderInput={(params) => <TextField {...params} label="Category" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={true}
                                placeholder="Allowed Roles"
                                value={allowedRoles as Array<{}>}
                                options={roles as Array<{}>}
                                onChange={(x, value) => handleAllowedRolesChange(undefined, value as Array<{ label: string, id: string }>)}
                                disabled={isAllowedRolesSelected}
                                renderInput={(params) => <TextField {...params} label="Allowed Roles" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={true}
                                placeholder="Black List Roles"
                                value={blackListRoles as Array<{}>}
                                options={roles as Array<{}>}
                                onChange={(x, value) => handleBlackListRolesChange(undefined, value as Array<{ label: string, id: string }>)}
                                disabled={isBlackListRolesSelected}
                                renderInput={(params) => <TextField {...params} label="Black List Roles" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={true}
                                placeholder="Support Roles"
                                value={supportRoles as Array<{}>}
                                options={roles as Array<{}>}
                                onChange={(e, value) => setSupportRoles(value as Array<{ label: string, id: string }>)}
                                renderInput={(params) => <TextField {...params} label="Support Roles" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={false}
                                options={channels as Array<{}>}
                                value={openLogChannelMenu}
                                onChange={(e, value) => setOpenLogChannelMenu(value as { label: string, id: string })}
                                renderInput={(params) => <TextField {...params} label="Open Log Channel Menu" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={false}
                                options={channels as Array<{}>}
                                value={closeChannelLogMenu}
                                onChange={(e, value) => setCloseChannelLogMenu(value as { label: string, id: string })}
                                renderInput={(params) => <TextField {...params} label="Close Log Channel Menu" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={false}
                                options={channels as Array<{}>}
                                value={claimLogChannelMenu}
                                onChange={(e, value) => setClaimLogChannelMenu(value as { label: string, id: string })}
                                renderInput={(params) => <TextField {...params} label="Claim Log Channel Menu" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <Autocomplete
                                multiple={false}
                                options={channels as Array<{}>}
                                value={deleteLogChannelMenu}
                                onChange={(e, value) => setDeleteLogChannelMenu(value as { label: string, id: string })}
                                renderInput={(params) => <TextField {...params} label="Delete Log Channel Menu" variant="outlined" style={{ marginBottom: "1rem" }} />}
                            />
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    checked={claimButton}
                                    onChange={(e) => setClaimButton(e.target.checked)}
                                />
                                <label className="ml-2">Claim Button</label>
                            </div>
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    checked={addAllBots}
                                    onChange={(e) => setAddAllBots(e.target.checked)}
                                />
                                <label className="ml-2">Add all bots to ticket</label>
                            </div>
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    checked={oneStepClose}
                                    onChange={(e) => setOneStepClose(e.target.checked)}
                                />
                                <label className="ml-2">One Step Close</label>
                            </div>
                            <Button
                                type="button"
                                variant="contained"
                                disabled={disabled}
                                color={data?.id ? "success" : "primary"}
                                onClick={handleSubmit}
                                style={{ marginTop: "1rem" }}
                            >
                                {data?.id ? "Edit" : "Submit"}
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={() => setshowSnackbar(false)}
                message="Form submitted successfully"
                className='z-50'
            />
        </div>
    );
};

export default PanelModal;