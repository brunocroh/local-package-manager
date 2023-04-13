<h1 align="center">
  Local Package Manager
</h1>

<h4 align="center">
  <a href="https://github.com/brunocroh/local-package-manager/new/main?readme=1#usage">How To Use</a>
</h4>

<p align="center">
  Get package manager of user, and translate commands to him
</p>
<p align="center">
 <a href="https://github.com/brunocroh/local-package-manager/blob/main/license">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="local-package-manager is released under the MIT license." />
  </a>
  <a href="https://github.com/brunocroh/local-package-manager/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=brunocroh">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Contact%20me%20at%20@brunocroh" alt="Contact me at @brunocroh" />
  </a>
</p>

## Install

```
npm install -D local-package-manager
```

## Usage

### Get the user package manager
```js
import { getPackageManager } from 'local-package-manager';

const packageManager = await getPackageManager();
console.log(packageManager);
//=> {name: 'npm', version: '8.11.0'}
```

### Translate a command to the package manager of user
```js
import { getCommand } from 'local-package-manager';

const npxCommand = await getCommand('npx');
console.log(`
Your command execution failed, try running:
${npxCommand} some-lib --example
`);

/* if user using pnpm */
//=> Your command execution failed, try running:
//=> pnpm exec some-lib --example

/* if user using yarn */
//=> Your command execution failed, try running:
//=> yarn some-lib --example

/* if user using pnpm */
//=> Your command execution failed, try running:
//=> npx some-lib --example
```
## Maintainers

- [brunocroh](https://github.com/brunocroh)
