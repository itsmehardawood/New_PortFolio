'use client'
import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_frztiyo",
      "template_dzg4uul",
      form.current,
      "YrlX8B7TtliL6MZCW"
    )
    .then((result) => {
      alert("Message Sent Successfully!");
    })
    .catch((error) => {
      alert("Error sending message!");
    });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div id="contact" className="min-h-screen w-full bg-gray-200 text-black flex items-center flex-col py-5">
      <div className="py-16 flex justify-center">
        <h1 className="inline px-9 py-3 text-2xl font-serif font-bold text-center border-4 border-black">
          Contact Me
        </h1>
      </div>
      <p className="text-center mt-8 w-[80%] text-gray-700">
        Feel free to reach out! Fill in the form below, and I will get back to you as soon as possible.
      </p>
      <div className="flex items-center mt-10 flex-col text-gray-900 w-[60%]">
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 shadow-lg rounded-lg w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter your message" required></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
