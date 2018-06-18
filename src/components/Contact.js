import React, {Component} from 'react';


class Contact extends Component {
	render(){
		return(
            <div className="contact">
               <h3 className="form__heading">E-mail Us</h3>
               <form className="form">
        			<input 
                        type="text" 
        				name="name" 
        				placeholder="Enter your name"
                        className="form__input" 
                        required/><br />
        			<input 
                        type="email" 
        				name="email" 
        				placeholder="Enter your email address"
                        className="form__input" 
                        required /><br />
        			<textarea
        				name="message" 
        				placeholder="Write your message"
                        className="form__message"
                        required /><br />
                    <div className="form__button">
        			    <button className="form__button--btn" type="submit">Send</button>
                    </div>
  				</form>
            </div>
        );
    }
}
 

export default Contact;