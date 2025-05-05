export class User {
    constructor(id, name, age) {
        this._id = id;
        this.name = name;
        this.age = age;
    }
    get id() {
        return this._id;
    }
    getDetails() {
        return `User Details: 
                id: ${this._id},
                name: ${this.name},
                age: ${this.age}`;
    }
}
export class Admin extends User {
    constructor(role, _id, name, age) {
        super(_id, name, age);
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
