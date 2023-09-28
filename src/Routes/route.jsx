import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import Planner from "../Page/Planner"
import NoPage from "../Page/NoPage"
import paths from "./path"


export const routes = [
    {
        name: "home",
        page: <DefaultLayout><Home/></DefaultLayout>,
        path: paths.home,
        exact: true,
    },
    {
        name: "planner",
        page: <DefaultLayout><Planner/></DefaultLayout>,
        path: paths.planner,
        exact: true,
    },
    {
        name: "noPage",
        page: <NoPage/>,
        path: paths.noPage,
        exact: true,
    }
]