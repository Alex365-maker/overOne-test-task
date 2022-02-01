import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchUsers from './components/Search/SearchUsers'
import SearchBots from "./components/Search/SearchBots";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SearchUsers />
        </Route>
        <Route exact path="/Bots">
          <SearchBots />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
