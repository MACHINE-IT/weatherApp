import { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
import {
    Box,
    TextField,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";

export default function WeatherCard(props) {
    const { weatherData } = props;

    const weather = {
        name: weatherData?.location?.name || "",
        region: weatherData?.location?.region || "",
        country: weatherData?.location?.country || "",
        icon: weatherData?.current?.condition?.icon || "",
        tempC: weatherData?.current?.temp_c || "",
        tempF: weatherData?.current?.temp_f || "",
        condition: weatherData?.current?.condition?.text || "",
        windSpeed: weatherData?.current?.wind_kph || "",
        humidity: weatherData?.current?.humidity || "",
        cloudCoverage: weatherData?.current?.cloud || "",
        lastUpdated: weatherData?.current?.last_updated || ""
    };

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            marginTop="10px"
        >
            <Grid item sx={12} md={12}>
                <Typography gutterBottom variant="h4" component="div">
                    {weather.name}, {weather.country}
                </Typography>
            </Grid>

            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item sx={12} md={12}>
                            <img src={weather.icon} alt={`${weather.name}`} title={weather.condition} />
                        </Grid>
                        <Grid item sx={6} md={6}>
                            {/* <img src={weather.icon} alt={`${weather.name}`} /> */}
                            <Typography gutterBottom variant="h5" component="div">
                                Temperature
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                condition
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Wind Speed
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Humidity
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Cloud Coverage
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Last Updated
                            </Typography>
                        </Grid>
                        <Grid item sx={6} md={6}>
                            <Typography gutterBottom variant="h5" component="div">
                                {weather.tempC}&deg;C / {weather.tempF}&deg;F
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {weather.condition}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {weather.windSpeed} km/h
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {weather.humidity} %
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {weather.cloudCoverage} %
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {weather.lastUpdated}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
