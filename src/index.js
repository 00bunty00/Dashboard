import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import App from './App'
import { ContextProvider } from './contexts/ContextProvider';

ReactDom.render(
    <ContextProvider>
        <App/>
    </ContextProvider>,
    document.getElementById('root'));






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
