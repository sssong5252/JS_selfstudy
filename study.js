function helloSomeone(value) {
    var value;
    if (value === '') {
        console.log("whoru")
    }
    else if(typeof(value) === 'string') {
        console.log("hello" + value + "!")
    }
    else if(value === null) {
        console.log("i am null and void")
    }
    else if(typeof(value) === 'number' && value > 0) {
        console.log("my age is " + value)
    }
    else if(typeof(value) === 'number' && value < 0) {
        console.log("i am junyong")
    }
    else if(typeof(value) == 'undefined') {
        console.log("nobody can define me")
    }
    else
        console.log("age is just a number")
}

helloSomeone("42");
helloSomeone("");
helloSomeone(null);
helloSomeone(42);
helloSomeone(-1);
helloSomeone(NaN);
helloSomeone(undefined);