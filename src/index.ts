import { commands } from "./commands";
import { CommonEnvs, PackageManagers } from "./enums";
import { getFromENV, getNpmVersion } from "./utils";


export function determinePackageManager() {
  const packageManager = getFromENV(CommonEnvs.userAgent)
  console.log({ packageManager })

  if(packageManager) {
    if(packageManager.includes(PackageManagers.yarn)) return PackageManagers.yarn
    if(packageManager.includes(PackageManagers.pnpm)) return PackageManagers.pnpm
    return PackageManagers.npm 
  }

  return PackageManagers.npm
}


type PackageManager = {
  package: PackageManagers
  version: string
}

export async function getUserPackageManager(): Promise<PackageManager> {
  const packageManager = getFromENV(CommonEnvs.userAgent)
  const packageDetail = packageManager?.split(' ')[0]
  if(packageDetail) {
    const [packageName, version] = packageDetail.split('/')
    if(packageName in PackageManagers) {
      return {
        package: packageName as PackageManagers,
        version,
      }
    }
  }

  const version = await getNpmVersion()
  console.log({version, stdOut: version.stdout})
  return {
    package: PackageManagers.npm,
    version: version.stdout
  }
}


export function getCommand(command: keyof typeof commands): string | undefined {
  const packageManager = determinePackageManager()
  if(!packageManager) return undefined

  return commands[command][packageManager]
}
