import React from "react";
import YigalJunior from '../Images/YigalJunior.png';
import Scorpion from '../Images/Scorpion.png';
import Cobalt from '../Images/Cobalt.png';
import Jaccuse from '../Images/Jaccuse.png';
import Constantin from '../Images/Constantin.jpg';
import Footer from "../components/Footer";

function RobotsPage() {
	return (
		<div id="robots-div" className="page">
			<div className="robot-sum">
				<h1 className="center-text">Yigal Junior</h1>
				<img src={YigalJunior} className="robot-img" />
				<p style={{ textAlign: "left" }} className="robot-sum-text">Yigal Junior was crafted for an inaugural training mission assigned to us by our mentors, serving as a hands-on learning experience for basic mechanics and coding.<br /><br /> The mission directive was clear: task the robot with the transportation of <br /> a 5kg cube to a designated point, where it would delicately deposit the load. This purposeful exercise provided a foundational platform for our team to grasp essential principles in both mechanical engineering and programming.</p>
			</div><br /><br />
			<div className="robot-sum">
				<h1 className="center-text">Scorpion</h1>
				<img src={Scorpion} className="robot-img" />
				<p style={{ textAlign: "left" }} className="robot-sum-text">
					Scorpion, our robot deployed during the SKYSTONE season, adeptly maneuvers to pick up cubes and skillfully constructs towers using its sophisticated arm.<br /><br /> Throughout the season, Scorpion underwent a transformative evolution, transitioning its arm design from a dual-axis configuration to a more streamlined single-axis system,<br /> complemented by a linearly moving part on a rail.
					This deliberate modification was aimed at enhancing<br /> control precision for our skilled drivers, ensuring a seamless and efficient performance on the field.</p>
			</div><br />
			<div className="robot-sum">
				<h1 className="center-text">Cobalt</h1>
				<img src={Cobalt} className="robot-img" />
				<p style={{ textAlign: "left" }} className="robot-sum-text">Cobalt was the robot we used during the Ulimtate Goal season. He has <br />the capability of gathering rings using a brush and moves them to a container using 3 rows of complaint wheels.<br />The container is lifted up together with the shooting mechanism to the right angle and shoots the <br/> rings.<br />
					<br />The first gathering prototype was moving the rings using only wheels, without the brush, when we saw the rings weren't being collected propertly we added the brush in order for <br />the rings to get picked up correctly.</p>
			</div><br />
			<div className="robot-sum">
				<h1 className="center-text">J'accuse</h1>
				<img src={Jaccuse} className="robot-img" />
				<p style={{ textAlign: "left" }} className="robot-sum-text">J'accuse was our robot for the Freight Frenzy season. His drive is designed so that the robot would be able to pass on the blockage, he <br /> also has one arm that sits on a rail that moves it horizontally<br /> That mechanism allowed us to move the arm to each of the sides of the rail, in order to pick up the game props more easily.</p>
			</div><br /><br /><br /><br />
			<div className="robot-sum">
				<h1 className="center-text">Constantin</h1>
				<img src={Constantin} className="robot-img"></img>
				<p style={{textAlign:"left"}} className="robot-sum-text">Constantin was our robot for the Power Play  season. His drive is designed so that the robot would be able to pass easily between the junctions, his intake mechanizem is a clamp, the clamp takes cones and puts them on the junctions. The clap used to be able to go from one side of the robot to the other, now he has an arm on the lifts that has a range of 180°-- which allows the robot to cycle faster.</p>
			</div><br /><br /><br /><br />
			<Footer style={{ marginTop: "120px" }}></Footer>
		</div>
	);
}

export default RobotsPage;