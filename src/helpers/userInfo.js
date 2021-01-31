export const userInfo = () => JSON.parse(localStorage.getItem('userInfo'));
export const headers = userInfo() ? {'Authorization' : 'Bearer '+ userInfo()['token']} : null;
export const user_id  = userInfo()? userInfo()['user'].id: null ;
export const name  = userInfo()? userInfo()['user'].name: null ;

     

