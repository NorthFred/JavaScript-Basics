var friends = {};

// Literal notation of object creation:
friends.jimmy = {
    firstName: 'Jimmy',
    lastName: 'Belly',
    number: '012 - 345 678',
};

friends.harm = {
    firstName: 'Harm',
    lastName: 'CrowsNest',
    number: '012 - 876 543',
};

friends.bill = {
    firstName: 'Bill',
    lastName: 'Gates',
    number: '099 - 555 555',
};


friends.steve = {};

// Adding data to our objects:
friends.steve.firstName = 'Steve';
friends.steve.lastName = 'Gates';
friends.steve.number = '099 -555 111';

friends.jimmy.address = ['Snottebellestreet 9', 'Oostrozebeke'];
friends.harm.address = ['Guitarstreet 11', 'Hulste'];
friends.bill.address = ['Microsoft Street 1', 'Redmond'];
friends.steve.address = ["Hell's Gate 100", 'Washington'];

// Creating function to give a list of our object.
var list = function(object) {
    
    for (var key in object) {
        
        console.log(key);
    }
};

// Creating search function to look up data by firstname.
var search = function(fname) {
    
    for (var key in friends) {
        
        if (friends[key].firstName === fname) {
                
            //console.log(friends[key]);
            return friends[key];
        }
    }
};


//List function goes through the "friends" object and lists the entries
console.log("Calling the list function on our 'friends' object:");
list(friends);

//Search function looks up the firstname and lists the keys of the friend object
console.log("\nLooking up the firstname 'Jimmy' and returning the matched data:");
search("Jimmy");

// Example of a nicer printout:
var searchResult = search("Jimmy");

console.log('First name  : ' + searchResult.firstName);
console.log('Last Name   : ' + searchResult.lastName);
console.log('Phone       : ' + searchResult.number);
console.log('Address     : ' + searchResult.address[0]);
console.log('              ' + searchResult.address[1]);


