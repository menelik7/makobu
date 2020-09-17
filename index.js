const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

const app = express();

// Parse incoming POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
require("./routes/subscriptionRoutes")(app);
require("./routes/feedbackRoutes")(app);

if (process.env.NODE_ENV === "production") {
	// Making sure that express will serve up production assets like main.js and main.css
	app.use(express.static("client/build"));

	// Express will serve up index.html file if it doesn't recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// Set port
const PORT = process.env.PORT || 5000;

// Listen and print connection
app.listen(PORT, () => {
	console.log("Server listening on:  http://localhost:", PORT);
});
