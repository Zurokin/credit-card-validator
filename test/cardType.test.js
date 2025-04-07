import getCardType from "../src/cardType";

test("Detect Visa", () => {
  expect(getCardType("4111111111111111")).toBe("visa");
});

test("Detect Mir", () => {
  expect(getCardType("2200123456789010")).toBe("mir");
});
