import "./App.css";
import "./animate.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./header/Header";
import Landing from "./landing/Landing";
import Import from "./import/Import";
import Export from "./export/Export";
import Profile from "./profile/Profile";
import Contact from "./contact/Contact";
import ScrollUpButton from "./scrollup/ScrollUpButton";

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<div className="container-fluid main-router-div">
					<div className="row">
						<Header />
						<Switch>
							<Route path="/" exact component={Landing} />
							<Route path="/import" exact component={Import} />
							<Route path="/export" exact component={Export} />
							<Route path="/profile" exact component={Profile} />
							<Route path="/contact" exact component={Contact} />
						</Switch>
						<ScrollUpButton />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
