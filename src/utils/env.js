// src/services/interceptor.js
import { getConfig } from './config';

export const Interceptor = () => {
    return getConfig().then((configCache) => {
        console.log("configCache", configCache);
        return configCache;
    });
};