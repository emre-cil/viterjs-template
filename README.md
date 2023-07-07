## viterjs-template

JavaScript + React + Redux + Mui + Axios + ESLint + Prettier

![viterjs-template](https://i.ibb.co/xMMGs2Q/Screenshot-2023-07-07-105634.png)

### Getting Started

#### Clone the repo

```
npx degit emre-cil/viterjs-template my-app
```

```
cd my-app
```

#### Install Dependencies

```
pnpm install
```

#### Run

```
pnpm dev
```

#### Paths

Application using absolute paths
Example: '@/components/Counter/Counter';

if you don't want to use you can remove these lines from

> vite.config.js

```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
```

> jsconfig.json

```
"paths": {
      "@/*": ["./*"]
    }
```

### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| pnpm dev      | Runs the application.              |
| pnpm build    | Create builds for the application. |
| pnpm preview  | Runs the Vite preview              |
| pnpm lint     | Display eslint errors              |
| pnpm lint:fix | Fix the eslint errors              |
| pnpm format   | Runs prettier for all files        |
| pnpm test     | Run tests                          |

### Check List

```

```
