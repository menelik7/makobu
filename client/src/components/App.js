import "./App.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landing/Landing";
import Import from "./products/Import";
import Export from "./products/Export";
import Profile from "./profile/Profile";
import Contact from "./contact/Contact";

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
						<Footer />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
