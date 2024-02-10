import React from "react";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import RobotsPage from "../Pages/RobotsPage";
import SponsorsPage from "../Pages/SponsorsPage";
import ContactPage from "../Pages/ContactPage";
import PageNotFoundPage from "../Pages/PageNotFoundPage";

export const SidebarData = [
	{
		title: 'Home',
		icon: 'fa-solid fa-house',
		link: '?home',
		page: (<HomePage></HomePage>)
	}, {
		title: 'About',
		icon: 'fa-solid fa-address-card',
		link: '?about',
		page: (<AboutPage></AboutPage>)
	},
	{
		title: 'Robots',
		icon: 'fa-solid fa-robot',
		link: '?robots',
		page: (<RobotsPage></RobotsPage>)
	},
	{
		title: 'Sponsors',
		icon: 'fa-solid fa-money-bill',
		link: '?sponsors',
		page: (<SponsorsPage></SponsorsPage>)
	},
	// {
	// 	title: 'Projects',
	// 	icon : 'fa-solid fa-computer',
	// 	link: '?projects'
	// },
	{
		title: 'Contact Us',
		icon: 'fa-solid fa-phone',
		link: "?contact",
		page: (<ContactPage></ContactPage>)
	},
];

export function getPageByPathname(pathname) {
	const pageData = SidebarData.find(item => item.link === pathname);
	return pageData ? pageData.page : <PageNotFoundPage></PageNotFoundPage>;
}