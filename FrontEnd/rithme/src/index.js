import React from 'react';
// import * as React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { ChakraProvider } from '@chakra-ui/react'


import reportWebVitals from './reportWebVitals';
import './fonts/RedHat/static/RedHatDisplay-Regular.ttf';
import './fonts/Raleway/static/Raleway-Regular.ttf';
import './fonts/Oxygen/Oxygen-Regular.ttf';


// 1. import `ChakraProvider` component

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
