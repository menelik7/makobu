import React from "react";
import "./Marker.css";

class Marker extends React.Component {
	state = { isOpen: false };

	componentDidMount() {
		const marker = document.querySelector(".pin");

		marker.addEventListener("click", function () {
			if (!marker.firstChild.classList.value.includes("d-none")) {
				marker.firstChild.classList.add("d-none");
			}

			this.firstChild.classList.remove("d-none");
		});
	}

	infoWindowCloser = () => {
		const infoWindows = document.querySelectorAll(".info-window");
		infoWindows.forEach((infoWindow) => {
			infoWindow.classList.add("d-none");
		});
	};

	render() {
		const { name, address, phone, directions } = this.props;
		return (
			<div className="pin-div">
				<div className="white-back pin bounce" title={name}>
					<div className="info-window d-none">
						<div
							onClick={this.infoWindowCloser}
							className="flex-center closer bold"
						>
							<i className="green fas fa-window-close no-mar" />
						</div>
						<h6 className="location-name green bold align-left">{name}</h6>
						<p className="grey align-left">{address}</p>
						<p className="grey align-left info-window-phone">
							<a href={`tel:${phone}`}>
								<i className="green fa fa-phone-square" /> {phone}
							</a>
						</p>
						<a href={directions} target="_blank" rel="noopener noreferrer">
							<button className="btn info-window-button">
								directions <i className="fas fa-directions" />
							</button>
						</a>
					</div>
					<div className="pulse" />
				</div>
			</div>
		);
	}
}

export default Marker;
