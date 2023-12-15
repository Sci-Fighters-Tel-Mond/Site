import React from "react";

function Footer(props) {
	return (<h3 className="footer" style={props.style}><i className="fa-solid fa-inbox"></i>  Email: <a href="mailto:ftctelmond@gmail.com" id="maillink">ftctelmond@gmail.com</a></h3>);
}
export default Footer;