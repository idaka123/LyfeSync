import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import Planner from "../Page/Planner/Planner"
import paths from "./path"
import Knowledge from "../Page/Knowledge/Knowledge"


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
        name: "knowledge",
        page: <DefaultLayout><Knowledge/></DefaultLayout>,
        path: paths.knowledge,
        exact: true,
    }
]