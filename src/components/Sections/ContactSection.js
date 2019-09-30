import React, { useState } from 'react';
import SectionHeader from "../SectionHeader";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';


const styles = {
  input: {
    color: "white",
    '& .MuiFormLabel-root': {
      color: '#707070',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },

    '& label.Mui-focused': {
      color: '#707070',
    },'& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },'& .MuiInput-underline:before': {
      borderBottomColor: '#707070',
    }, '&.Mui-focused fieldset': {
      borderColor: '#707070',
    },
  }
};




const ContactSection = props => {

  
  var name,email,message = "";
  const { classes } = props;

  return (
    <div className="sectionContainer">
      <SectionHeader
        title="GET IN TOUCH. THROW US A BONE"
        subDescription="Give us a short description of your business challenge, and we’ll arrange a meeting with our top business architect in your industry."
      />
      <form>
        <div style={{
          display:'flex',
          width:"75%",
          justifyContent:'space-between'
        }}>
        <div style={{
          borderRight: "1px solid white",
          paddingRight: "3%"
        }}>
        <TextField
        fullWidth
        id="name"
        label="Name"
        value={name}
        margin="normal"
        className={classes.input}
        onChange={(e) => {
          name = e.target.value}}

      />
        <TextField
        fullWidth
        id="email"
        label="Email"
        value={email}
        name="email"
        margin="normal"
        className={classes.input}
        onChange={(e) => {
          email = e.target.value}}
       
      />
        </div>
        <div style={{
            width:"60%",
            paddingLeft:"5%"
        }}>
        <TextField
          placeholder="Write Text here..."
          label="Message"
          multiline={true}
          name="message"
          fullWidth
          rowsMax={8}
  className={classes.input}
          onChange={(e) => {
            message = e.target.value}}
/>
        </div>

        </div>
       
      
        <input className="button" style={{width:"25%", marginTop:"2%"}} type="submit" name="submit" value="SEND" onClick={(e)=>{
          e.preventDefault();
   
          alert(name)
          axios({
            method:'post',
            url:'http://nimium-env.ukqcmidxpz.eu-central-1.elasticbeanstalk.com/wp-json/rcdb/v1/messages',
            data:{
              fromName: name,
              fromEmail: email,
              message:message
            }
          })

          alert("send")

        }} />
      </form>
    </div>
  );
};

export default withStyles(styles)(ContactSection);
