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
    </div>
  );
}

export default App;
