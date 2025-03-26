
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components';
import './styles.css'; // We'll create this next

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Button Component Demo</h1>
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="glass">Glass</Button>
      </div>
    </div>
  </React.StrictMode>,
);
