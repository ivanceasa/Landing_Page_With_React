import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse flex-row-reverse"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								{props.menuItemOne}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.menuItemTwo}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.menuItemThree}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.menuItemFour}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	brand: PropTypes.string,
	menuItemOne: PropTypes.string,
	menuItemTwo: PropTypes.string,
	menuItemThree: PropTypes.string,
	menuItemFour: PropTypes.string
};

export default Navbar;
