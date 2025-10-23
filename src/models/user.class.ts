export class User {
  firstName = '';
  lastName = '';
  email= '';
  birthDate: number | null = null; 
  street = '';
  zipCode: number | null = null;
  city = '';

  constructor(obj?: Partial<User>) {
    if (obj) Object.assign(this, obj);
  }

  
  toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
