import React from "react";
import '../App.css';
import Scorpion from '../Images/Scorpion.png';
import Jaccuse from '../Images/Jaccuse.png';
import Cobalt from '../Images/Cobalt.png';
function HomePage() {
	return (<div id="homepage">
		<div id="introduction-text">We're team SciFighters #16473, our team consists of students from the 8th to 10th grade, in Rabin school, Tel Mond.<br />
			This is our 6th year that we're taking part in the FIRST FTC program.<br /><br />
			<div id="seasons-sum">
				<div id="skystone">
					SKYSTONE 2019-2020:
					<img src={Scorpion}></img><br />
					<ul>
						<li>Winning alliance in the Misgav regionals</li>
						<li>Ranked: 4th in Israel</li>
					</ul>
				</div>
				<div id="ultimate-goal">
					ULTIMATE GOAL 2020-2021:
					<img src={Cobalt}></img><br />
					<ul>
						<li>Winning alliance in nationals</li>
						<li>Ranked: 1st in Israel</li>
						<li>Promote award</li>
					</ul>
				</div>
				<div id="freight-frenzy">
					FREIGHT FRENZY 2021-2022:
					<img src={Jaccuse}></img><br />
					<ul>
						<li>
							Innovation award
						</li>
						<li>Ranked: 3rd in Israel</li>
						<li>Finalistic alliacne in the Offseason competition</li>
					</ul></div>
				<div id="powerplay">
					POWER PLAY 2022-2023:
					<ul>
						<li>
							Finalistic alliance in the training competition in Megido
						</li>
						<li>
							Avg of 121 points
						</li>
						<li>
							Ranked: 7th in Israel
						</li>
					</ul></div>
			</div>
		</div>
	</div>);
}

export default HomePage;