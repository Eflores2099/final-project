import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
// import FileUploader from './components/FileUploader'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider.js'

 


ReactDom.render(
    <BrowserRouter>
        <UserProvider> 
            <App />
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root'))