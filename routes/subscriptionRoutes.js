const subscriptionEmailTemplate = require("../services/sendgrid/email_templates/subscriptionEmailTemplate");
const Mailer = require("../services/sendgrid/Mailer");

const successMessage =
	"Thank you for subscribing!  We'll keep you posted with all newsworthy updates.";
const errorMessage =
	"There was an error processing your request.  Please make sure you submitted a valid, working email address and have no network connection issues.";
module.exports = (app) => {
	app.post("/api/subscription", async (req, res, next) => {
		const { email } = req.body;

		const mailerArgs = {
			subject: "MakoBu Newsletter Subscription",
			recipient: "menelikworku@gmail.com",
		};

		const mailer = new Mailer(mailerArgs, subscriptionEmailTemplate(email));

		try {
			await mailer.send();
			res.send({ successMessage });
		} catch (err) {
			console.log("Subscription email error: ", JSON.stringify(err, null, 4));
			res.send({ errorMessage });
		}
	});
};
