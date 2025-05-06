export class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `User Details: 
                id: ${this.id},
                name: ${this.name},
                age: ${this.age}`;
    }
}
export class Admin extends User {
    constructor(role, id, name, age) {
        super(id, name, age);
        this.role = role;
    }
    getDetails() {
        return `User Details: 
                id: ${this.id},
                name: ${this.name},
                age: ${this.age},
                role: ${this.role}`;
    }
}
