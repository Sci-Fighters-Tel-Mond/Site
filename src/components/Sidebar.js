import React from "react";
import '../App.css';
import { SidebarData } from "./SidebarData";


function Sidebar() {
	return (<div className="Sidebar">
		<ul className="SidebarList">
			{SidebarData.map((val, key) => {
				return (
					<li key={key} onClick={
						() => { window.location.pathname = val.link }
					}
						className="row"
						id={window.location.pathname === val.link ? "active" : ""}>
						<div>
							<i className={val.icon}></i>  {val.title}
						</div>
					</li>)
			})}
		</ul>
	</div>);
}
export default Sidebar;