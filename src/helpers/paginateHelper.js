import React, {useState, useEffect} from 'react';

const paginationHelper = (data, lastPostIndex, firstPostIndex, currentPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const[dataPerpage]=useState(10);

    lastPostIndex = currentPage * dataPerpage;
    const currentData = data.splice(firstPostIndex, lastPostIndex);
    const paginage = pageNumber => setCurrentPage(pageNumber);
} 