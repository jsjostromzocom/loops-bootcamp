/** -- 1 -- */

for (let i = 0; i <= 1000; i++) {
    console.log(`Varv: ${i}`);
}

/** -- 2 -- */

for (let i = 100; i >= 0; i--) {
    console.log(`Varv: ${i}`);
}

/** -- 3 -- */

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Frukt: ${fruits[i]}`);
}

/** -- 4 -- */

for (let i = 0; i < fruits.length; i++) {
    console.log(`Frukt: ${i}.${fruits[i]}`);
}

/** -- 6 -- */

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

for (const thing of things) {
    console.log(thing);
}

/** -- 7 -- */

things.forEach((thing) => {
    console.log(thing);
});

/** -- 8 -- */

things.forEach((thing, index) => {
    console.log(index, thing);
});

/** -- 9 -- */

let counter = 0;

while(counter <= 1000) {
    console.log(console.log(`Varv: ${counter}`));
    counter++;
}

/** -- 10 -- */

let deck = [];
const suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];

for(let i = 0; i < suits.length; i++) { // Loopa igenom varje färg
    for(let j = 2; j < 15; j++) { // För varje färg loopa och skapa kort från värde 2-14
        let card = {
            suit: suits[i],
            color: getColor(suits[i]),
            display: getDisplay(j),
            value: j
        }

        deck.push(card);
    }
}

function getColor(suit) {
    if (suit === '&hearts;' || suit === '&diams;') {
        return 'red';
    } else {
        return 'black';
    }
}

function getDisplay(value) {
    if (value < 11) { return value; }
    else if(value === 11) { return 'J' }
    else if(value === 12) { return 'D' }
    else if(value === 13) { return 'K' }
    else if(value === 14) { return 'A' }
}

/** -- 11 -- */

let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

for (const friend of friends) {
    console.log(`Friend name: ${friend.name}`);
    for (let i = 0; i < friend.likes.length; i++) {
        console.log(friend.likes[i]);
    }
};

/** -- 12 -- */

const passwords = [123456, "password", 12345678, "qwerty", 123456789, 12345, 1234, 111111, 1234567, "dragon", 123123, "baseball", "abc123", "football", "monkey", "letmein", 696969, "shadow", "master", 666666, "qwertyuiop", 123321, "mustang", 1234567890, "michael", 654321, "pussy", "superman", "1qaz2wsx", 7777777, "fuckyou", 121212, 000000, "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", "hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", "iloveyou", "fuckme", 2000, "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", 112233, "george", "asshole", "computer", "michelle", "jessica", "pepper", 1111, "zxcvbn", 555555, 11111111, 131313, "freedom", 777777, "pass", "fuck", "maggie", 159753, "aaaaaa", "ginger", "princess", "joshua", "cheese", "amanda", "summer", "love", "ashley", 6969, "nicole", "chelsea", "biteme", "matthew", "access", "yankees", 987654321, "dallas", "austin", "thunder", "taylor", "matrix", "william", "corvette", "hello", "martin", "heather", "secret", "fucker", "merlin", "diamond", "1234qwer", "gfhjkm", "hammer", "silver", 222222, 88888888, "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick", "internet", "scooter", "orange", 11111, "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal", "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "xxxxxx", 123123123, "gateway", "marina", "diablo", "bulldog", "qwer1234", "compaq", "purple", "hardcore", "banana", "junior", "hannah", 123654, "porsche", "lakers", "iceman", "money", "cowboys", 987654, "london", "tennis", 999999, "ncc1701", "coffee", "scooby", 0000, "miller", "boston", "q1w2e3r4", "fuckoff", "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", 333333, "oliver", "redsox", "player", "nikita", "knight", "fender", "barney", "midnight", "please", "brandy", "chicago", "badboy", "iwantu", "slayer", "rangers", "charles", "angel", "flower", "bigdaddy"];

const index = Math.floor(Math.random() * passwords.length);
const topsecret = passwords[index];

for (const password of passwords) {
    if (password === topsecret) {
        console.log(`Aha! I found you, ${password}.`);
    }
}

