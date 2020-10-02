import { SUBSCRIPTION_SUBMISSION_STATUS } from "../actions/types";

export default (state = null, action) => {
	switch (action.type) {
		case SUBSCRIPTION_SUBMISSION_STATUS:
			return action.payload || false;

		default:
			return state;
	}
};
