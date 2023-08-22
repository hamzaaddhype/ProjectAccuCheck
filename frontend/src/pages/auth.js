// authUtils.js
export const isAuthenticated = () => {
    // Replace this with your actual token validation logic
    const token = localStorage.getItem('jwtToken');
    return token !== null; // Return true if token is present and valid
  };
  