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
		<h3><i className="fa-solid fa-inbox"></i>  Email: <a href="mailto:ftctelmond@gmail.com" id="maillink">ftctelmond@gmail.com</a> <br /><br />Social: <br /><span id="header-links"><a href="https://www.youtube.com/channel/UCAvjhx10eeqAYq6_kjmAqFg/featured" target='_blank'><i className="fa-brands fa-youtube header-link"
		></i></a>
			<a style={{ color: "rgb(51, 51, 51)" }} href="https://www.instagram.com/scifighters16473/" target='_blank'><i className="fa-brands fa-instagram header-link"></i></a>
			<a href="https://open.spotify.com/show/0Oe06e8a4O22AMHFftqv8S?si=657194eb34804757&nd=1" target='_blank'><i className="fa-brands fa-spotify header-link"></i></a><a href="https://he-il.facebook.com/ftc.telmond" target='_blank'><i className="fa-brands fa-facebook header-link"></i></a></span></h3>
	</div>);
}

export default ContactPage;