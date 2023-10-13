export const getData = async <Object>(url: string): Promise<Object> => {
    const response = await fetch(url)
    return await response.json()
}