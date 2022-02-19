import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useStore from '../store';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    typography: "body1"
  };
  
const fieldStyle = {
    marginBottom: '10px',
    textAlign: "center"
}

const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

export default function EventModal(){
    const modalShowing = useStore(state => state.modalShowing);
    const hideModal = useStore(state => state.hideModal);
    const getEvents = useStore(state => state.getEvents);
    const date = useStore(state => state.selectedDate);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit() {
        const response = await fetch("/events/", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                date: date.toISOString().substring(0, 10)
            }),
            headers: {
                "content-type": "application/json"
            }
        });
        hideModal();
        getEvents();
        return response.json();
    }
    

    return (
            <Modal open={modalShowing} onClose={hideModal}>
                <Box sx={boxStyle}>
                    <Typography sx={fieldStyle} variant="h6">Create event for {date.toLocaleDateString("en-US", dateOptions)}</Typography>
                    <TextField sx={fieldStyle} label="Title" onChange={(event) => setTitle(event.target.value)}/>
                    <TextField sx={fieldStyle} label="Description" multiline rows={4} onChange={(event) => setDescription(event.target.value)}/>
                    <Button onClick={handleSubmit}>Create Event</Button>
                </Box>
            </Modal>
            );
}