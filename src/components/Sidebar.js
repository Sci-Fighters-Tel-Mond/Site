import React from "react";
import '../App.css';
import { SidebarData } from "./SidebarData";


function Sidebar() {
	return (<div className="Sidebar">
		<ul className="SidebarList">
			{SidebarData.map((val, key) => {
				return (
					<li key={key} onClick={
						() => { window.location.search = val.link; }
					}
						className="row"
						>
						<div>
							<i className={val.icon}></i>  <span className="sidebarlist-text">{val.title}</span>
						</div>
					</li>)
			})}
		</ul>
	</div>);
}
export default Sidebar;