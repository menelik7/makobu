import "./Feedback.css";
import _ from "lodash";
import React from "react";
import { reduxForm, Field, reset, startSubmit, stopSubmit } from "redux-form";
import feedbackFields from "./feedbackFields";
import feedbackFormFields from "./feedbackFormFields";
import validateEmails from "../../utils/validateEmails";
import validateFullNames from "../../utils/validateFullNames";
import validateCompanyNames from "../../utils/validateCompanyNames";
import { ReactComponent as Spinner } from "../svg/spinner.svg";

class NewFeedbackSubmit extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		let feedForm = document.querySelector(".feedback-form");
		feedForm.classList.remove("d-none");
	}

	renderFields() {
		return _.map(feedbackFields, ({ label, name, style, rows }) => {
			return (
				<Field
					key={name}
					component={feedbackFormFields}
					type="text"
					label={label}
					name={name}
					style={style}
					rows={rows}
				/>
			);
		});
	}

	renderSubmissionStatus() {
		if (!this.props.submissionStatus) {
			return;
		}

		if (this.props.submissionStatus.errorMessage) {
			const { errorMessage } = this.props.submissionStatus;

			this.props.dispatch(stopSubmit("feedbackForm"));
			window.scrollTo(0, this.myRef.current.offsetTop - 130);

			return (
				<div className="align-center alert alert-danger">{errorMessage}</div>
			);
		}

		if (this.props.submissionStatus.successMessage) {
			const { successMessage } = this.props.submissionStatus;

			this.props.dispatch(stopSubmit("feedbackForm"));
			window.scrollTo(0, this.myRef.current.offsetTop - 130);

			return (
				<div className="align-center feed-success alert alert-success">
					{successMessage}
				</div>
			);
		}
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
		this.props.dispatch(reset("feedbackForm"));
		this.props.dispatch(startSubmit("feedbackForm"));
	};

	render() {
		let feedSuccess = document.querySelector(".feed-success");
		const { pristine, submitting } = this.props;

		return (
			<div ref={this.myRef} className="no-pad feedback">
				<div className="row">
					<div className="col-12 feedback-content">
						{this.renderSubmissionStatus()}

						<form
							className={`feedback-form ${feedSuccess ? "d-none" : null}`}
							onSubmit={this.props.handleSubmit(this.onSubmit)}
						>
							<div className="form-row">{this.renderFields()}</div>
							<button
								type="submit"
								className="btn btn-success feedback-submit-button"
								disabled={pristine || submitting}
							>
								{submitting === true ? <Spinner /> : <div>Submit</div>}
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.fullname = validateFullNames(values.fullname || "");
	errors.company = validateCompanyNames(values.company || "");
	errors.email = validateEmails(values.email || "");

	_.each(feedbackFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = `${name[0].toUpperCase() + name.slice(1)} is required.`;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "feedbackForm",
})(NewFeedbackSubmit);
