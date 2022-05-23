export const validateEmail = (email) =>
  email.includes(".") &&
  email.includes("@") &&
  email.slice(-1) !== "@" &&
  email.slice(-1) !== "." &&
  email.length > 5;

export const validateLength = (string) => string.length >= 5;
