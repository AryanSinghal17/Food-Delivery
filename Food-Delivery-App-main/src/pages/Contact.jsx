import React,{useState} from "react";
import "../styles/ContactStyle.css";
import ContactForm from "../components/ContactForm";
import Header from "../components/Layouts/Header";

function Contact() {
  return (
    <>
    <Header></Header>
      <div className="contact ">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">Have any questions, suggestions, or feedback?</p>
        <ContactForm />
      </div>
    </>
  );
}
export default Contact;