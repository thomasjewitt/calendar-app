import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DateBlock from './DateBlock';
import EventModal from './EventModal';
import React, { useEffect } from 'react';
import useStore from '../store';

export default function Calendar(){
    let dates = [];
    const days = ["Sunday", "Monday", "Tuesday", 
                  "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const offset = firstDayOfMonth.getDay();
    const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const events = useStore(state => state.events);
    console.log(events);

    for (var i = 0; i < days.length; i++) {
        dates.push((
            <Grid item xs={1} sx={{textAlign: "center"}}>
                <Typography>{days[i]}</Typography>
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
        var date = new Date(today.getFullYear(), today.getMonth(), i+1)
        dates.push((
            <Grid item xs={1}>
                <DateBlock date={date} />
            </Grid>
        ))
    }


    return ( <React.Fragment>
                <Grid container spacing={2} columns={7}>
                    {dates}
                </Grid>
                <EventModal />
            </React.Fragment> );
}