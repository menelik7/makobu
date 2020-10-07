module.exports = (fullname, company, email, message) => {
	return `
		<html>
			<body style="background-color: #F2F2F2; color: #333; padding: 20px;">
				<div style="background-color: #fff; padding: 20px; text-align: center; margin-bottom: 2px;">
					<a href="http://www.makobuent.com" style="text-decoration: none;"><img src="https://res.cloudinary.com/mazorya/image/upload/v1601653953/company_logo.png" style="width: 120px; height: 130px" /><div style="color: #3b8044;"><h2>መኮቡ ኢንተርፕራይዝስ ኃ.የተ.የግ.ማ</h2><h2>MakoBu Enterprises P.L.C.</h2></div></a>
				</div>
				<div style="background-color: #fff; padding: 20px;">
					<p>Dear<strong style="color: #28a745;"> Seble,</strong></p>
					<p>The following message was received through your feedback channel:</p>
					<h4 style="font-weight: bold;"><span style="font-weight: 400">Name: </span>${fullname}</h4>
					<h4 style="font-weight: bold;"><span style="font-weight: 400">Company: </span>${company}</h4>
					<h4 style="font-weight: bold;"><span style="font-weight: 400">Email: </span>${email}</h4>
					<h4 style="font-weight: 400">Message:</h4>
					<p>${message}</p>
					<p>Do not reply to this message as this email address is not monitored.</p>
					<p>- from your website <a href="https://www.makobuent.com" style="text-decoration: none;"><strong style="color: green;">@ makobuent.com</a></strong></p>
				</div>
			</body>
		</html>
	`;
};
