const re = /^(?=.{5,30}$).*/; // Usernames have to be 2 to 15 characters long and can only contain letters, numbers, and underscores.

export default (companyName) => {
	const invalidName = re.test(companyName) === false;

	if (invalidName) {
		return "Company name must be between 5-15 characters long.";
	}

	return;
};
