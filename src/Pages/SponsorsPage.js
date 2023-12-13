import React from "react";
import tdny from '../Images/Sponsors/tdny.png';
import TelMond from '../Images/Sponsors/TelMond.png'
import mivrag from '../Images/Sponsors/mivrag.png';
import Intel from '../Images/Sponsors/Intel.png';
import rabin from '../Images/Sponsors/rabin.png';
import Sharonit from '../Images/Sponsors/Sharonit.png';
import ST from '../Images/Sponsors/ST.png';
import Systematics from '../Images/Sponsors/Systematics.png';
import tabun from '../Images/Sponsors/tabun.png';
import '../App.css';
function SponsorsPage() {
	return (
		<div className="textarea">
			<h1 className="center-text" style={{ margin: "10px" }}>Sponsors: </h1>
			<div id="sponsors-container">
				<div className="sponsor">
					<a href="https://tel-mond.muni.il/">
						<img src={TelMond} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="http://mivrag.co.il/">
						<img src={mivrag} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="https://www.intel.co.il/">
						<img src={Intel} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="https://3dny.co.il/">
						<img src={tdny} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="https://tabunhatzoani.wixsite.com/tabun">
						<img src={tabun} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="https://rabintm.tik-tak.net/">
						<img src={rabin} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="http://www.st-enclosures.com/">
						<img src={ST} alt="" />
					</a>
				</div>
				<div className="sponsor">
					<a href="https://www.systematics.co.il/">
						<img src={Systematics} alt="" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default SponsorsPage;