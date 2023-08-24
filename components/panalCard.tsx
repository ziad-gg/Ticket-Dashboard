"use client";
import React, { CSSProperties, lazy, MouseEvent, useEffect, useState } from 'react';
import PanelModal from '@/components/ticket/panalModal';
import config from "@/config/config.mjs"
const Typography = lazy(() => import('@mui/joy/Typography'));
const Button = lazy(() => import('@mui/joy/Button'));
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
    name?: String;
    data: data;
    refresh: () => void
};

export default function PanalCard(Props: IProps) {

    const [EditModal, setEditModal] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [Disabled, setDisabled] = useState(Props.data.disabled);

    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        const embedCardElement = document.getElementById(Props.id as string);
        if (embedCardElement) {
            fetch(config.api(`panals/${Props.id}`), {
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

    useEffect(() => {
        fetch(config.api(`panals/get/${Props.id}`), {
        }).then(res => res.json()).then((data) => {
            setDisabled(data.disabled)
        })
    }, [Disabled])

    const handelDisabledEnabled = () => {

        if (Disabled) {
            fetch(config.api(`panals/enable/${Props.id}`), {
                method: 'POST',
            }).then(() => {
                setDisabled(false)
            })
        } else {
            fetch(config.api(`panals/disable/${Props.id}`), { // Change the endpoint to disable
                method: 'POST',
            }).then(() => {
                setDisabled(true)
            })
        }
    }
    return (
        <div id={Props.id as string} className="w-full h-20 bg-main flex items-center rounded-lg group justify-between">
            <div className="flex justify-center items-center p-5">
                <span className='w-[269px]'><span className=" opacity-50 text-lg font-bold ">{Props.name}</span></span>
                <Typography color="warning" sx={{ 'marginLeft': 16 }} className="ms-3 un">Hover to view more</Typography>
            </div>
            <div className='me-3'>
                <Button sx={{ marginRight: 3 }} color="primary" className='w-16' onClick={() => setEditModal(true)}>Edit</Button>
                <Button sx={{ marginRight: 3 }} color="danger" onClick={handleDeleteClick} >delete</Button>
                <Button id="statusButton" color={!Disabled ? "success" : "warning"} onClick={handelDisabledEnabled}>{Disabled ? "Enable" : "Disable"}</Button>
            </div>

            {EditModal && <PanelModal open={EditModal} setOpen={setEditModal} data={Props.data} refresh={Props.refresh} />}

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