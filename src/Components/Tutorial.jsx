import React from 'react'
import { Container } from "react-bootstrap";

function Tutorial() {
  return (
    <Container className='tutorial my-4'>

        <h1 className='text-center my-4'>How to find Latitude and Longitude</h1>

        <p className='text-lead'>At the moment you will have to use google maps to get latitude and longitude values for your properties,We are working on it to find a solution where you can just click location on internal map and get latitude and longitude values automatically.</p>

        <ol>
            <li>Go to maps.google.com</li>
            <li>In search just write your address</li>
            <li>When you find your address click right mouse button and click on first 2 numbers (that will copy them automatically) <img src='https://res.cloudinary.com/dsq1kzjdy/image/upload/v1663861566/media/xE4DFl5_l6vhnl.png'></img></li>
            <li>Next step is go to field Latitude and just paste those values</li>
            <li>Next step is cut second number and delete ','</li>
            <li>In the end your field should look picture below</li>
            <img src='https://res.cloudinary.com/dsq1kzjdy/image/upload/v1663861619/media/N2Jc4Hu_wus1gm.png'></img>
        </ol>

        <p>And thats it now your location will be displayed on map</p>

    </Container>
  )
}

export default Tutorial