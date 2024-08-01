import React, {useState} from 'react'
import Header from '../Header';
import Menu from '../Menu';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function PageMiddleware() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
    {isLoading ? (
        <h1>Loading...</h1>
    ):(
        <>
        <Header />
        <Menu />
        <Outlet />
        <Footer />
        </>
    )}

    </>
  )
}

export default PageMiddleware