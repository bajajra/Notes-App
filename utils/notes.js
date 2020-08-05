const fs = require('fs')
const fileName = "../data_files/1-json.json"
const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync(fileName)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(fileName, dataJSON)
}
const inactivateNote = function (id) {
    let parsedNotes = loadNotes()
    for (var i=0; i<parsedNotes.length; i++){
        //console.log(parsedNotes[i])
        if (parsedNotes[i].id === id)
            parsedNotes[i].active = false
    }
}
const removeNotes = function (notesTitle) {
    let parsedNotes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.Title !== notesTitle
    })
    if (parsedNotes.length > notesToKeep.length){
        console.log("Note Removed")
    }
    saveNotes(notesToKeep)
}
const getNotes = function () {

    // const dataBuffer = fs.readFileSync("../data_files/1-json.json")
    // const dataJSON = dataBuffer.toString()
    // console.log(dataJSON)
    // fs.readFile("./data_files/1-json.json", {encoding: 'utf-8'}, function (err, data) {
    //     if (err) throw err;
    // })
    const parsedNotes = loadNotes()
    for (var i=0; i<parsedNotes.length; i++){
        //console.log(parsedNotes[i])
        if (parsedNotes[i].active === true)
            resultNotes.push(parsedNotes[i].title)
    }

    return resultNotes

    //JSON.stringify()
    //JSON.parse()
    // return 'Your notes...'
}
const addNotes = function (noteTitle, noteAuthor, noteProject) {

    // const dataBuffer = fs.readFileSync("../data_files/1-json.json")
    // const dataJSON = dataBuffer.toString()
    // const parsedData = JSON.parse(dataJSON)
    let parsedNotes = loadNotes()
    const noteId = parsedNotes.length + 1
    const newNote = {
        id: noteId,
        title : noteTitle,
        author : noteAuthor,
        project :noteProject,
        active : true
    }
    const duplicateNotes = parsedNotes.filter(function (note) {
        return note.title === noteTitle && note.id === noteId
    })
    if (duplicateNotes.length === 0){
        parsedNotes.push(newNote)
    }
    else {
        console.log("Duplicate Title!!")
    }
    // fs.appendFileSync("./data_files/1-json.json", newNote);

}
// module.exports=getNotes

//getNotes()
addNotes("Test1", "RB", Random)