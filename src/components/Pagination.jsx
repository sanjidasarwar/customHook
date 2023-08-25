function Pagination({itemPerPage, currentPage, totalPages, goToPage, handlePre, handleNext}) {
    let pageNumbers=[]
    for(let i=1;i<=totalPages;i++){
        pageNumbers.push(i)
    }
    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}><a className="page-link" href="#" onClick={handlePre}>Previous</a></li>
                    {pageNumbers.map(pageNumber=>(
                        <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}><a className="page-link" href="#" onClick={()=>{goToPage(pageNumber)}}>{pageNumber}</a></li>
                    ))}
                <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}><a className="page-link" href="#" onClick={handleNext}>Next</a></li>
            </ul>
        </nav>
     );
}

export default Pagination;