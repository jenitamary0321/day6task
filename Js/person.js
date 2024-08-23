class Person {
    constructor(name, age, address, contact) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.contact = contact;
    }
  
    // Method to display person details
    getDetails() {
      return `
        Name: ${this.name}
        Age: ${this.age}
        Address: ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zip}
        Contact: ${this.contact.email}, ${this.contact.phone}
      `;
    }
  }
  
  // Example usage:
  const person1 = new Person(
    "John Doe",
    30,
    {
      street: "123 Main St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001"
    },
    {
      email: "john.doe@example.com",
      phone: "+1234567890"
    }
  );
  
  console.log(person1.getDetails());
  