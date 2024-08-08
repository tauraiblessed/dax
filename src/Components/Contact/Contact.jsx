import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import address_icon from '../../assets/address-icon.png'




const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2655847-6a8a-4429-a1ac-11ee8d591e38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };







  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message.. <img src={msg_icon} alt="" /></h3>
            <p>
                Feel free to reach out through contact form of find our contact information
                below. Your feedback,questions, and suggestions are important to us as we
                strive to provide exceptional service to the community.
            </p>
            <ul>
             <li><img src={mail_icon} alt="" /> tauraimamire@gmail.com</li>
             <li><img src={phone_icon} alt="" /> +263 715 527</li>
             <li><img src={address_icon} alt="" /> 3984 Hertfordshire, Gweru, Zimbabwe.</li>
            </ul>

        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
              <label htmlFor="">Your Name</label>
              <input type="text" name='name' placeholder='Enter Name' required />

              <label htmlFor="">Phone Number</label>
              <input type="tel" name='name' placeholder='Enter Phone Number' required />

              <label htmlFor="">Message</label>
              <textarea name="message" rows='6' placeholder='Enter message' required></textarea>
              <button className="btn dark-btn" type='submit'>Submit Now</button>
            </form>

            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact