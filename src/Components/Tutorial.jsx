import React from 'react'
import { Container } from "react-bootstrap";

function Tutorial() {
  return (
    <Container className='tutorial my-4'>

        <h1 className='text-center my-4'>How to find Latitude and Longitude</h1>

        <p className='text-lead text-center'>At the moment you will have to use google maps to get latitude and longitude values for your properties,We are working on it to find a solution where you can just click location on internal map and get latitude and longitude values automatically.</p>

       
            <h6 className='my-2 text-center'>1. Go to maps.google.com</h6>
            <h6 className='my-2 text-center'>2. In search just write your address</h6>
            <h6 className='my-2 text-center'>3. When you find your address click right mouse button and click on first 2 numbers (that will copy them automatically) <img class="img-fluid my-2 rounded" src='https://res.cloudinary.com/dsq1kzjdy/image/upload/v1663861566/media/xE4DFl5_l6vhnl.png'></img></h6>
            <h6 className='my-2 text-center'>4. Next step is go to field Latitude and just paste those values</h6>
            <h6 className='my-2 text-center'>5. Next step is cut second number and delete ','</h6>
            <h6 className='my-2 text-center'>7. In the end your field should look picture below <br /> <img className="img-fluid my-2 rounded" src='https://res.cloudinary.com/dsq1kzjdy/image/upload/v1663861619/media/N2Jc4Hu_wus1gm.png'></img></h6>
            
           
       

        <p className='text-center'>And thats it now your location will be displayed on map</p>

    </Container>
  )
}

export default Tutorial