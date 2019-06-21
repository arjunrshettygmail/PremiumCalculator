export class ContactRequest {
    personalData: PersonalData
    requestType: any = ''
    text: string = ''
  }
  
  class PersonalData {
    amount: number = 0
    age: number = 0
    country: string = ''
  }

  export class OccupationRating {
    occupation: string
    rating: string
  }

  export class RatingFactor {
    rating: string
    factor:number
  }

  export class Employee {
    
    Name: string;
    Age: number;
    DOB: number;
    Occupation: string;
    DeathSumInsured: number;
    
}