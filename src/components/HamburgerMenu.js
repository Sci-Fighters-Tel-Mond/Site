import React, { useState, useEffect } from "react";

function HamburgerMenu() {
    const toBool = (string) => {
        return string.toLowerCase() === 'true';
    };
    let suppousedState = window.localStorage.getItem('menu-open');
    const [state, setState] = useState(suppousedState ? toBool(suppousedState) : false);

    const toggleSidebar = () => {
        const newState = !state;
        setState(newState);
        window.localStorage.setItem('menu-open', newState.toString());
    };

    useEffect(() => {
        const renderState = (currentState) => {
            const sidebarList = document.getElementsByClassName('Sidebar')[0];
            if (sidebarList) {
                sidebarList.classList.toggle('active', !currentState);
            }

            const elementsToAdjust = [
                '.page'
            ];

            elementsToAdjust.forEach((elementId) => {
                const element = document.querySelector(elementId);
                if (element) {
                    if (window.screen.width <= 768) {
                        element.style.marginTop = !currentState ? '360px' : '70px';
                    } else {
                        element.style.marginTop = "0px";
                    }
                }
            });
        };

        renderState(state);
    }, [state]);

    return (
        <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" checked={!state} onChange={toggleSidebar} />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}

export default HamburgerMenu;
