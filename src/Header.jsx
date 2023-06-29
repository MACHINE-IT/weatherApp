import WeatherDetails from "./WeatherDetails";
import { useState, useEffect } from "react";
import { Box, TextField, Grid } from "@mui/material";
import "./Header.css";

export default function Header(props) {
    const [location, setLocation] = useState("");
    const [debounceTime, setDebounceTime] = useState(0);

    const locationChangeDebounce = (e, debounceTime) => {
        const searchValue = e.target.value;
        if (debounceTime) {
            clearTimeout(debounceTime);
        }
        const timeout = setTimeout(() => {
            locationChangeHandler(searchValue);
        }, 800);
        setDebounceTime(timeout);
    };

    const locationChangeHandler = (e) => {
        const searchValue = e;
        setLocation(searchValue);
    };

    return (
        <Box fullWidth>
            <Grid container>
                <Grid item className="header" margin="auto">
                    <h4>WEATHER APP</h4>
                </Grid>
            </Grid>
            <Grid item alignItems="center" justify="center" marginTop="10px">
                <TextField
                    id="outlined-basic"
                    label="Enter Location"
                    variant="outlined"
                    onChange={(e) => locationChangeDebounce(e, debounceTime)}
                />
            </Grid>
            <Grid item alignItems="center" justify="center" marginTop="10px">
                <WeatherDetails location={location} />
            </Grid>
        </Box>
    );
}
