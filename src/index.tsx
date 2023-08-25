import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelloWorld } from './components/HelloWorld';
const App = () => {
    return <HelloWorld />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<App />);
} else {
    // eslint-disable-next-line no-console
    console.error('Root element not found');
}
