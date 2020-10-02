import _ from "lodash";
import React from "react";
import { reduxForm, Field, reset, startSubmit, stopSubmit } from "redux-form";
import subscriptionFields from "./subscriptionFields";
import subscriptionFormFields from "./subscriptionFormFields";
import validateEmails from "../../utils/validateEmails";
import { ReactComponent as Spinner } from "../svg/spinner.svg";

class NewSubscriptionSubmit extends React.Component {
	componentDidMount() {
		let subscriptionSubtitle = document.querySelector(".subscription-subtitle");
		let subForm = document.querySelector(".sub-form");

		subscriptionSubtitle.classList.remove("d-none");
		subForm.classList.remove("d-none");
	}

	renderFields() {
		return _.map(subscriptionFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={subscriptionFormFields}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	renderSubmissionStatus() {
		const subscription = document.querySelector(".subscription");

		if (!this.props.subscriptionStatus) {
			return;
		}

		if (this.props.subscriptionStatus.errorMessage) {
			const { errorMessage } = this.props.subscriptionStatus;

			this.props.dispatch(stopSubmit("subscriptionForm"));
			subscription.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "start",
			});
			return <div className="alert alert-danger">{errorMessage}</div>;
		}

		if (this.props.subscriptionStatus.successMessage) {
			const { successMessage } = this.props.subscriptionStatus;

			this.props.dispatch(stopSubmit("subscriptionForm"));
			subscription.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "start",
			});
			return (
				<div className="sub-success alert alert-success">{successMessage}</div>
			);
		}
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
		this.props.dispatch(reset("subscriptionForm"));
		this.props.dispatch(startSubmit("subscriptionForm"));
	};

	render() {
		let subSuccess = document.querySelector(".sub-success");
		const { pristine, submitting } = this.props;

		return (
			<div className="container subscription">
				<div className="row">
					<div className="col-12 no-pad subscription-content">
						<p
							className={`footer-stay-informed-text subscription-subtitle ${
								subSuccess ? "d-none" : null
							}`}
						>
							Never miss anything newsworthy by subscribing
						</p>

						{this.renderSubmissionStatus()}

						<form
							className={`sub-form ${subSuccess ? "d-none" : null}`}
							onSubmit={this.props.handleSubmit(this.onSubmit)}
						>
							<div className="container">
								<div className="row">
									<div className="col-10 no-pad">{this.renderFields()}</div>
									<div className="col-2 no-pad">
										<button
											type="submit"
											className="btn btn-success subscription-button"
											disabled={pristine || submitting}
										>
											{submitting === true ? (
												<Spinner />
											) : (
												<i className="fas fa-paper-plane"></i>
											)}
										</button>
									</div>
								</div>
							</div>
						</form>
						<p className="privacy">We respect your privacy</p>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.email = validateEmails(values.email || "");

	_.each(subscriptionFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = `${name[0].toUpperCase() + name.slice(1)} is required.`;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "subscriptionForm",
})(NewSubscriptionSubmit);
