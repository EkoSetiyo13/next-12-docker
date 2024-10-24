import { loadEnvConfig } from '@next/env'

export function loadEnvironmentVariables() {
    // projectDir, dev
    const { combinedEnv, loadedEnvFiles } = loadEnvConfig(process.cwd(), true)

    console.log('Loaded environment variables:', combinedEnv)
    console.log('Loaded env files:', loadedEnvFiles)

    return combinedEnv
}

// Export environment variables
export const env = loadEnvironmentVariables()