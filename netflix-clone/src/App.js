import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
       <h1>Hey This NetFLix Clone</h1>
       <Row title="MetFlix Orginals" fetchUrl={requests.fetchNetflixOriginals} />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
