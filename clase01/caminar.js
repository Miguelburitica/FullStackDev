// usar para empezar npm init -y
// usar el argv


console.log(process.argv)

let num1 = parseFloat(process.argv[2])
let num2 = parseFloat(process.argv[3])


suma(num1, num2) 

function suma(num1, num2) {
    return num1 + num2
}