export const saveAuthTokenAndUserId = (authToken, userId) => {
  try {
    localStorage.setItem('authToken', authToken)
    localStorage.setItem('userId', userId)
  } catch(e) {}
};

export const clearLocalStorage = () => {
  try {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
  } catch(e) {}
  
};