import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageMiddleware from './components/middleware/PageMiddleware'
import Home from './components/pages/Homepage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/familydentalcare' element={<PageMiddleware />}>
          <Route path='/' element={<Home />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
