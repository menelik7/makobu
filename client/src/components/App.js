import "./App.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landing/Landing";
import Imports from "./products/Imports";
import Exports from "./products/Exports";
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
							<Route path="/imports" exact component={Imports} />
							<Route path="/exports" exact component={Exports} />
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
