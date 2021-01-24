export const userInfo = () => JSON.parse(localStorage.getItem('userInfo'));
export const headers = {'Authorization' : 'Bearer '+userInfo()['token']};
export const user_id  = JSON.parse(localStorage.getItem('user'))['id'];
export const name  = JSON.parse(localStorage.getItem('user'))['name'];
