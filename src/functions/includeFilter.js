export const includeFilter = (word, arr) => {
    return arr.filter(item => {
        const res = [...item.name.toLowerCase()].filter(latter => {
            return [...word].includes(latter)
        })
        return res.length
    })
}