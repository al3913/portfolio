# Maintenance Component

A React component converted from Figma design that displays a maintenance page with a centered image and message.

## Usage

```tsx
import Maintenance from './Maintenance';

function App() {
  return (
    <div className="w-screen h-screen">
      <Maintenance />
    </div>
  );
}
```

## Props

- `className` (optional): Additional CSS classes to apply to the component

## Theme Variables

The component uses theme variables defined in `tailwind.config.ts`:

### Colors
- `brand-black`: #00000D
- `brand-light-blue`: #ccdcff

### Typography
- `font-hero`: Markl Mono (Bold, 48px, line-height: 60px)

### Spacing
- `px-124`: 124px horizontal padding

### Dimensions
- `w-500`, `h-500`: 500px width/height for the image
- `w-1216`: 1216px width for the text container

## Tailwind Classes Used

- `bg-brand-black`: Background color
- `font-hero`: Hero font family
- `text-hero`: Hero font size and line height
- `text-brand-light-blue`: Text color
- `w-500`, `h-500`: Image dimensions
- `w-1216`: Text container width
- `px-124`: Horizontal padding

## Design Tokens

All design tokens are extracted from the Figma design and can be reused across other components. All theme configuration is centralized in `src/app/globals.css` using Tailwind v4's `@theme` syntax.

## Custom Font Setup

The component uses **Markl Mono** font loaded from `public/fonts/markl/` with the following weights:
- Regular (400) - `MarklMono-Regular.otf`
- Medium (500) - `MarklMono-Medium.otf` 
- SemiBold (600) - `MarklMono-SemiBold.otf`
- Bold (700) - `MarklMono-Bold.otf` ✅ *Used in hero text*
- ExtraBold (800) - `MarklMono-ExtraBold.otf`
- Heavy (900) - `MarklMono-Heavy.otf`

## Using Theme Variables in Other Components

To use the same design tokens in other components, simply use the Tailwind classes:

```tsx
// Use the brand colors
<div className="bg-brand-black text-brand-light-blue">

// Use the hero font (48px, bold, 60px line-height)
<h1 className="font-hero text-hero">

// Use Markl Mono with different weights
<p className="font-markl font-medium">Medium weight text</p>
<p className="font-markl font-semibold">SemiBold weight text</p>

// Use custom dimensions
<div className="w-500 h-500 px-122">
```

## Available Font Classes
- `font-hero` - Markl Mono family
- `font-markl` - Markl Mono family (alias)
- `text-hero` - 48px size with 60px line-height and 700 weight
- Standard Tailwind font weights work: `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`
