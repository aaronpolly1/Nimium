import React from "react"
import SectionHeader from "../SectionHeader"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/styles"
import axios from "axios"
import parse from 'html-react-parser';
import Notifications, {notify} from 'react-notify-toast';

const styles = {
  input: {
    color: "white",
    "& .MuiFormLabel-root": {
      color: "#707070",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },

    "& label.Mui-focused": {
      color: "#707070",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#707070",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#707070",
    },
    "&:-webkit-autofill":{
      backgroundColor:"red"
    }
  },
}

const ContactSection = props => {
  var name,
    email,
    message = ""
  const { classes } = props

  return (
    <div className="sectionContainer">
      <SectionHeader
        title={parse("GET IN TOUCH.<br>THROW US A BONE")}
        subDescription="Give us a short description of your business challenge, and we’ll arrange a meeting with our top business architect in your industry."
      />
      <form>
        <div
          style={{
            display: "flex",
            width: "75%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderRight: "1px solid white",
              paddingRight: "3%",
            }}
          >
            <TextField
              autoComplete={false}
              fullWidth
              id="contactname"
              label="Name"
              value={name}
              margin="normal"
              className={classes.input}
              onChange={e => {
                name = e.target.value
              }}
            />
            <TextField
            autoComplete={false}
              fullWidth
              id="contactemail"
              label="Email"
              value={email}
              name="email"
              margin="normal"
              className={classes.input}
              onChange={e => {
                email = e.target.value
              }}
            />
          </div>
          <div
            style={{
              width: "60%",
              paddingLeft: "5%",
              marginTop:"12px",
            }}
          >
            <TextField
              id="contactmessage"
              placeholder="Write Text here..."
              label="Message"
              multiline={true}
              name="message"
              fullWidth
              rowsMax={5}
              className={classes.input}
              onChange={e => {
                message = e.target.value
              }}
            />
          </div>
        </div>

        <button
          className="button"
          style={{ width: "25%", marginTop: "2%" }}
          type="submit"
          name="submit"
          onClick={e => {
            e.preventDefault()
            axios({
              method: "post",
              url:
                "https://backend.nimium.be/wp-json/rcdb/v1/messages",
              data: {
                fromName: name,
                fromEmail: email,
                message: message,
              },
            }).then(response => {

              if(response.status == 200)
              {

                
                let myColor = { background: "#d19900", text: "#0c0903" };
                notify.show("Message Sent", "custom", 5000, myColor)

                document.querySelector('#contactmessage').value = "";
                document.querySelector('#contactname').value = "";
                document.querySelector('#contactemail').value = "";

                

              }
              else
              {
                let myColor = { background: "#d19900", text: "#0c0903" };
                notify.show("Auwch, Your message could not be sent", "custom", 5000, myColor)
              }
            }
              
            )
          }}


        >
          SEND
        </button>
      </form>
    </div>
  )
}

export default withStyles(styles)(ContactSection)
