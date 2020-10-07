import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import NewFeedbackSubmit from "./NewFeedbackSubmit";

class Feedback extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.resetMessages();
	}

	onSubmit = formValues => {
		this.props.newFeedback(formValues);
		this.props.resetMessages();
	};

	render() {
		return (
			<div>
				<NewFeedbackSubmit
					onSubmit={this.onSubmit}
					submissionStatus={this.props.feedback}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ feedback }) => {
	return { feedback };
};

export default connect(
	mapStateToProps,
	actions
)(Feedback);
