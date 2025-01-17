import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './global.css';

// import {PI, GTM_BRASIL} from './teste'
// import nomes from './nomes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {GTM_BRASIL} */}
    <App />
  </StrictMode>,
)
