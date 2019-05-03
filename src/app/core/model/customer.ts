export class Customer {
  person: Person;
  contact?: Contact;

  static createWithPerson(person: Person): Customer {
    const customer = new Customer();

    customer.person = person;

    return customer;
  }

  setPerson(person: Person): Customer {
    this.person = person;

    return this;
  }

  setEmail(email: string): Customer {
    this.contact.email = email;

    return this;
  }

  setPhoneNumber(phoneNumber: string): Customer {
    this.contact.phoneNumber = phoneNumber;

    return this;
  }

  setMobileNumber(mobileNumber: string): Customer {
    this.contact.mobileNumber = mobileNumber;

    return this;
  }
}

export interface Contact {
  email?: string;
  phoneNumber?: string;
  mobileNumber?: string;
}

export interface Person {
  firstName: string;
  middleName?: string;
  lastName? : string;
  prefix?: string;
  suffix?: string;
}
