// In this Body Component our whoole application code will combined 

import { Browse } from "./Browse"
import { Login } from "./Login"
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import TvShowsPage from "./TvShows"
import TrendingPage from "./Trending"
import MySavedMoviesPage from "./MySavedMovies"
import MovieDetailPage from "./MovieDetail"
import { GPTSearchPage } from "./GPTSearchPage"


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
            path:"/mysavedmovies",
            element:<MySavedMoviesPage/>
        },{
            path:"/moviedetail/:id",
            element:<MovieDetailPage/>
        }
        ,{
            path:"/GPTSearchPage",
            element:<GPTSearchPage/>
        }
    ])

   

    return (
        <div>
        <RouterProvider router={AppRouter}/>
        </div>
    )
}