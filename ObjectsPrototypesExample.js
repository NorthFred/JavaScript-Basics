(function() {

    // Person prototype with constructor        
    function Person(first, last, age, gender, interests) {
        this.name = {first, last};
        this.age = age;
        this.gender = gender;
        this.interests = interests; 
    };

    // Creating a prototype instance "person1"
    const person1 = new Person('John', 'Apfel', 45, 'male', ['jogging','swimming', 'dancing']);

    // Printing the keys andvalues from our person1 instance
    for (key in person1) {
        console.log(key + " : " + person1[key]);
    }

    // Add a method to the Person prototype (this will be inherited to sub-prototypes!)
    Person.prototype.hi = function() {
        console.log("My name is " + this.name.first + " " + this.name.last);
    };

    // Calling the hi() function from the Person prototype
    person1.hi();

    console.log("");
    console.log("Inheritance: Person -> Teacher");
    console.log("");

    // The Teacher prototype will inherit all methods from the Person prototype
    Teacher.prototype = new Person;
        /* This can also be done like this:
         * Teacher.prototype = Object.create(Person.prototype);
         */

    // The Teacher constructor
    function Teacher(first, last, age, gender, interests, subject) {
        // Call the Person prototype constructor
        Person.call(this, first, last, age, gender, interests);
        // Subject belongs only to the Teacher object
        this.subject = subject;
    };

    // Creating a prototype instance "teacher1"
    teacher1 = new Teacher('Paula', 'Swimmer', 43, 'female', ['teaching', 'reading', 'walking'], 'mathematics');

    // Printing out the key and values from our teacher1 instance
    for (key in teacher1) {
        console.log(key);
        console.log(teacher1[key]);
    };

    // Calling the function hi(), inherited from the Person prototype!
    teacher1.hi();

    // Adding a method for the Teacher prototype
    Teacher.prototype.listen = function() {
        console.log("Listen up!  Today we will teach " + this.subject + "!");
    }

    // Calling the method from the Teacher prototype
    teacher1.listen();

    // This won't work, because listen() belongs to the Teacher prototype only
    person1.listen();
    
})();
