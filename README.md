# Task 10 & 11 - I have used a new booming framework called Playwright with TypeScript. Below I have added the initial setup, this can be considered as a baseline and further branched out.

## TypeScript setup:
- npm i -g typescript
- In the project folder, tsc --init
- tsc filename.ts
- tsc tsconfig.json
- "rootDir": "./src", "outDir": "./dist", "removeComments": true, "noEmitOnError": true,"sourceMap": true, 

## Playwright setup:
- npm install playwright@latest
 - npx playwright test homePage.spec.ts --project=chromium
-  npx playwright test homePage.spec.ts --project=chromium --headed
 - npx playwright test homePage.spec.ts --project=chromium --headed --debug
-  npm install playwright --save-dev
 - npm install @playwright/test --save-dev
 - npm install typescript --save-dev
 - npx tsc --init
