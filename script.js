function isSameType(value1, value2) {
  //your js code here
	let a=typeof(value1);
let b=typeof(value2);
let c=typefo(NaN);
if(a===b){
    return true;
}else if(a===c || b===c){
    return true;
}else{
    return false; 
}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
