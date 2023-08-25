import useFetchData from "../hooks/useFetchData";
import usePagination from "../hooks/usePagination";
import Pagination from "./pagination";


function Posts() {
    const posts =useFetchData('https://jsonplaceholder.typicode.com/posts')

  const { currentPage, itemPerPage, currentData, totalPages, goToPage, handlePre, handleNext } = usePagination(
    posts.data ? posts.data : []
  )
    return ( 
        <div className="container">
            <h1>All Posts</h1>
            <hr />
            {posts.loading && <h3>Loading.....</h3>}
            {posts.error && <h3>{posts.error}</h3>}
                {currentData?.map(post =>(
                    <div key={post.id} className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{post.title}</h3>
                            <h5 className="card-text">{post.body}</h5>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ))}
            <Pagination currentPage={currentPage} itemPerPage={itemPerPage} totalPages={totalPages} goToPage={goToPage} handlePre={handlePre} handleNext={handleNext} />
            
         </div> 
     );
}

export default Posts;