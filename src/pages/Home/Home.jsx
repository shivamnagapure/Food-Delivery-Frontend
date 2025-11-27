import React from 'react'
import Layout from '../../components/Layouts/Layout.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx' 
import '../../styles/Section.css'
const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1/>

        {/* <Section2 About/> */}
        <Section2/>

        {/* Home Section Menu */}
        <Section3/>
        
      </Layout>
    </>
  )
}

export default Home
