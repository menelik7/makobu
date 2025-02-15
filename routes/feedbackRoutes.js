const feedbackEmailTemplate = require("../services/sendgrid/email_templates/feedbackEmailTemplate");
const Mailer = require("../services/sendgrid/Mailer");

const successMessage =
	"Thanks for sharing your thoughts!  We'll follow up asap if necessary.";
const errorMessage =
	"There was an error processing your request.  Please make sure you submitted a valid, working email address and have no network connection issues.";

module.exports = (app) => {
	app.post("/api/feedback", async (req, res, next) => {
		const { fullname, company, email, message } = req.body;

		const mailerArgs = {
			subject: "MakoBu User Suggestions or Feedback",
			recipient: "kidusmichael@ethionet.et",
		};

		const mailer = new Mailer(
			mailerArgs,
			feedbackEmailTemplate(fullname, company, email, message)
		);

		try {
			await mailer.send();
			res.send({ successMessage });
		} catch (err) {
			console.log("Feedback email error: ", JSON.stringify(err, null, 4));
			res.send({ errorMessage });
		}
	});
};
