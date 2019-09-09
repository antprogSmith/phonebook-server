const PhoneBook = {
    phoneBookEntries(parent, args, { db }, info) {
        return db.phoneBookEntries.filter((entry) => {
            return entry.phoneBookId === parent.id
        })
    },
}

export { PhoneBook as default }

