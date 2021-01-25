export const userInfo = () => JSON.parse(localStorage.getItem('userInfo'));
export const headers = userInfo() ? {'Authorization' : 'Bearer '+ userInfo()['token']} : null;
export const user_id  = userInfo()? userInfo()['user'].id: null ;
export const name  = userInfo()? userInfo()['user'].name: null ;


/*
export const user_id  = JSON.parse(localStorage.getItem('user'))['id'];
export const name  = JSON.parse(localStorage.getItem('user'))['name'];
export const logout = localStorage.clear('userInfo');   
*/          

