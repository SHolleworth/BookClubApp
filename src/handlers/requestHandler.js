import axios from 'axios'

export const searchGoogleBooks = (query) => {
    console.log(query)
    const formattedQuery = query.toString().replace(/ /g, '+')
    console.log(formattedQuery)
}