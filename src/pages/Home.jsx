import React from 'react'
import Topbar from '../components/Topbar'
import MainPage from '../components/MainPage'
import Carousel from '../components/carousel/carousel'
import Footer from '../components/Footer'
import ItemList from '../components/ItemList/ItemList'

function Home() {
  return (
    <div>
        <Topbar />
        <MainPage/>
        <ItemList/>
        {/* <Carousel /> */}
        <Footer />
    </div>
  )
}

export default Home
