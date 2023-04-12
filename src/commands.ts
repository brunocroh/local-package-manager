export const commands = {
  install: {
    yarn: "yarn",
    npm: "npm install",
    pnpm: "pnpm install"
  },
  installPackage: {
    yarn: "yarn add",
    npm: "npm install",
    pnpm: "pnpm add"
  },
  run: {
    yarn: "yarn",
    npm: "npm run",
    pnpm: "pnpm"
  },
  npx: {
    yarn: "yarn",
    npm: "npx",
    pnpm: "pnpm exec"
  },
  ci: {
    yarn: "yarn --frozen-lockfile",
    npm: "npm ci",
    pnpm: "CI=true pnpm install --frozen-lockfile"
  }
}
