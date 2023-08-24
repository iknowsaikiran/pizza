import * as React from 'react';
import PizzaLeft from '../images/PizzaLeft.jpg' 
import { Box, TextField } from '@mui/material';
import '../styles/Contact.css'
 
const Contact=()=>{
    return (
        <div className="contact">
            <div className="contact-left" style={{backgroundImage:`url(${PizzaLeft})`}}>

            </div>
            <div className='contact-right'>
                <h1 className='contact-right'>Contact Us</h1>
                <Box className="form-right">
                <TextField id="standard-basic" label="Full name" variant="standard" placeholder='your Full name'/>
                <TextField id="standard-basic" label="Email address" variant="standard" placeholder='your email id'/>
                <TextField id="standard-basic" label="Message" variant="standard"  placeholder='your message'/>
                <buuton className="btn btn-dark">send Message</buuton>
                </Box>

            </div>

        </div>

    );

      

    

    
};
export default Contact;