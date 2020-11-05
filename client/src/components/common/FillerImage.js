import React from "react";

const FillerImage = ({ imageClass, text }) => {
	return (
		<div className="filler-image-container">
			<div className="filler-pic-background">
				<div className={`full-height ${imageClass}`} />
				<div className="flex-center filler-pic-overlay">
					<div className="filler-content">
						<h1 className="col-lg-8 offset-lg-2 align-center white no-pad filler-text">
							{text}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FillerImage;
