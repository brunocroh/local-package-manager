import { execa } from "execa";

export function getFromENV(name: string): string | undefined {
  let value = process.env[name];
  value = value === undefined ? process.env[`npm_config_${name.toLowerCase()}`] : value;
  value = value === undefined ?  process.env[`npm_package_config_${name.toLowerCase()}`] : value;
  return value;
}

export async function getNpmVersion() {
  return execa("npm", ['--version'])
}
