export const setDataLS = (key = "a", value) => {
    if(typeof value) localStorage.setItem(key, value)
    const stringVal = JSON.stringify(value)
    localStorage.setItem(key, stringVal)
} 

export const getDataLS = (key) => {
    let local = localStorage.getItem(key)
    if(local) return JSON.parse(local)
    else return false
}