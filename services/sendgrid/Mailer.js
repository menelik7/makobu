const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../../config/keys");

class Mailer extends helper.Mail {
	constructor({ subject, recipient }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email("no-reply@makobuent.com");
		this.subject = subject;
		this.body = new helper.Content("text/html", content);
		this.recipient = this.formatAddresses(recipient);

		this.addContent(this.body);
		this.addRecipients();
	}

	formatAddresses(email) {
		return new helper.Email(email);
	}

	addRecipients() {
		const personalize = new helper.Personalization();

		[this.recipient].forEach((recipient) => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method: "POST",
			path: "/v3/mail/send",
			body: this.toJSON(),
		});

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
