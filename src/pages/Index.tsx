
import React from "react";
import { Button } from "../components/essence-ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-3xl w-full space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            Essence UI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Beautiful, minimal React components
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of meticulously crafted components for your next React application. 
            Built with simplicity and elegance in mind.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              Button Component
            </div>
            <h2 className="text-2xl font-semibold">Beautiful, interactive buttons</h2>
            <p className="text-muted-foreground">
              Interactive buttons with smooth ripple effects and multiple variants.
            </p>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Default Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Sizes</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-medium mb-4">Glass Morphism</h3>
              <div className="h-32 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-6">
                <Button variant="glass" size="lg">Glass Button</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Installation Guide</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              To install Essence UI in your project, follow these steps:
            </p>
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre><code>npm install essence-ui</code></pre>
            </div>
            <p className="text-muted-foreground">
              Import and use components in your React application:
            </p>
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre><code>{`import { Button } from 'essence-ui';

function App() {
  return (
    <Button>Hello World</Button>
  );
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
