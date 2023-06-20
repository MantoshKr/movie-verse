import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import api from '../Api';

function Home() {
  return (
    <>
    <div>
    <Main />
    <div>
    <Row ID='5'  title='Popular' fetchURL={api.apiPopular}/>
    <Row ID='2' title='Top Rated' fetchURL={api.apiTopRated}/>
    <Row ID='3' title='Trending' fetchURL={api.apiTrending}/>
    <Row ID='4' title='Horror' fetchURL={api.apiHorror}/>
    <Row ID='1' title='Upcoming' fetchURL={api.apiUpcoming}/>
    </div>
    </div>
    </>
  )
}

export default Home;


