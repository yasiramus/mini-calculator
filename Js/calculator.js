// getting the input element 
let inputField = document.querySelector('#output');

// fuction to get values 
function OutPut (num) {
    
    inputField.value += num;

    enableBtn() //calling the enable function
}

// enable disabled button function 
function enableBtn() {

    const btn = document.getElementById('Btn')
    
    btn.removeAttribute('disabled') //remove disabled
        
}

// equall to function
function equalTo() {

    try{
        if (inputField.value === "") { 
            return
        }
        
        return inputField.value = eval(inputField.value); // eval does the calculation and gives us the result when we click on the submit botton
    }
    catch (error) {
        alert('incorrect number')
    }
    
}



// clearing the input field 
function Clear() {

    inputField.value = "";
}

// function for deleting the values one by one 
function Del() {
    
    inputField.value = inputField.value.slice(0, -1); //using the slice methodto delete it one by one
}