// In this Body Component our whoole application code will combined 

import { Browse } from "./Browse"
import { Login } from "./Login"
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import TvShowsPage from "./TvShows"
import TrendingPage from "./Trending"
import WebSeriesPage from "./WebSeries"
import MySavedMoviesPage from "./MySavedMovies"


 export const Body=()=>{


    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse />,
            
        },
        {
            path:"/tvshows",
            element:<TvShowsPage/>
        },
        {
            path:"/trending",
            element:<TrendingPage/>
        },
        {
            path:"/webseries",
            element:<WebSeriesPage/>
        },
        {
            path:"/mysavedmovies",
            element:<MySavedMoviesPage/>
        }
    ])

   

    return (
        <div>
        <RouterProvider router={AppRouter}/>
        </div>
    )
}