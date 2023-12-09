# FAW

## Start project

### Vite

```sh
pnpm create vite .
# vue > javascript
pnpm i
```

### Tailwind

Install

```sh
pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p

```

Tailwind config file `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Config the styles css `style.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Component library

install

```sh
pnpm i -D daisyui@latest
```

Add to config `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
```

### Navigation

In the `jsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

### Linting

```sh
 npm init @eslint/config 
# ✔ How would you like to use ESLint? · style
# ✔ What type of modules does your project use? · none
# ✔ Which framework does your project use? · vue
# ✔ Does your project use TypeScript? · No / Yes
# ✔ Where does your code run? · browser
# ✔ How would you like to define a style for your project? · guide
# ✔ Which style guide do you want to follow? · standard
# ✔ What format do you want your config file to be in? · JavaScript
# Checking peerDependencies of eslint-config-standard@latest
# The config that you've selected requires the following dependencies:
# 
# eslint-plugin-vue@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 || ^16.0.0  eslint-plugin-promise@^6.0.0
# ✔ Would you like to install them now? · No / Yes
# ✔ Which package manager do you want to use? · pnpm

```
