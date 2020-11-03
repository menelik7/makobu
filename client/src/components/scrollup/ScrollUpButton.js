import "./ScrollUpButton.css";
import React from "react";

class ScrollUpButton extends React.Component {
	componentDidMount() {
		const scrollUp = document.querySelector(".scroll-up-button");
		scrollUp.addEventListener("click", () => {
			window.scroll({
				top: 0,
				behavior: "smooth",
			});
		});

		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				scrollUp.classList.remove("fadeOutUp");
				scrollUp.classList.add("fadeInDown");
				scrollUp.classList.remove("d-none");
			} else {
				scrollUp.classList.remove("fadeInDown");
				scrollUp.classList.add("fadeOutUp");
			}
		});
	}

	render() {
		return (
			<div className="white-back flex-center scroll-up-button animated d-none">
				<i className="green-2 fas fa-long-arrow-alt-up"></i>
			</div>
		);
	}
}

export default ScrollUpButton;
