import React from 'react';
import ReactDOM from 'react-dom';
import { firebase, FieldValue } from './lib/firebase'
import FirebaseContext from './context/firebase';
import './index.css';
import App from './App';


ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <h1 className="text-red-500">Hello, Amy and Tom</h1>
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
