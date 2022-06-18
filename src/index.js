import React from 'react';
import ReactDom from 'react-dom/client';
import {registerLicense} from '@syncfusion/ej2-base';

import App from './App';
import {ContextProvider} from './contexts/ContextProvider';
import './index.css';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFacF9JWnxIdkx0RWFbb196dF1MYVVBNQtUQF1hS35Vd01jW3xac3VQRWlc');

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App/>
    </ContextProvider>
);
