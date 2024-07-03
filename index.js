function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable as above
        console.log(x); // 20
    }
    console.log(x); // 20
}
exampleVar();
