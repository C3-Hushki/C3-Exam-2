import React from "react";
import "./App.css";
import {Route} from 'react-router-dom'
import { createBook } from "./component/CreateBook";
import {Navigation } from './component/Navigation'
import {Dashboard} from './component/Dashboard'
import {BookById} from  './component/BookById'

const App = () => {
  return (
    <>
     <Navigation />
      <div>
        <Route exact path='/library/create_book' component={createBook}/>
        <Route exact path='/library' componet={Dashboard}/>
        <Route exact path='/library/:book_id' component={BookById}/>

      </div>
    </>
  );
};

export default App;
