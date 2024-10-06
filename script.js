function isSameType(value1, value2) {
    let a = typeof(value1);
    let b = typeof(value2);

    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // If one is NaN and the other isn't, return false
    if (isNaN(value1) || isNaN(value2)) {
        return false;
    }

    // Otherwise, compare their types
    return a === b;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
