#! /usr/bin/env node

import { determinePackageManager, getUserPackageManager } from "."

const result = determinePackageManager()
const result2 = getUserPackageManager()
console.log({result, result2})
