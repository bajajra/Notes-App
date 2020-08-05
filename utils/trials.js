const fs = require('fs')

const dataBuffer = fs.readFileSync("../data_files/1-trial.json")
const dataJSON = dataBuffer.toString()
const oldData = JSON.parse(dataJSON)
const newNode = {
    id : 4,
    title: 'Interview Questions',
    author: 'Rahul Bajaj',
    project: 'Miscellaneous',
    active : false
}
//console.log(oldData)
oldData.push(newNode)
console.log(oldData)
const finalData = JSON.stringify(oldData)
fs.writeFileSync("../data_files/1-trial.json", finalData)
//console.log(dataJSON)
