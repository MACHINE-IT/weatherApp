import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { CircularProgress, Typography, TextField } from "@mui/material";

export default function WeatherDetails(location) {
    const userLocation = location.location;
    const [weatherData, setWeatherData] = useState("");
    const [locationError, setLocationError] = useState("");
    const [weatherDataLoading, setWeatherDataLoading] = useState(false);

    useEffect(() => {
        const fetchWeatherDetails = async () => {
            try {
                if (userLocation) {
                    setWeatherDataLoading(true);
                    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=3227355b56094e72a3490557232906&q=${userLocation}&aqi=yes
        `);
                    setWeatherData(response.data);
                    setWeatherDataLoading(false);
                    setLocationError('');
                }
            } catch (e) {
                setWeatherDataLoading(false);
                setWeatherData('');
                setLocationError(e.response.data.error.message);
                //alert(e.message);
            }
        };

        fetchWeatherDetails();
    }, [userLocation]);



    return (
        <>
            {userLocation && locationError ? (
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "red" }}>
                    {locationError}
                </Typography>
            ) : ""}
            {weatherDataLoading ? (
                <CircularProgress />
            ) : (
                userLocation && weatherData && <WeatherCard weatherData={weatherData} />
            )}
        </>
    );
}
