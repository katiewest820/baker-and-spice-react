export const saveAuthTokenAndUserId = (authToken, userId) => {
  try {
    localStorage.setItem('authToken', authToken)
    localStorage.setItem('userId', userId)

    console.log(localStorage.getItem('authToken'))
    console.log(localStorage.getItem('userId'))
  } catch(e) {}
};

export const clearLocalStorage = () => {
  try {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');


    console.log(localStorage.getItem('authToken'))
    console.log(localStorage.getItem('userId'))
  } catch(e) {}
  
};