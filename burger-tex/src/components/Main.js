import React, {Component} from 'react'
import Scrollchor from 'react-scrollchor';

class Main extends Component {
	render() {
		return (
			<div>
				<div className="navbar navbar-default">
					<div className="top-nav">
						<h2 id="title">Burger Tex™</h2>
						<div id="claims">
							<p>Baking fresh buns twice a day, every day!</p>
							<p>Using fresh USDA Choice Chuck Patties on fresh wheat buns!</p>
						</div>
					</div>				
					<div className="bottom-nav">
						<Scrollchor to="#Home" id="home-link"><h4>Home</h4></Scrollchor>
						<Scrollchor to="#Menu" id="menu-link"><h4>Menu</h4></Scrollchor>
						<Scrollchor to="#About" id="about-link"><h4>About</h4></Scrollchor>
					</div>
				</div>
				<div id="component-display">
					<div id="hamburger1">
						<div id="unique">
							<p>"Burger Tex" and "The Original Burger Tex" are registered trademarks with The
							United States Patent and Trademark Office, #2736706 and #2926838, respectively. 
							We are not affiliated with any similarly named institutions in Houston or around Austin.</p>
							<h4>Accept no substitution to our fresh USDA Choice patties and freshly baked buns</h4>
						</div>
					</div>
					<div className="outer" id="Home">
						<div className="inner">
							<h4>Ample parking</h4>
							<a href="../../images/BT1.jpg"><img src="../../images/BT1.jpg" alt="" /></a>
							<h4>Fix your own condiments and drink as much soda as you please</h4>
							<a href="../../images/BT2.jpg"><img src="../../images/BT2.jpg" alt="" /></a>
							<h4>See the freshness as it's prepared for you</h4>
							<a href="../../images/BT3.jpg"><img src="../../images/BT3.jpg" alt="" /></a>
							<h4>Good ol' Texan atmosphere, rustic and cozy</h4>
							<a href="../../images/BT4.jpg"><img src="../../images/BT4.jpg" alt="" /></a>
							<h4>Our in-house bakery where we make fresh wheat buns twice a day</h4>
							<a href="../../images/BT5.jpg"><img src="../../images/BT5.jpg" alt="" /></a>
						</div>	
					</div>
					<div id="hamburger2"></div>
					<div className="outer" id="Menu">
						<div className="inner">
							<h3>Our buns aren't the only fresh foods in the kitchen. Our onion rings, chicken fried steaks, 
							chicken friend chicken, and fried mushrooms are made here fresh daily. We do not freeze our food.</h3>
							<h3>Come try our "Spicy Bulgoki", "Spicy Fried Chicken", "Grilled or Fried Chicken Salad", "Bulgoki Salad", 
							or "Teriyaki Chicken".</h3>
						</div>	
						<div className="large-image" id="menu-image">
							<a href="../../images/menu.bmp"><img src="../../images/menu.bmp" alt="" /></a>
						</div>
					</div>
					<div id="grill"></div>
					<div className="outer" id="About">
						<div className="inner">
							<h3>The people love us!</h3>
							<a href="../../images/card.bmp"><img className="about-img" src="../../images/card.bmp" alt=""/></a>
							<h3>We've even been recognized by The Austin American Statesman!</h3>
							<a href="../../images/mediastuff.bmp"><img className="about-img" src="../../images/mediastuff.bmp" alt=""/></a>
							<h1>Come visit us today!</h1>
						</div>
					</div>

				</div>
				<div id="footer">
					<h1>Burger Tex™</h1>
					<div id="address"><h4>5420 Airport Blvd.</h4><h4>Austin, Tx 87851</h4><h4>512-453-8772</h4></div>
					<div id="hours"><h4>Mon-Sat: 10 AM - 9 PM</h4><h4>Sundays and Hollidays: 11:30 AM - 7 PM</h4></div>
				</div>
				<div id="rights">
					<p>Content copyright 2009-2017 Burger Tex™. All rights reserved.</p>
				</div>
			</div>
		)
	}
}

export default Main

