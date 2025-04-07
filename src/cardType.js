export default function getCardType(number) {
  const cleaned = number.replace(/\D/g, "");

  if (/^4/.test(cleaned)) return "visa";
  if (/^5[1-5]/.test(cleaned)) return "mastercard";
  if (/^3[47]/.test(cleaned)) return "amex";
  if (/^6(?:011|5)/.test(cleaned)) return "discover";
  if (/^220[0-4]/.test(cleaned)) return "mir";

  return "unknown";
}
