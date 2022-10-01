import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const key = process.env.REACT_APP_GOOGLE_MAP_KEY

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: key}}
                defaultCenter={navigator.geolocation.getCurrentPosition((pos)=>{
                    return {lat: pos.coords.latitude, lng: pos.coords.longitude}
                })}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                }}
                onChildClick={()=>{}}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;