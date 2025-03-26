
# Essence UI

![Essence UI](https://via.placeholder.com/1200x630/f8fafc/1e293b?text=Essence+UI)

A beautifully crafted React component library with a focus on simplicity, elegance, and developer experience. Built with TypeScript and styled with Tailwind CSS.

## Features

- 🎨 **Beautiful Components**: Meticulously designed components with attention to detail
- 🌗 **Dark Mode Support**: Seamless dark mode integration out of the box
- 📱 **Responsive**: All components are designed to work across devices
- 🚀 **TypeScript Ready**: Full TypeScript support for a better developer experience
- 🎭 **Customizable**: Easily theme and customize to match your brand
- 🧩 **Modular**: Use only what you need, tree-shaking friendly

## Installation

```bash
npm install essence-ui
# or
yarn add essence-ui
# or
pnpm add essence-ui
```

## Getting Started

```jsx
import { Button } from 'essence-ui';

function App() {
  return (
    <Button variant="default">
      Click Me
    </Button>
  );
}
```

## Component Documentation

### Button

A versatile button component with multiple variants and sizes.

#### Usage

```jsx
import { Button } from 'essence-ui';

// Basic usage
<Button>Default Button</Button>

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="glass">Glass</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// Disabled state
<Button disabled>Disabled</Button>

// As child
<Button asChild>
  <a href="#">Link styled as button</a>
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' \| 'glass'` | `'default'` | The visual style of the button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | The size of the button |
| `asChild` | `boolean` | `false` | When true, the component will render its children as the root element |

Plus all standard button HTML attributes.

## Development

To set up the component library for development:

1. Clone the repository
```bash
git clone https://github.com/yourusername/essence-ui.git
cd essence-ui
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Building the library

```bash
npm run build
```

## Publishing to npm

1. Update the version in package.json
2. Build the library 
```bash
npm run build
```

3. Publish to npm
```bash
npm publish
```

## License

MIT © [Your Name]
