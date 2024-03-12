import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'
import axios from 'axios';

const PaginatedItems = ({itemsPerPage}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        axios.get('http://localhost:8000/users').then(res=>setItems(res.data));
    },[])
    const [items, setItems] = useState([]);
    const handleClick = ({selected}) =>{
        setCurrentIndex(selected)
    }
    const startIndex = currentIndex * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
    const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <>
    <div
    style={{
        margin: '3rem',
        border: '3px solid green',
        borderRadius: '1rem',
        padding: '3rem',
        fontSize: '1.3rem',
      }}>
        <h2 style={{textAlign:'center'}}>User Data</h2>
        {currentItems.map(item=>(
            <ul>
                <li>Name # {item.name}</li>
            </ul>
        ))}
    </div>
    <ReactPaginate 
    previousLabel={'< Previous'}
    nextLabel={'> Next'}
    pageCount={pageCount}
    onPageChange={handleClick}
    containerClassName={'pagination'}
    previousClassName={'previous'}
    nextClassName={'next'}
    disabledClassName={'disabled'}
    activeClassName={'active'}
   />
    </>
  )
}

export default PaginatedItems
