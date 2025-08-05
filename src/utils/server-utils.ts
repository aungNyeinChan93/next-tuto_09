import "server-only"

export const getUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const { users } = await response.json()
        if (!response.ok) throw new Error('user data fetching fail ...')
        return users
    } catch (error) {
        if (error instanceof Error) {
            console.error(error?.message)
        }
    }
}