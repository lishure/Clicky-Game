//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Just Desserts</h1>
		<h2>Click on any dessert to earn a point, but don't click on the same dessert more than once.</h2>
	</header>
);

export default Jumbotron;