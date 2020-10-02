import {
	SUBSCRIPTION_SUBMISSION_STATUS,
	FEEDBACK_SUBMISSION_STATUS,
} from "./types";
import axios from "axios";

export const newSubscription = (formValues) => async (dispatch) => {
	const { data } = await axios.post("/api/subscription", formValues);

	dispatch({ type: SUBSCRIPTION_SUBMISSION_STATUS, payload: data });
};

export const newFeedback = (formValues) => async (dispatch) => {
	const { data } = await axios.post("/api/feedback", formValues);

	dispatch({ type: FEEDBACK_SUBMISSION_STATUS, payload: data });
};

export const resetMessages = () => async (dispatch) => {
	dispatch({ type: SUBSCRIPTION_SUBMISSION_STATUS });
	dispatch({ type: FEEDBACK_SUBMISSION_STATUS });
};
