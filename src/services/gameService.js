const baseUrl = 'http://localhost:3030/data'


export async function getAllGames() {
    const res = await fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
    return await res.json()
}

export async function getOne(id) {
    const res = await fetch(`${baseUrl}/games/${id}`)
    return await res.json()
}

