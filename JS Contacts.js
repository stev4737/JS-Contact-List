var friends = {};

friends.bill = {
    firstName: 'Bill',
    lastName: 'Jones',
    number: 7777777,
    address: ['One Microsoft Way','Redmond','WA','98052']
};

friends.steve = {
    firstName: 'Steve',
    lastName: 'Rigg',
    number: 8888888,
    address: ['Two Apple Drive','Gerkig','MI','75232']
};

var list = function (par) {
    for (var key in friends) {
        console.log(key);   
    }
};

var search = function (name) {                //search function
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};