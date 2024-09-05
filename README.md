TypeScript setup:
npm i -g typescript
In the project folder, tsc --init
tsc filename.ts
tsc
tsconfig.json
"rootDir": "./src", "outDir": "./dist", "removeComments": true, "noEmitOnError": true,"sourceMap": true, 

Playwright setup:
npm install playwright@latest
npx playwright test [FILENAME] --project=chromium
npx playwright test [FILENAME] --project=chromium --headed
npx playwright test [FILENAME] --project=chromium --headed --debug
npm install playwright --save-dev
npm install @playwright/test --save-dev
npm install typescript --save-dev
npx tsc --init
playwright Test for VSCode
To specify in the codebase,
Const browser:Browser = await firefox.launch({headless:false});
For new Page,
const page:Page = await browser.newPage();
