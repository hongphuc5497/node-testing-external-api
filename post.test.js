const getPost = require('./post');

test('Return a list of post by a user', async () => {
	const userId = 1;
	const data = await getPost(userId);

	expect(data.length).toBeGreaterThan(0);

	data.forEach((post) => {
		expect(post).toEqual(
			expect.objectContaining({
				userId,
			})
		);
	});
});
