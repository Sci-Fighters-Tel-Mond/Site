import React from "react";
import '../App.css'
import Footer from "../components/Footer";

function AboutPage() {
	return (
		<div id="aboutpage">

			<div id="about-text">
				<div className="center-text text-shadow" id="about-header">Who Are We?</div>
				We're team SciFighters #16473 - Tel Mond's FTC team. We started our team on May 2019, and currently include students from the 8th and the 9th grades, and 5 volunteery mentors.<br></br>
				Our team is part of the FTC program of the FIRST organization. First is a non-profit organization founded by Dean Kamen with the purpouse of giving teens the ability to discover the excitement and retaliation of the fields of engineering, science and technology, by the experience of robotics.<br />

				<br /><div className="center-text text-shadow" id="about-accomplishments">Accomplishments <i className="fa-solid fa-award"></i></div>
				On our first season, we reached with <a href="https://linktr.ee/FataMorgana15637"><span style={{ color: "rgb(94, 65, 147)" }}>Fata Morgana #15637</span></a> from Ramat Hanegev to the highest score in Europe && Asia.
				On our second season, we won the natioals championship together with <a href="https://www.youtube.com/channel/UCi5kTV_r7xUbLNFc2UFP8LA"><span style={{ color: "rgb(30, 0, 0)" }}>AbilityEdge #18273</span></a> from Ashdod and <a href="https://www.instagram.com/orbit.14872/?hl=en"><span style={{ color: "rgb(0, 1, 199)" }}>Orbit #14872</span></a> from Binyamina.
				<br />In addition, we've won the promote award, that is given to the team that has made the best video that promotes FIRST, this year, the video was on the topic of "How to do robotics in covid".  <a href="https://www.youtube.com/watch?v=s4N94JtRMsI" className="button">Promote video 2021</a><br /><br />
				<div className="center-text text-shadow" id="about-workflow">Our Workflow</div>
				In our team, we're devided to groups of profesion in diffrent fields : Programming, Building, CAD, Strategy, Social && Media. In our team, we promote team work, learning, creativity, technical thinking, leadership and contributing to the Community. <br />
				<a href="https://www.firstinspires.org/" className="button">More about FIRST</a>
				<Footer style={{ marginTop: "30px" }}></Footer>
			</div>
		</div>);
}
export default AboutPage;