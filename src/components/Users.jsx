import useFetchData from "../hooks/useFetchData";

function Users() {
    const {data, loading, error} = useFetchData('https://jsonplaceholder.typicode.com/comments',
    (data)=> data.slice(0, 10)
    )


    return ( 
        <div className="container">
            <h1>All Users</h1>
            <hr />
            {loading && <h3>Loading.....</h3>}
            {error && <h3>{error}</h3>}
            <div className="row">
                {data?.map(user =>(
                    <div key={user.id} className="col-4 card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{user.name}</h3>
                            <h5 className="card-text">{user.email}</h5>
                            <p>{user.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    );
}

export default Users;