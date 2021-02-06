import Shimmer from 'react-js-loading-shimmer';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export const Loading = () => {
    const data =[1,3,4,5,2,2,2,2,2];
    return (
      <main>
      <ul className="aside sidemenu white-box">
          <li> <Shimmer height= "400px"/>     </li>                          
      </ul>
      <ul className="container">               

          <table className="f-w white-box mr-3">
              <thead>
                  <tr>
                      <th><Shimmer /> </th>
                      <th><Shimmer /> </th>
                      <th><Shimmer /> </th>
                      <th><Shimmer /> </th>
                      <th><Shimmer /> </th>
                      <th><Shimmer /> </th>
                      <th><Shimmer /> </th> 
                  </tr>
              </thead>
              <tbody>
                {
                    data.map(debit => {
                      return (
                          <tr>
                              <td><Shimmer /> </td>
                              <td><Shimmer /> </td>
                              <td><Shimmer /> </td>
                              <td><Shimmer /> </td>
                              <td> <Shimmer /> </td>                                  
                              <td> <Shimmer /> </td>                                    
                              <td><Shimmer /> </td>
                      </tr> 
                      )
                  }) 
                }
              
                          
              </tbody>
          </table>
      </ul>
    </main>
    )
    
}
export const FormLoader = ()=> {
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#d2c4a0',
        },
      }));
      const classes = useStyles();
      return (
        <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
        </Backdrop>
      )
      

} 
    