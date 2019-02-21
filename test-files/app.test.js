const allfunc = require('../app.js');

test('array should be sorted alphabetically', () => {
    expect(allfunc.arrange(['Elishka', 'Dan', 'Ashley', 'Connor', 'Ben'])).toEqual([ 'Ashley', 'Ben', 'Connor', 'Dan', 'Elishka'])
})

test('split string to arrays', () => {
    expect(allfunc.splitString('Hello how are you?')).toEqual([ 'H',
    'e',
    'l',
    'l',
    'o',
    ' ',
    'h',
    'o',
    'w',
    ' ',
    'a',
    'r',
    'e',
    ' ',
    'y',
    'o',
    'u',
    '?' ])
})

test('sort string alphabetically', () => {
    expect(allfunc.sortString('codenation')).toEqual('acdeinnoot')
})

test('Shorten name to your choice of index, 3', () => {
    expect(allfunc.shortenName('Benjamin', 3)).toHaveLength(3);
})

test('add new fruit to array', () => {
    expect(allfunc.addNewFruit('durian')).toEqual([ 'apple', 'pear', 'banana', 'durian' ]);
})

test('return longest word in a string', () => {
    expect(allfunc.longerWord('cristien natal')).toEqual('cristien');
})

test('calculate age from this year', () => {
    expect(allfunc.calculateAge(1993, 2019)).toBe('I will be either ' + 26 + " or " + 27 + " in " + 2019)
})

test('area and circumference of the circle should be 56 and 254', () => {
    expect(allfunc.circleProperties(9)).toBe('The circumference is 56 and the area is 254')
})

test('convert temperature', () => {
    expect(allfunc.convertTemp(32)).toContain(89.6)
})

test('sum all numbers', () => {
    expect(allfunc.sumAll([5, 1])).toEqual(15)
})

test('find the difference in 2 arrays', () => {
    expect(allfunc.difference(['dan', 'ben'], ['dan', 'ben', 'andy', 'stuart'])).toEqual(expect.arrayContaining([ 'andy', 'stuart' ]));
})