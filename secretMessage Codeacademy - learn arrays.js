let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage.length)//check length (24)
secretMessage.pop()
//console.log(secretMessage.length)//check length (23)
secretMessage.push('to', 'Program')
//console.log(secretMessage)//check additions 'to', 'Program'
secretMessage[7] = 'right'
//console.log(secretMessage)//check change 'easily' to 'right'
secretMessage.shift()
//console.log(secretMessage)//check remove first element of array
secretMessage.unshift('Programming')
//console.log(secretMessage)//check to add 'Programming' to first element
secretMessage.splice(6,5,'know')
//console.log(secretMessage) //check remove 'get', 'right', 'the', 'first', 'time' -- and insert 'know'
console.log(secretMessage)