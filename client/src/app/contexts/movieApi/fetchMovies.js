// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// const API = "https://api.themoviedb.org/3/movie/5?api_key=910c5818cdbaa5582832e8d21687df71";

// const MoviesDB = () => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     useEffect(() => {
//         axios.get(API)
//         .then(response => {
//             setData(response.data)
//         })
//         .catch(error => {
//             setError(error.message);
//         })
//         .finally(() => {
//             setIsLoading(false);
//         });
//     }, []);
//     console.log(`logging ${data}`)
//     // return (
//     //     <>
//     //         {/* {
//     //             error ? <Error>{error}</Error> :
//     //             isLoading || !data ? <Loading /> :
//     //             <div>
//     //             {data.coin_name}
//     //             </div>
//     //         } */}
//     //         {data}
//     //     </>
//     // );
// }

// export default MoviesDB;

//SEARCH API
//https://api.themoviedb.org/3/search/multi?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&query=test&page=1&include_adult=false