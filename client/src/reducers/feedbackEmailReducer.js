import { FEEDBACK_SUBMISSION_STATUS } from "../actions/types";

export default (state = null, action) => {
	switch (action.type) {
		case FEEDBACK_SUBMISSION_STATUS:
			return action.payload || false;

		default:
			return state;
	}
};
