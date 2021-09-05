import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter , Route} from 'react-router-dom'

ReactDOM.render(
<StrictMode>
    <BrowserRouter>
    <Route path='/' component={App}/>
    </BrowserRouter>
</StrictMode>
, document.getElementById('root')
);
