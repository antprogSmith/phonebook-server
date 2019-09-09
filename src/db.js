const phoneBooks = [
    { id: "1", text: "Work" },
    { id: "2", text: "Private" },
    { id: "3", text: "Other" },
];

const phoneBookEntries = [
    { phoneBookId: "1", id: "1", cell: "0987765543", name: "Mike Jones", img: 'images/img_avatar.png' },
    { phoneBookId: "1", id: "2", cell: "0213345542", name: "Janet Jackson", img: 'images/img_avatar.png' },
    { phoneBookId: "1", id: "3", cell: "0218838876", name: "Piet Pogenpul", img: 'images/img_avatar.png' },

    { phoneBookId: "2", id: "4", cell: "0112345545", name: "Samantha Fox", img: 'images/img_avatar.png' },
    { phoneBookId: "2", id: "5", cell: "0118876676", name: "Killer Jones", img: 'images/img_avatar.png' },

    { phoneBookId: "3", id: "6", cell: "0788898898", name: "Micky", img: 'images/img_avatar.png' },
];

const db = {
    phoneBooks,
    phoneBookEntries
}

export { db as default }