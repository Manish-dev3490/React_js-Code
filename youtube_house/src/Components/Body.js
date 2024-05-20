import React from 'react'
import Sidebar from './Sidebar'
import BodyMainContainer from './BodyMainConatiner'

const Body = () => {




    return (
        <div className='flex gap-72 py-20 relative '>
            <Sidebar/>
            <BodyMainContainer/>
        </div>
    )
}

export default Body;