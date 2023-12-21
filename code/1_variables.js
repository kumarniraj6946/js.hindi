const  accountId = 144553
let accountEmail = "niraj@google.com"
var accountPassword = "12345"
accountCity = "Bihar"
let accountstate

// accountId = 2 // not allowed

accountEmail = "raj@b.com"
accountPassword = "694612"
accountCity = "Delhi"

 
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail,accountPassword, accountCity, accountstate])
