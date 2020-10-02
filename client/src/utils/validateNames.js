const re = /^[A-Za-z0-9_-]{2,15}$/; // Usernames have to be 2 to 15 characters long and can only contain letters, numbers, and underscores.

export default firstname => {
	const invalidName = re.test(firstname) === false;

	if (invalidName) {
		return "Name must be ONE WORD between 2-15 characters long and can contain ONLY letters, numbers, and underscores.";
	}

	return;
};
