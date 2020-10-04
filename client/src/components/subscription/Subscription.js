import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import NewSubscriptionSubmit from "./NewSubscriptionSubmit";

class Subscription extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.resetMessages();
	}

	onSubmit = (formValues) => {
		this.props.newSubscription(formValues);
		this.props.resetMessages();
	};

	render() {
		return (
			<div>
				<NewSubscriptionSubmit
					onSubmit={this.onSubmit}
					subscriptionStatus={this.props.subscription}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ subscription }) => {
	return { subscription };
};

export default connect(mapStateToProps, actions)(Subscription);
