export const isEmailFormatValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email?.length > 0) {
    return regex.test(email);
  }
  return false;
};
