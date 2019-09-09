import uuidv4 from 'uuid/v4'

const Mutation = {
    createPhoneBook(parent, args, { db }, info) {
        const book = {
            id: uuidv4(),
            ...args.data
        }

        db.phoneBooks.push(book)

        return book
    },
    deletePhoneBook(parent, args, { db }, info) {
        const bookIndex = db.phoneBooks.findIndex((book) => book.id === args.id)

        if (bookIndex === -1) {
            throw new Error('PhoneBook not found')
        }

        const deletedPhoneBook = db.phoneBooks.splice(bookIndex, 1)

        db.phoneBookEntries = db.phoneBookEntries.filter((entry) => {
            return !entry.phoneBookId === args.id
        })

        return deletedPhoneBook[0]
    },
    updatePhoneBook(parent, args, { db }, info) {
        const { id, data } = args
        const book = db.phoneBooks.find((book) => book.id === id)

        if (!book) {
            throw new Error('PhoneBook not found')
        }

        if (typeof data.text === 'string') {
            book.text = data.text
        }

        return book
    },

    createPhoneBookEntry(parent, args, { db }, info) {
        const bookExists = db.phoneBooks.some((book) => book.id === args.data.phoneBookId)

        if (!bookExists) {
            throw new Error('Book not found')
        }

        const entry = {
            id: uuidv4(),
            ...args.data
        }

        db.phoneBookEntries.push(entry)

        return entry
    },
    deletePhoneBookEntry(parent, args, { db }, info) {
        const { id, data } = args
        const bookIndex = db.phoneBookEntries.findIndex((entry) => entry.id === id);

        if (bookIndex < 0) {
            throw new Error('Book entry not found')
        }

        const [entry] = db.phoneBookEntries.splice(bookIndex, 1)

        return entry
    },
    updatePhoneBookEntry(parent, args, { db }, info) {
        const { id, data } = args
        const entry = db.phoneBookEntries.find((entry) => entry.id === id);

        if (!entry) {
            throw new Error('Book entry not found')
        }

        if (typeof data.name === 'string') {
            entry.name = data.name
        }
        if (typeof data.cell === 'string') {
            entry.cell = data.cell
        }
        if (typeof data.img === 'string') {
            entry.img = data.img
        }

        return entry
    }
}

export { Mutation as default }