import React, { useRef } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';
function ContactPage() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		const templateParams = {
			from_name: document.getElementById('contact-firstname').value,
			from_email: document.getElementById('contact-email').value,
			message: document.getElementById('contact-message').value
		};

		emailjs.send('service_jsx0p52', 'template_nyazw0r', templateParams, 'TOJGIlUfkYGawePSJ')
			.then((result) => {
				console.log(result.text);
				alert('Email sent!');
				document.getElementById('contact-firstname').value = '';
				document.getElementById('contact-message').value = '';
				document.getElementById('contact-email').value = '';
			})
			.catch((error) => {
				console.log(error.text);
				alert("Something went wrong while sending your email, try again later");
			});
	};

	return (<div id="contactForm">
		<h1 className='center-text'>Contact Us</h1>
		<form ref={form} onSubmit={sendEmail} id="contactFormForm">
			<input placeholder='Full Name' type="text" id="contact-firstname" name="user_name" required></input>  <br />
			<input placeholder='Email' id="contact-email" name="user_email" type="email" required></input>  <br />
			<textarea placeholder='Message' id="contact-message" name="message" required></textarea><br />
			<input type="submit" value="Send"></input>
		</form>
		<h3><i className="fa-solid fa-inbox"></i>  Email: ftctelmond@gmail.com</h3>
	</div>);
}

export default ContactPage;