const Query = {
    phoneBooks(parent, args, { db }, info) {
        return db.phoneBooks;
    },
    phoneEntry(parent, args, { db }, info) {
        return db.phoneBookEntries;
    }
}

export { Query as default }
