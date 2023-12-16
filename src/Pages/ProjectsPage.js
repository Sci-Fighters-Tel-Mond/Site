import React from 'react';
import "../App.css";
import Footer from '../components/Footer';
import ImageScrollView from '../components/ImageScrollView';
import YigalJunior from '../Images/YigalJunior.png';
import Scorpion from '../Images/Scorpion.png';
import Cobalt from '../Images/Cobalt.png';
import Jaccuse from '../Images/Jaccuse.png';

function ProjectsPage() {
	return (
		<div id="projects-page">
			<div className='textarea'>
				<h1 className='center-text'>Our Projects: </h1>
				<ImageScrollView images={[
					{ src: YigalJunior },
					{ src: Scorpion },
					{ src: Cobalt },
					{ src: Jaccuse },
				]}></ImageScrollView>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default ProjectsPage;
