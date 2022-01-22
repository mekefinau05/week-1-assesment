

const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to password validation!')

reader.question('What is your password', function(password){
    if(password.length >= 10){
        console.log('Strong Password!')
    }else{
        console.log('Passwarod didnt meet requirement')
    }
    reader.close
})

