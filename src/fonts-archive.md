# Eski fontlar arxivi

### Ovoz/Qadoq stili (`src/app/page.tsx`, `src/components/Hero.tsx`)

```javascript
import { Cormorant_Garamond } from "next/font/google";

const oldMoneyFont = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'], 
  style: ['normal', 'italic'] 
});
```

### Animatsiyali Kirish Matni (`src/components/AnimatedIntro.tsx`)

```javascript
import { Great_Vibes } from "next/font/google";

const holidayFont = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'] 
});
```

### Asosiy Font (`src/app/layout.tsx`)

```javascript
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
```
