// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One euro should be 127.9 yen", function(){
    // use the function like its suppoed to be used
    const yen = fromDollarToYen(4.2)

    // if 3.5 euros are 4.2 dollars, then 3.5 dollars should be (1/1.2 * 4.2 * 127.9)
    const expected = 1/1.2 * 4.2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //3.5 euros are 4.2 dollars, then 3.5 dollars should be (1/1.2 * 4.2 * 127.9)
})

test("One euro should be 0.8 pound", function(){
    // use the function like its suppoed to be used
    const pound = fromYenToPound(447.65)

    // if 4.2 euros are 447.7 yens, then 447.7 yens should be (1/127.9 * 447.7 * 127.9)
    const expected = 1/127.9 * 447.65 * 0.8; 
    
    // this is the comparison for the unit test
     expect(pound).toBe(expected); //3.5 euros are 4.2 dollars, then 3.5 dollars should be (1/1.2 * 4.2 * 127.9)
})