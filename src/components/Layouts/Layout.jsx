import React from 'react'
import Header from './Header'
import Footer from './Footer'
// its an layout of each page and at the place of childern , we place page content 
function Layout({ children }) {
  return(
    <>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout
