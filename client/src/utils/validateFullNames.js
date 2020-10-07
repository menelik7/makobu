const re = /^(?=.{5,30}$).*/; // Usernames have to be 2 to 15 characters long and can only contain letters, numbers, and underscores.

export default (fullname) => {
	const invalidName = re.test(fullname) === false;

	if (invalidName) {
		return "Full name must be between 5-15 characters long.";
	}

	return;
};
