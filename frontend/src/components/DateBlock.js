import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function DateBlock(props) {
    return props.disabled ? 
    <Paper></Paper> : 
    <Paper>
        <Box sx={{height: "14vh", padding: "10px", typography: "body1"}}>
            {props.date}
        </Box>
    </Paper>
}