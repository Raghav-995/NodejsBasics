    var crypto = require('crypto');  
    const secret = 'abcdfg';  
    const hash = crypto.createHmac('sha256', secret)  
                       .update('Wes')
.digest() ; 
                        
    console.log(hash);  


    const cipher = crypto.createCipher('aes192', 'password');  
    var encrypted = cipher.update('Hello JavaTpoint');  
     
    console.log(encrypted);   

// Node.js program to demonstrate the
// crypto hmac.digest() method

// Importing crypto module


// Creating and initializing algorithm
// and password
const algo = 'sha256'
const secre = 'GFG Secret Key'

// Create an HMAC instance
const hmac = crypto.createHmac(algo, secre)

// Update the internal state of
// the hmac object
hmac.update('GeeksForGeeks')

// Perform the final operations
// No encoding provided
// Return calculated hmac hash
// value as Buffer
let result = hmac.digest()

// Check whether returns value is
// instance of buffer or not
console.log(Buffer.isBuffer(result)) // true

// Convert buffer to string
result = result.toString('hex')

// Print the result
console.log(`HMAC hash: ${result}`)
