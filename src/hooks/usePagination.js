import { useEffect, useState } from "react";

const usePagination = (data) =>{
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(5)

  // console.log(data);

  const totalPages = Math.ceil(data.length / itemPerPage);

  
  const indexOfLastItem =currentPage * itemPerPage;
  const indexOfFirstItem =indexOfLastItem - itemPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem)

  const goToPage = pageNumber => setCurrentPage(pageNumber)
  const handlePre = () => setCurrentPage(currentPage-1)
  const handleNext = () => setCurrentPage(currentPage+1)


  return {
    currentPage,
    itemPerPage,
    currentData,
    goToPage,
    totalPages,
    handlePre,
    handleNext
  }
}

export default usePagination;