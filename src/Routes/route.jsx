import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import NoPage from "../Page/NoPage"

export const routes = [
    {
        name: "home",
        page: <DefaultLayout><Home/></DefaultLayout>,
        path: '/',
        exact: true,
    },
    {
        name: "noPage",
        page: <NoPage/>,
        path: '*',
        exact: true,
    }
]