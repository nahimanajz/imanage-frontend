export const userInfo = () => JSON.parse(localStorage.getItem('userInfo'));
export const headers = {'Authorization' : 'Bearer '+localStorage.getItem('token') || null };
export const user_id  = JSON.parse(localStorage.getItem('user'))|| null;
export const name  = JSON.parse(localStorage.getItem('user'))|| null;
