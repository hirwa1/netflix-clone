import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
      <Banner />
       <Row 
       
       title="MetFlix Orginals" 
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow
        />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
