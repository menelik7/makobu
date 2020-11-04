import React from "react";
import { Link } from "react-router-dom";

const Button = ({ divClass, buttonText, to, buttonClass, arrow }) => {
	return (
		<div className={`common-button ${divClass}`}>
			<Link to={to}>
				<button className={`btn ${buttonClass}`}>
					{buttonText} {arrow ? <span className="arrow">&#8594;</span> : null}
				</button>
			</Link>
		</div>
	);
};

export default Button;
