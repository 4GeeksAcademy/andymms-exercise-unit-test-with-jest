const {sum} = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 153.95 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    const expected = 5 * 153.95; 
    
    expect(fromDollarToYen(5)).toBe(769.75);
})

test("One yen should be 0.0049 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(12.5);
    const expected = 12.5 * 0.0049; 
    
    expect(fromYenToPound(12.5)).toBe(0.06125);
})