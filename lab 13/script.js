const regForm = document.querySelector('#regForm');
const inputs = document.querySelectorAll('input');
const email = document.querySelector('#email');
const kön = document.querySelector('#kön');
const readme = document.querySelector('#readme');




const validate = function (id) {
    let input = document.querySelector(id);
    if(input.value === '' || input.value.length < 3) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.focus()
        return false   

    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');

        return true
    }
}



const validateEmail = function (email) {
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
          
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        email.focus()
        return false
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true
    }
}

const validateKön = function (kön) {
    if (kön.value ==''){
        
        kön.classList.add('is-invalid');
        kön.classList.remove('is-valid');
          //email.focus(); 
          kön.focus()
        return false
        
    } else {

        kön.classList.remove('is-invalid');
        kön.classList.add('is-valid');
        return true
       
    }
        

}


const validatereadme = function (e) {  
    if (e.target.checked) {
        readme.classList.remove('is-invalid');
        readme.classList.add('is-valid');
        readme.checkbox.focus();
        return false
    } 
    else {

        readme.classList.add('is-invalid');
        readme.classList.remove('is-valid');
        return true
    }
        

}





inputs.forEach(input => {
    input.addEventListener('keyup', function(e) {
        let id = '#' + e.currentTarget.id;
        
        validate(id);
    })
})




email.addEventListener('keyup', function(e) {
    validateEmail(email)
})



kön.addEventListener('keyup', function(e) {
    validateKön(kön)
})



readme.addEventListener('change', function(e) {
    validatereadme(e)
})



regForm.addEventListener('submit', function(event) {
    event.preventDefault()

    for(let i = 0; i < event.currentTarget.length; i++) {

        if(event.currentTarget[i].type === 'text') {
            validate('#' + event.currentTarget[i].id)
        }

    }

    validateEmail(email);
    validateKön(kön);
    validatereadme(readme);


    if(validate('#firstName') && validate('#lastName') &&  validateKön(kön) && validateEmail(email) && validatereadme(e)) {
        // skickar iväg till databasen
        console.log('Success!!!!! wohoooo');
        alert(Sucsess)
        
        let user = {
            firstName: event.currentTarget.firstName.value,
            lastName: event.currentTarget.lastName.value,
            email: event.currentTarget.email.value,
            kön: event.currentTarget.kön.value,
            readme: event.currentTarget.readme.value
        }

        console.log(user);
        regForm.reset();

       
    } else {
        console.log('nope!');
    }
})