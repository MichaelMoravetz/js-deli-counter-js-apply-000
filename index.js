function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  var line = []
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } 
  for ( let i = 0; i < katzDeliLine.length; i++) {
    line.push(`${[i + 1]}. ${katzDeliLine[i]}`)
  }
      return `The line is currently: ${line.join(", ")}`
}




function takeANumber(line){
 var counter = 0
 counter++
 line.push(counter)
}
return `Welcome! You're ticket number #${counter}`

takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "Welcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently serving #1" [2]
nowServing(line) // "Currently serving #2" []

takeANumber(line) // "Welcome! You're ticket number #3" [3]


