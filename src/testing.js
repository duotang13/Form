var validator = require('validator');


    export function validatingForm() { 

       !validator.isEmpty(tempCustomer["firstName"]),
       !validator.isEmpty(tempCustomer["lastname"]),
       !validator.isEmpty(tempCustomer["companyName"]),
       validator.isEmail(tempCustomer["email"]),
       !validator.isEmpty(tempCustomer["nbEmployees"]),
       !validator.isEmpty(tempCustomer["country"])
        } 
    
