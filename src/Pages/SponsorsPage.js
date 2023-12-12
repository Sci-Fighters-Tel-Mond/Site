import React from "react";
import _3ndy from '../Images/Sponsors/_3dny.png';
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
						<img src={TelMond} />
					</a>
				</div>
				<div>
					<a href="http://mivrag.co.il/">
						<img src={mivrag} />
					</a>
				</div>
				<a href="https://www.intel.co.il/">
					<img src={Intel} />
				</a>
				<div>
					<a href="https://3dny.co.il/">
						<img src={_3ndy} />
					</a>
				</div>
				<div>
					<a href="https://tabunhatzoani.wixsite.com/tabun">
						<img src={tabun} />
					</a>
				</div>
				<div>
					<a href="https://sharonit.business.site/">
						<img src={Sharonit} />
					</a>
				</div>
				<div>
					<a href="https://rabintm.tik-tak.net/">
						<img src={rabin} />
					</a>
				</div>
				<div>
					<a href="http://www.st-enclosures.com/">
						<img src={ST} />
					</a>
				</div>
				<div>
					<a href="https://www.systematics.co.il/">
						<img src={Systematics} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default SponsorsPage;