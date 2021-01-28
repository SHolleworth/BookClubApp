import axios from 'axios'
const fs = require('fs')

export const searchGoogleBooks = (query) => {
    console.log(query)
    const formattedQuery = query.replaceAll(' ', '+')
    console.log(formattedQuery)
}