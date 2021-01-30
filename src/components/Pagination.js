import React from 'react';

const makePages = (data, currentPage, dataPerPage) => {
        const indexOfLastData = currentPage * dataPerPage ;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        return data.slice(indexOfFirstData, indexOfLastData);
    }

const Pagination = ({dataPerPage, totalData, paginate}) => {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalData /  dataPerPage); i++) {
        pageNumbers.push(i);
    }
    return (        
        <ul className="f-w" style={{marginTop: '32px'}}> {
               pageNumbers.map(number =>(
                   <li key={ number } className="page-item p-1" style={{padding: '16px'}}> 
                   <a onClick={ () => paginate(number) } className="page-links">
                       { ++number }
                       
                   </a>
                   </li>
               ))
            }
        </ul>
    )

}
export { Pagination, makePages};