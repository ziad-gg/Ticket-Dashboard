"use client";
import { useInfo } from '@/context/useInfo';
import React, { CSSProperties, lazy, MouseEvent, useState } from 'react';
import config from "@/config/config.mjs"
const Typography = lazy(() => import('@mui/joy/Typography'));
const Autocomplete = lazy(() => import('@mui/joy/Autocomplete'));
const Button = lazy(() => import('@mui/joy/Button'));
const Snackbar = lazy(() => import('@mui/material/Snackbar'));
const Modal = lazy(() => import('@mui/material/Modal'));

const modalStyle = {
    display: "flex",
    color: 'white',
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    background: "rgba(0, 0, 0, 0.5)",
};

interface IProps {
    id: String;
    name: String;
}

export default function EmbedCard(Props: IProps) {
    const id = Props.id;
    const info = useInfo();
    const channels = info.statics?.server.channels.map(channel => { return { label: '#'.concat(channel.name), id: channel.id } });
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | any>();
    const [showWarning, setShowWarning] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!selectedValue) {
            setShowWarning(true);
        } else {

            const dataToSend = {
                id,
                channelId: selectedValue.id
            };


            fetch(config.api(`embeds`), {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            }).then(() => {
                setDisabled(true)
                setShowSnackbar(true);

                setTimeout(() => {
                    setDisabled(false)
                    setShowSnackbar(false);
                }, 5000);
            });
        }
    };

    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        const embedCardElement = document.getElementById(id as string);
        if (embedCardElement) {


            fetch(config.api(`embeds/${id}`), {
                cache: 'no-store',
                method: 'delete'
            })
            setShowDeleteConfirmation(false);
            embedCardElement.remove();
        }
    };

    const cancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    return (
        <div id={id as string} className="w-full h-20 bg-main flex items-center rounded-lg group justify-between">
            <div className="flex justify-center items-center p-5">
                <span className='w-[269px]'><span className=" opacity-50 text-lg font-bold">{Props.name}</span> Message Embed</span>
                <Autocomplete
                    className="bg-main ms-11 text-white"
                    placeholder="Channel"
                    options={channels ?? []}
                    onChange={(event, newValue) => {
                        setSelectedValue(newValue);
                        setShowWarning(false);
                    }}
                    sx={{ width: 300 }}
                />
                {showWarning && <Typography color="danger" sx={{ 'marginLeft': 16 }} className="ms-3">Please select a channel from the list</Typography>}
            </div>
            <div>
                <Button
                    id="send"
                    disabled={disabled}
                    variant="solid"
                    color="success"
                    onClick={handleButtonClick}
                    className="bg-green-700 me-3 w-16 "
                    style={{ marginRight: 6 }}
                >
                    Send
                </Button>
                <Button
                    disabled={false}
                    variant="solid"
                    color="danger"
                    className="bg-red-700 me-4"
                    onClick={handleDeleteClick}
                    style={{ marginRight: 10 }}
                >
                    Delete
                </Button>
            </div>

            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                prefix="Success"
                color="green"
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                message="Embed send successfully to the channel"
            />

            <Modal open={showDeleteConfirmation} onClose={cancelDelete}>
                <div className="delete-modal" style={modalStyle as CSSProperties}>
                    <div className="modal-content">
                        <Typography className="pb-5  font-bold text-3xl" color="danger">Confirm Deletion</Typography>
                        <Typography className="pb-5  font-bold text-lg">Are you sure you want to delete?</Typography>
                        <Button variant="outlined" color="danger" onClick={confirmDelete} className="me-5" style={{ marginRight: 20 }}>
                            Confirm
                        </Button>
                        <Button variant="outlined" onClick={cancelDelete} className="ms-5">
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
