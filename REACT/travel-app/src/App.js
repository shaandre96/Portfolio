import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';

import { getPlaces } from './api'

const App = () => {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, [])

    useEffect(() => {
        getPlaces()
        .then((data)=>{
            console.log('data', data)
            setPlaces(data)
        });
    }, [bounds, coordinates])

    return (
    <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List />    
            </Grid>    
            <Grid item xs={12} md={8}>
                <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                />
            </Grid>    
        </Grid>   
    </>
    )
}

export default App;