import authenticatedAPI from "@/plugins/authAxios"

export const logout = () => authenticatedAPI.post('/auth/logout')
export const getUser = () => authenticatedAPI.get('/auth/me')

//wallets api
export const getWallets = () => authenticatedAPI.get('/wallets')
export const getWallet = (id) => authenticatedAPI.get(`/wallet/${id}`)
export const postWallet = (body = {}) => authenticatedAPI.post('/wallet', {...body})
export const deleteWallet = (id) => authenticatedAPI.delete(`/wallet/${id}`)
export const patchWallet = (id, body) => authenticatedAPI.patch(`/wallet/${id}`, {...body})

//categories
export const getCategories =() => authenticatedAPI.get('/categories')
export const getCategory = (id) => authenticatedAPI.get(`/category/${id}`)
export const postCategory = (body ={}) => authenticatedAPI.post(`/category`, {...body})
export const deleteCategory = (id) => authenticatedAPI.delete(`/category/${id}`)
export const patchCategory = ({id,body}) => authenticatedAPI.patch(`/category/${id}`, {...body})

//transactions
export const getTransactions = (params = {}) => authenticatedAPI.get(`/transactions`, {params})
export const deleteTransaction = (id) => authenticatedAPI.delete(`/transaction/${id}`)