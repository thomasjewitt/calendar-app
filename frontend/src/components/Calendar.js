import Grid from '@mui/material/Grid';
import DateBlock from './DateBlock';


export default function Calendar(){
    let dates = [];
    const days = ["Sunday", "Monday", "Tuesday", 
                  "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const offset = firstDayOfMonth.getDay();
    const daysInCurrentMonth = 28;

    for (var i = 0; i < days.length; i++) {
        dates.push((
            <Grid item xs={1} sx={{textAlign: "center"}}>
                {days[i]}
            </Grid>
        ))
    }

    for (var i = 0; i < offset; i++) {
        dates.push((
            <Grid item xs={1}>
                <DateBlock disabled={true} />
            </Grid>
        ))
    }

    for (var i = 0; i < daysInCurrentMonth; i++) {
        dates.push((
            <Grid item xs={1}>
                <DateBlock date={i+1} />
            </Grid>
        ))
    }

    return (<Grid container spacing={2} columns={7}>
        {dates}
    </Grid>)
}