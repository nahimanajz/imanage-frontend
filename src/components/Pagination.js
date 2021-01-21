import React from 'react';

const Pagination = ({creditsPerCredit, totalCredits, paginate}) => {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalCredits /  creditsPerCredit); i++) {
        pageNumbers.push(i);
    }
    return (        
        <div className="f-w"> {
               pageNumbers.map(number =>(
                   <li key={ number } className="page-item p-1"> 
                   <a onClick={ () => paginate(number) } className="page-links">
                       { ++number }
                       
                   </a>
                   </li>
               ))
            }
        </div>
    )

}
export default Pagination;