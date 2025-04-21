test('Login: email check', () => {
  const CheckEmail = jest.fn((email) => email === 'test@example.com');
  expect(CheckEmail('test@example.com')).toBe(true);
  expect(CheckEmail('wrong@example.com')).toBe(false);
});