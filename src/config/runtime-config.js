export const getRuntimeConfig = () => {
    return {
        apiUrl: typeof window !== 'undefined'
            ? process.env.NEXT_PUBLIC_API_URL
            : process.env.API_URL
    }
}