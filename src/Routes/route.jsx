import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import Planner from "../Page/Planner/Planner"
import Knowledge from '../Page/Knowledge/Knowledge'
import NoPage from "../Page/NoPage"
import paths from "./path"
import Setting from "../Page/Setting/Setting"


export const routes = [
    {
        name: "home",
        page: <DefaultLayout><Home /></DefaultLayout>,
        path: paths.home,
        exact: true,
    },
    {
        name: "planner",
        page: <DefaultLayout><Planner /></DefaultLayout>,
        path: paths.planner,
        exact: true,
    },
    {
        name: "knowledge",
        page: <DefaultLayout><Knowledge /></DefaultLayout>,
        path: paths.knowledge,
        exact: true,
    },
    {
        name: "setting",
        page: <DefaultLayout><Setting /></DefaultLayout>,
        path: paths.setting,
        exact: true,
    },
    {
        name: "noPage",
        page: <NoPage />,
        path: paths.noPage,
        exact: true,
    }
]