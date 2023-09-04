export const isValidEmail = (email) => {
  const isValid = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
  return isValid.test(email);
};

export const getToken = () => localStorage.getItem('auth-token');

export const catchError = (error) => {
  console.log(error.response?.data);

  const { response } = error;
  if (response?.data) return response.data;

  return { error: error.message || error };
};
