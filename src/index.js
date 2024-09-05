import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style/Navbar_style.css';
import './Style/Login_style.css';
import './Style/CreateAccount_style.css';
import './Style/Landing_style.css'
import './Style/Contact_style.css'
import './Style/Filters.css'
import './all.min.css'
import './Style/PatientDashboardStyle.css'
import './Style/ProviderDashboardStyle.css'
import './Style/AdminDashboardStyle.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
          <Context>
             <React.StrictMode>
                 <App />
             </React.StrictMode>
           </Context>
        </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
