const PhoneBookEntry = {
    phoneBook(parent, args, { db }, info) {
        return db.phoneBooks.find((book) => {
            return book.id === parent.phoneBookId
        })
    }
}

export { PhoneBookEntry as default }