import { commands } from "./commands";
import { CommonEnvs, PackageManagers } from "./enums";
import { getFromENV, getNpmVersion } from "./utils";

export function determinePackageManager() {
  const packageManager = getFromENV(CommonEnvs.userAgent)
  if(packageManager) {
    if(packageManager.includes(PackageManagers.yarn)) return PackageManagers.yarn
    if(packageManager.includes(PackageManagers.pnpm)) return PackageManagers.pnpm
    return PackageManagers.npm 
  }
  return PackageManagers.npm
}

type PackageManager = {
  name: PackageManagers
  version: string
}

export async function getPackageManager(): Promise<PackageManager> {
  try {
    const packageManager = getFromENV(CommonEnvs.userAgent)
    const packageDetail = packageManager?.split(' ')[0]
    if(packageDetail) {
      const [packageName, version] = packageDetail.split('/')
      if(packageName in PackageManagers) {
        return {
          name: packageName as PackageManagers,
          version,
        }
      }
    }

    const version = await getNpmVersion()

    return {
      name: PackageManagers.npm,
      version: version.stdout
    }
  } catch (error) {
    return {
      name: PackageManagers.npm,
      version: ''
    }
  }
}

export async function getCommand(command: keyof typeof commands): Promise<string> {
  if (!command) {
    throw new Error('You need pass the command param')
  }

  const packageManager = await getPackageManager()
  const desiredCommand = commands[command][packageManager.name]

  if(!desiredCommand) return commands[command][PackageManagers.npm]

  return desiredCommand
}
