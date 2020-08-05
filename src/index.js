const messages = [
    'Oscar',
    "Caroline",
    "Paula",
    'Ana',
    'Nicolay',
    'Yesica',
    'Diego',
    'Laura'
];

const randomMsg = _ => {
    const message = messages[Math.floor( Math.random() * messages.length )];
    console.log(message);
};

module.exports = { randomMsg };
