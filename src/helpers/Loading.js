import Shimmer from 'react-js-loading-shimmer';

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
    