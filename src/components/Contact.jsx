import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import contact from "../assets/contact.svg";
import style from "./styles/contact.module.css";
import emailjs from "emailjs-com"; // Import EmailJS
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.target;
    const isValid = formElement.checkValidity();

    if (isValid) {
      // Setup EmailJS configuration
      const serviceID = "service_hvwyyzd"; // Replace with your service ID
      const templateID = "template_4m7q8pb"; // Replace with your template ID
      const userID = "95maiMOTzg8Q-qphm"; // Replace with your user ID

      // Update templateParams to match your required structure
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      console.log("Form Data:", form); // Debugging: Log form data
      console.log("Template Params:", templateParams); // Debugging: Log template params

      // Send email using EmailJS
      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then(
          (response) => {
            console.log("Email sent successfully:", response); // Debugging: Log success response
            // Reset form after successful submission
            setForm({ name: "", email: "", message: "" });
            toast.success("Message sent successfully!", {
              position: "top-left",
              autoClose: 2000,
            });
          },
          (error) => {
            console.error("Error sending email:", error); // Debugging: Log error
            toast.error("Failed to send message, please try again.", {
              position: "top-left",
              autoClose: 2000,
            });
          }
        );
    } else {
      toast.error("Please fill in all the required fields.", {
        position: "top-left",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        I&apos;m always excited to hear about new opportunities and collaborations. Don&apos;t hesitate to reach out and let&apos;s make something great.
      </motion.p>
      <div className={style.container}>
        <motion.form
          variants={slideIn("left", "", 0, 1)}
          onSubmit={handleSubmit}
          className={style.form_container}
          noValidate // Prevent browser default validation
        >
          <div className={style.form}>
            <h4 className={style.form_title}>Contact Me</h4>
            <input
              type="text"
              placeholder="Name"
              required
              maxLength="30"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              className={style.input}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              maxLength="500"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${style.input} ${style.textarea}`}
            />
            <button type="submit" className={style.btn_container}>
              <span className={style.btn_hover}>Get in touch</span>
              <span className={style.btn}>Get in touch</span>
            </button>
          </div>
        </motion.form>
        <motion.div variants={slideIn("right", "", 0, 1)} className={style.img_container}>
          <img src={contact} alt="contact" className={style.img} loading="lazy" />
        </motion.div>
      </div>
      {/* ToastContainer to show the success/fail toasts */}
      <ToastContainer />
    </>
  );
};

export default SectionWrapper(Contact, "contact", "my-0");