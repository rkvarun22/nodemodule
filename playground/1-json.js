const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parseData = JSON.parse(bookJSON)
console.log(parseData.title)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)