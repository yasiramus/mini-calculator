// getting the input element 
let inputField = document.querySelector('#output');

// fuction to get values 
function OutPut (num) {
    
    inputField.value += num;

    enableBtn() // invoking remove disabled button  
}

// remove disabled button function 
function enableBtn() {

    const btn = document.getElementById('Btn')
    
    btn.removeAttribute('disabled') //remove disabled
        
}

// equall to function
function equalTo() {

    try {
        // if the input field is gempty 
        if (inputField.value === "") { 
            return
        }
        // eval is slow and dangerous to use 
        // return inputField.value = eval(inputField.value); // eval does the calculation and gives us the result when we click on the submit botton

        // new Function is a function which create a new instance of the same function 
        const newOutputValue = new Function ('return ' + inputField.value);
        
        return inputField.value = newOutputValue();
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
    
    inputField.value = inputField.value.slice(0, -1); //using the slice method to delete it one by one
}