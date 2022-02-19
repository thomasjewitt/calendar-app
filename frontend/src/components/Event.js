import Button from '@mui/material/Button';
import {Fragment, useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import useStore from '../store';

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

export default function Event(props) {
    const [showModal, setShowModal] = useState(false);
    const deleteEvent = useStore(state => state.deleteEvent);
    const getEvents = useStore(state => state.getEvents);

    function handleClick() {
        setShowModal(true);
    }

    function handleDelete() {
        deleteEvent(props.event.event_id);
        setShowModal(false);
        getEvents();
    }

    return ( 
    <Fragment>
        <Button onClick={handleClick}>{props.event.title}</Button>
        <Modal open={showModal} onClose={() => {setShowModal(false)}}>
            <Box sx={boxStyle}>
                <Typography variant="h6">{props.event.title}</Typography>
                <Typography>{props.event.description}</Typography>
                <Button onClick={handleDelete} color="error">Delete</Button>
            </Box>
        </Modal>
    </Fragment>);
}