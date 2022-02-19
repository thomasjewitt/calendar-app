import Button from '@mui/material/Button';
import {Fragment, useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

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

    function handleClick() {
        setShowModal(true);
    }

    function handleDelete() {

    }

    return ( 
    <Fragment>
        <Button onClick={handleClick}>{props.event.title}</Button>
        <Modal open={showModal} onClose={() => {setShowModal(false)}}>
            <Box sx={boxStyle}>
                <Typography variant="h6">{props.event.title}</Typography>
                <Typography>{props.event.description}</Typography>
                <Button color="error">Delete</Button>
            </Box>
        </Modal>
    </Fragment>);
}