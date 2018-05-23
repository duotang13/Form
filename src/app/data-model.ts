export class Customer {
    firstName = '';
    lastName = '';
    companyName = '';
    email = '';
    nbEmployees = '';
    country = '';
    phone = '';
    addresses: Address[];
}

export class Address {
    street = '';
    city = '';
    state = '';
    zip = '';
}

