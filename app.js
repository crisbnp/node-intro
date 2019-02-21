const arrange = (myArray) => {
    // let myArray = ['Elishka', 'Dan', 'Ashley', 'Connor', 'Ben'];
    sortedArray = myArray.sort();
    return sortedArray;
    console.log(sortedArray)
}

// arrange(['Elishka', 'Dan', 'Ashley', 'Connor', 'Ben']);

const splitString = (string) => {
    // let string = 'Hello how are you?';
    let newString = string.split('');
    console.log(newString);
    return newString;
}

// splitString('Hello how are you?');

const sortString = (string) => {
    let stringArray = string.split('');
    let rearrangedStr = stringArray.sort().join("");
    console.log(rearrangedStr);
    return rearrangedStr
}

// sortString("codenation");

const shortenName = (name, index) => {
    let shortenedName = name.split('').slice(0,index).join('');
    console.log(shortenedName);
    return shortenedName;
}

// shortenName('Benjamin', 3);

const addNewFruit = (newFruit) => {
    let array1 = ["apple", "pear", "banana"];
    array1.push(newFruit);
    console.log(array1);
    return array1
    
}

// addNewFruit('durian');

const longerWord = (string) => {
    let splitter = string.split(' ');
    if (splitter[0].length > splitter[1].length) {
        console.log(splitter[0])
        return splitter[0]
    } else {
        console.log(splitter[1])
        return splitter[1]
    }
}
//  longerWord('cristen natal')

const calculateAge = (birthYear, thisYear) => {
    let age = thisYear - birthYear;
    console.log('I will be either ' + age + " or " + (age+1) + " in " + thisYear);
    return 'I will be either ' + age + " or " + (age+1) + " in " + thisYear
}

// calculateAge (1993, 2019)

const circleProperties = (radius) => {
    let circumference = Math.floor(2 * Math.PI * radius);
    let area = Math.floor(Math.PI * Math.pow(radius, 2));
    console.log(`The circumference is ${circumference} and the area is ${area}`)
    return `The circumference is ${circumference} and the area is ${area}`
}

circleProperties(9)

const temperature = {
    celcius: 0,
    fahrenheit: 0,
};

const convertTemp = (celcius) => {
    temperature.celcius = celcius;
    temperature.fahrenheit = (celcius * 9/5) + 32
    console.log(`${celcius}°C is ${temperature.fahrenheit}°F`)
    return `${celcius}°C is ${temperature.fahrenheit}°F`
}

// convertTemp(32);

const sumAll = (array) => {
    let lower = Math.min(array[0], array[1]);
    let higher = Math.max(array[0], array[1]);
    let sum = 0;
    for (i = lower ; i<= higher; i++) {
        sum += i
    }
    console.log(sum)
    return sum
}
sumAll([5,1])

const difference = (array1, array2) => {
    let _difference = new Set(array1);
    for (var elem of array2) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }

    let newArray = Array.from(_difference)
    console.log(newArray);
    return newArray;
}

difference(['dan', 'ben'], ['dan', 'ben', 'andy', 'stuart']);


module.exports = {
    arrange,
    splitString,
    sortString,
    shortenName,
    addNewFruit,
    longerWord,
    calculateAge,
    circleProperties,
    convertTemp,
    sumAll,
    difference,
}