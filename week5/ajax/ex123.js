//Ex1

const fetch = function (isbn) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, function (result) {
        console.log(result)
    })
}

// fetch(9782806269171)

//Ex2

const fetch2 = function (queryType , queryValue) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function (result) {
        console.log(result)
    })
}

// fetch2("isbn", 9782806269171)
// fetch2("title", "How to Win Friends and Influence People")


//Ex3
const fetch3 = function (queryType , queryValue) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function (result) {
        result.items.forEach(item => { 
            console.log(item.volumeInfo.title)
            console.log(item.volumeInfo.authors[0])
            console.log(item.volumeInfo.industryIdentifiers[0].identifier)
        });
    })
}

fetch3("isbn", 9782806269171)
