import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { SearchByQuery } from '../Utils/Constant'
import { addSearchedData } from '../Utils/Videosdata';

const useSearchByquery = (query) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getSearchVideo()
    }, [query])

    const getSearchVideo = async () => {
        const data = await fetch(SearchByQuery + query);
        const json = await data.json();
        dispatch(addSearchedData(json))
    }
    return <></>
}

export default useSearchByquery