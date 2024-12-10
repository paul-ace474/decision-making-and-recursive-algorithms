//Task 1: Leap Year Checker//
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap year.`;
            } else {
                return `${year} is not a leap year.`;
            }
        } else {
            return `${year} is a leap year.`;
        }
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example usage
let year = 2024; // You can replace this with user input or another value
console.log(isLeapYear(year));

//Task 2: Ticket Pricing//
function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = "$10";
    } else if (age >= 13 && age <= 17) {
        price = "$15";
    } else if (age >= 18) {
        price = "$20";
    } else {
        price = "Invalid age entered.";
    }
    return `The ticket price is: ${price}`;
}

// Example usage
let age = 16; // You can replace this with user input or another value
console.log(getTicketPrice(age));
