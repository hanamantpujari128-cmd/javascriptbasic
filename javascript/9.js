function hideCreditCard(cardNumber) {
  // Convert to string (IMPORTANT)
  cardNumber = String(cardNumber);

  let lastFour = cardNumber.slice(-4);
  let hiddenPart = "*".repeat(cardNumber.length - 4);

  return hiddenPart + lastFour;
}
console.log(hideCreditCard(1234567890123456));