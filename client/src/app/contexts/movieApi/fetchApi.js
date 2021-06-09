import React, { useEffect, useState } from "react";
import useFetch from 'react-fetch-hook';
import axios from 'axios';
import Loading from '../../components/layout/Loading';
import Error from '../../components/layout/Error'

const Tmdb  =  ({setData, API, setIsLoading, setError} ) => {
    const { isLoading, data, error } = useFetch(API);

    return (
        <>
            {
                error ? <Error>{error.message}</Error> :
                isLoading || !data ? <Loading /> :
                <div>
                    {data}
                </div>
            }
        </>
    );
}

export default Tmdb;

// SEARCH API
// https://api.themoviedb.org/3/search/multi?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&query=test&page=1&include_adult=false