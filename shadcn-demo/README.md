# shadcn/ui Demo Project

This project demonstrates the **shadcn/ui** component library integrated with Next.js, TypeScript, and Tailwind CSS.

## What is shadcn/ui?

shadcn/ui is a collection of beautifully designed, accessible, and customizable components that you can copy and paste into your apps. Built on top of Radix UI and Tailwind CSS.

## Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling
- ✅ shadcn/ui components (Button, Card, Input, Label)
- ✅ Fully customizable and accessible

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

### Build for Production

```bash
npm run build
npm start
```

## Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com)

## Project Structure

```
shadcn-demo/
├── app/
│   ├── page.tsx          # Main demo page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with CSS variables
├── components/
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── components.json       # shadcn/ui configuration
```

## Why shadcn/ui?

1. **Not a dependency** - Components are copied into your project, giving you full control
2. **Accessible** - Built on Radix UI primitives with ARIA compliance
3. **Customizable** - Modify components directly in your codebase
4. **Beautiful** - Modern design with smooth animations
5. **TypeScript** - Full type safety out of the box

## Learn More

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)
