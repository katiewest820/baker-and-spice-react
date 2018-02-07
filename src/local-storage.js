export const saveAuthToken = (authToken) => {
  try {
    localStorage.setItem('authToken', authToken)
    console.log(localStorage.getItem('authToken'))
  } catch(e) {}
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem('authToken')
    console.log(localStorage.getItem('authToken'))
  } catch(e) {}
};

export const getToken = () => {
  try {
  let token = localStorage.getItem('authToken')
    console.log(token)
  } catch(e) {}
};