
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../src/components/Button';
import '../src/styles.css';

const App = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Button Component Demo</h1>
      
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="glass">Glass</Button>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default Size</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">🔍</Button>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
