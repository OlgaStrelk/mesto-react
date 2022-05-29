export const getResponse = (res) => {(res.ok ? res.json() : Promise.reject(res.status))
}