export class User {
  firstName = '';
  lastName = '';
  birthDate: number | null = null; // unix ms or null
  street = '';
  zipCode: number | null = null;
  city = '';

  constructor(obj?: Partial<User>) {
    if (obj) Object.assign(this, obj);
  }

  // Serialize only plain data for Firestore
  toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
