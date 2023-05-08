export const getData = async () => {
    const response = await fetch('https://puzzle-app-56c37-default-rtdb.asia-southeast1.firebasedatabase.app/redirect.json')
    const data = await response.json()

    return data
}

export const sendData = async (level,url) => {
    await fetch('https://puzzle-app-56c37-default-rtdb.asia-southeast1.firebasedatabase.app/redirect.json',{
        method:"PUT",
        body:JSON.stringify({
            level:level,
            url:url
        })
    })
}