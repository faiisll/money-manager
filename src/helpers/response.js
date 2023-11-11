
export const handlingError = (error) => {
    if(typeof error === 'string' || typeof error === 'number') return error
    if(Array.isArray(error)) {
        let response = error.join(", ")
        return response
    }else{
        let keys = Object.keys(error)
        return keys.map(key => {
            if(Array.isArray(error[key])){
                return `- ${key}: ${error[key].join(', ')}`
            }else {
                return `- ${key}: ${error[key]}`
            }
        }).join(";")
    }
}