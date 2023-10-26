export interface IEmployee {
    employeeId: number;
    personId: number;
    firstName: string;
    lastName: string;
    employeeNum: string;
    birthDate: string;
    employedDate: string;
    terminationDate: string;
}

export class Employee implements IEmployee {
    employeeId!: number;
    personId!: number;
    firstName!: string;
    lastName!: string;
    employeeNum!: string;
    birthDate!: string;
    employedDate!: string;
    terminationDate!: string;
}