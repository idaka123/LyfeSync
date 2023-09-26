import GlobalStyles from './GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './Routes/route';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, idx) => {
              return (
                <Route 
                  key={idx}
                  path={route.path}
                  element={route.page}
                ></Route>
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
