import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import NoPage from "../Page/NoPage"

export const routes = [
    {
        page: <DefaultLayout><Home/></DefaultLayout>,
        path: '/',
        exact: true,
    },
    {
        page: <NoPage/>,
        path: '*',
        exact: true,
    }
]