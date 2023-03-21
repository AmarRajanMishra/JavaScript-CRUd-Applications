
let selectedRow = null

function onFormSubmit(){
    event.preventDefault()

    let userFormData = getInputData()
    
    if(selectedRow === null){
        createData(userFormData)
    }else{
        updateData(userFormData)
    }
    resetInput()
}
// Retrieve Data From  User Input
function getInputData(){
    let formData = {}
    formData['name'] = document.getElementById('fname').value
    formData['email'] = document.getElementById('femail').value
    formData['number'] = document.getElementById('fnumber').value
    formData['message'] = document.getElementById('fmessage').value
    return formData
}

// Create Table data
function createData(userData){
    let table = document.getElementById('store').getElementsByTagName('tbody')[0]
    let row = table.insertRow(table.length)
    let cell1 = row.insertCell(0)
    cell1.innerHTML = userData.name
    let cell2 = row.insertCell(1)
    cell2.innerHTML = userData.email
    let cell3 = row.insertCell(2)
    cell3.innerHTML = userData.number
    let cell4 = row.insertCell(3)
    cell4.innerHTML = userData.message
    let cell5 = row.insertCell(4)
    cell5.innerHTML = `<button class="btn btn-danger" onclick="editData(this)">Edit</button>
    <button class="btn btn-danger" onclick="deleteData(this)">Delete</button>`
    // console.log(row)
}


// Edit Data
function editData(td){
    selectedRow = td.parentElement.parentElement
    // console.log(selectedRow)
    // let name = selectedRow.cells[1].innerHTML
    // console.log(name)
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML
    document.getElementById('femail').value = selectedRow.cells[1].innerHTML
    document.getElementById('fnumber').value = selectedRow.cells[2].innerHTML
    document.getElementById('fmessage').value = selectedRow.cells[3].innerHTML
}

// update Data
function updateData(updatedUserData){
    // console.log('Hello')
    selectedRow.cells[0].innerHTML = updatedUserData.name
    selectedRow.cells[1].innerHTML = updatedUserData.email
    selectedRow.cells[2].innerHTML = updatedUserData.number
    selectedRow.cells[3].innerHTML = updatedUserData.message
    selectedRow = null
}

// Delete Data
function deleteData(td){
    if(confirm('Do You Want To Delete This Data')){
        let row = td.parentElement.parentElement
        // console.log(row.rowIndex)
        document.getElementById('store').deleteRow(row.rowIndex)
    }
    
}

// Reset Input Fields
function resetInput(){
    document.getElementById('fname').value = ''
    document.getElementById('femail').value = ''
    document.getElementById('fnumber').value = ''
    document.getElementById('fmessage').value = ''
}


// let obj = {
//     Name : 'Amar',
//     Age : 24,
//     printDAta : function(){
//         console.log(obj.Name)
//     }
// }

// alert('Hello')
// confirm('Hello')