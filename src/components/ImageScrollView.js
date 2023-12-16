import React, { useState } from "react";
import '../App.css';

function ImageScrollView(props) {
	const [currentImg, setCurrentImg] = useState(0);
	console.log(props.images.length, currentImg);
	return (
		<div className="imagescrollview" style={props.style}>
			{props.images.map((image, index) => (
				<img src={image.src} alt={`Image ${index}`} key={index} style={{ display: `${index === currentImg ? 'inline' : 'none'}` }} />
			))}
			<div id="imagescrollviewbuttons">
				<button id="imagescrollviewbuttons-b" onClick={() => { setCurrentImg(currentImg !== props.images.length - 1 ? currentImg + 1 : 0); }}>B</button>
				<button id="imagescrollviewbuttons-f" onClick={() => { setCurrentImg(currentImg !== 0 ? currentImg - 1 : props.images.length - 1); }}>F</button>
			</div>
		</div>
	);
}

export default ImageScrollView;
