import React, { useState, useEffect } from "react";

function HamburgerMenu() {
	const toBool = (string) => {
		return string.toLowerCase() === 'true';
	};
	let suppousedState = toBool(window.localStorage.getItem('menu-open'));
	const [state, setState] = useState(suppousedState == undefined ? false : suppousedState);

	const toggleSidebar = () => {
		const newState = !state;
		setState(newState);
		window.localStorage.setItem('menu-open', newState);
		renderState(newState);
	};

	const renderState = (currentState) => {
		console.log('Current State:', currentState);

		const sidebarList = document.getElementsByClassName('Sidebar')[0];
		if (sidebarList) {
			sidebarList.classList.toggle('active', currentState);
		}

		const elementsToAdjust = [
			'#introduction-text',
			'#about-text',
			'#contactForm',
			'#robots-div',
			'.textarea',
		];

		elementsToAdjust.forEach((elementId) => {
			const element = document.querySelector(elementId);
			if (element) {
				element.style.marginTop = currentState ? '360px' : '70px';
				console.log(`Updated ${elementId} marginTop to ${currentState ? '360px' : '0'}`);
			}
		});
	};


	useEffect(() => {
		renderState(state);
	}, [state]);

	return (
		<button className="hamburger-menu-button" onClick={toggleSidebar}>
			<i className="fa-solid fa-bars"></i>
		</button>
	);
}

export default HamburgerMenu;
