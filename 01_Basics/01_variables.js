const accountId = 144553
let accountEmail = "sumit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ss@ss.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
