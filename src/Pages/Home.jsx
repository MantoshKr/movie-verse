import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import api from '../Api'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
    
    <Main />
    <Row rowID='5' title='Upcoming' fetchUrl={api.apiUpcoming}  />
    <Row rowID='1' title='Popular' fetchUrl={api.apiPopular} />
    <Row rowID='2' title='TopRated' fetchUrl={api.apiTopRated} />
    <Row rowID='3' title='Trending' fetchUrl={api.apiTrending}  />
    <Row rowID='4' title='Horror' fetchUrl={api.apiHorror} />
   
    </>
  )
}

export default Home

