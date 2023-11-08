import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
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
        name: "knowledge",
        page: <DefaultLayout><Knowledge/></DefaultLayout>,
        path: paths.knowledge,
        exact: true,
    }
]