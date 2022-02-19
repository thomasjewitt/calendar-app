import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Event from './Event';
import useStore from '../store';

export default function DateBlock(props) {

    const showModal = useStore(state => state.showModal);
    const selectDate = useStore(state => state.selectDate);
    const getEventByDate = useStore(state => state.getEventByDate);
    const events = getEventByDate(props.date?.toISOString().substring(0, 10));
    const eventButtons = [];

    function handleClick() {
        showModal();
        selectDate(props.date);
    }

    if (events) {
        for (var i = 0; i < events.length; i++) {
            eventButtons.push(<Event event={events[i]} />)
        }
    }

    return props.disabled ? 
    <Paper></Paper> : 
    <Paper>
        <Box sx={{height: "14vh", padding: "10px", typography: "body1"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div>{props.date.getDate()}</div>
                <IconButton size="small" onClick={handleClick}>
                    <AddIcon />
                </IconButton>
            </Box>
            {eventButtons}
        </Box>
    </Paper>
}