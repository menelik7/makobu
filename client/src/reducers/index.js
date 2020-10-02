import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import subscriptionEmailReducer from "./subscriptionEmailReducer";
// import feedbackEmailReducer from "./feedbackEmailReducer";

export default combineReducers({
	subscription: subscriptionEmailReducer,
	form: reduxForm,
});
