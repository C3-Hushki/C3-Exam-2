import React from "react";
import "./App.css";
import {Route} from 'react-router-dom'
import { createBook } from "./component/CreateBook";
import {Navigation } from './component/Navigation'

const App = () => {
  return (
    <>
     <Navigation />
      <div>
        <Route exact path='/library/create_book' component={createBook}/>
        <Route exact path='/library' componet={getAllBooks}/>
      </div>
    </>
  );
};

export default App;
