import React from 'react'
import {Header} from "./Header";
import Sidebar from "./Sidebar";
import SearchResults from './SearchResults';


const SearchPage = () => {
  return (
    <div>
        <Header/>
        <div className='py-24 flex '>
            <Sidebar/>
            <SearchResults/>
        </div>
    </div>
  )
}

export default SearchPage;