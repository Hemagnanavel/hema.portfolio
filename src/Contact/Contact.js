import React, { useState } from "react";
import "./Contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedinIn, FaInstagram, FaGithub, FaLongArrowAltUp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your Google Form's formResponse URL
    const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

    const formPayload = new FormData();
    formPayload.append("entry.YOUR_ENTRY_ID_1", formData.name);  
    formPayload.append("entry.YOUR_ENTRY_ID_2", formData.email); 
    formPayload.append("entry.YOUR_ENTRY_ID_3", formData.subject); 
    formPayload.append("entry.YOUR_ENTRY_ID_4", formData.message); 

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formPayload,
    })
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    });
  };

  return (
    <div className="contact_section" id="contact">
      <h5 className="contact_tittle icon_text">Contact</h5>
      <h2 className="contact_id">I'd Love To Hear From You.</h2>
      <p className="contact_para">Feel free to Contact Me:</p>
      
      <div className="input_section">
        <form onSubmit={handleSubmit} className="contact_form input_section">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" className="text_area" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>

      <div className="iconsection">
        <div>
          <a href="https://www.google.com/maps/place/Lalapettai,+Tamil+Nadu+639105/" target="_blank" rel="noopener noreferrer">
            <IoLocationOutline className="icon" />
          </a>
          <h3 className="icon_text">Where to find me</h3>
          <p className="contact_para">Lalapet, Karur(Dt), Tamil Nadu, India</p>
        </div>
        <div>
          <a href="mailto:hemalathacse04@gmail.com">
            <MdOutlineMail className="icon" />
          </a>
          <h3 className="icon_text">Email Me At</h3>
          <p className="contact_para">hemalathacse04@gmail.com</p>
        </div>
        <div>
          <a href="tel:+916369208518">
            <FaPhoneAlt className="icon" />
          </a>
          <h3 className="icon_text">Call Me At</h3>
          <p className="contact_para">Phone: Telegram (6369208518)</p>
        </div>
      </div>

      <div className="contact_end">
        <div className="copyright">
          <span>© Copyright 2024 </span>
          <span>Design by <a className="link_text link" href="https://www.linkedin.com/in/hema-g-778a48325">Hemalatha</a></span>
          <div className="contact_icons">
            <a className="link_text link" href="https://www.linkedin.com/in/hema-g-778a48325">
              <FaLinkedinIn />
            </a>
            <a className="link_text link" href="https://www.instagram.com/hl_littleprincess/">
              <FaInstagram />
            </a>
            <a className="link_text link" href="https://github.com/Hemagnanavel">
              <FaGithub />
            </a>
          </div>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <FaLongArrowAltUp className="arrow"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
