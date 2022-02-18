import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useStore from '../store';
import { Button, TextField, Typography } from '@mui/material';
import { textAlign } from '@mui/system';

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

export default function EventModal(){
    const modalShowing = useStore(state => state.modalShowing);
    const hideModal = useStore(state => state.hideModal);
    const date = useStore(state => state.selectedDate);
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    return (
            <Modal open={modalShowing} onClose={hideModal}>
                <Box sx={boxStyle}>
                    <Typography sx={fieldStyle} variant="h6">Create event for {date.toLocaleDateString("en-US", dateOptions)}</Typography>
                    <TextField sx={fieldStyle} label="Title" />
                    <TextField sx={fieldStyle} label="Description" multiline rows={4}/>
                    <Button>Create Event</Button>
                </Box>
            </Modal>
            );
}