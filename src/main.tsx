
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button';
import './styles/tailwind.css';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Button Component Demo</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Primary Button</h2>
          <Button variant="primary">Primary Button</Button>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Secondary Button</h2>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Outline Button</h2>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
