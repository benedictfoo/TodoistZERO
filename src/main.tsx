import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import App from './App.tsx'

const rootElement = document.getElementById('root');

if (rootElement === null) {
    throw new Error("Root element with ID 'root' not found.");
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);