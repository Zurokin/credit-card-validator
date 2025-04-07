import isValidCardNumber from "../src/validator";

test("Valid Visa card number", () => {
  expect(isValidCardNumber("4111111111111111")).toBe(true);
});

test("Invalid card number", () => {
  expect(isValidCardNumber("1234567890123456")).toBe(false);
});
