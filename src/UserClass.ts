interface HasID {
	id: number;
}

export class User implements HasID {
	public id: number;
	protected name: string;
	public age: number;
	constructor(id: number, name: string, age: number) {
		this.id = id;
		this.name = name;
		this.age = age;
	}



	getDetails(): string {
		return `User Details: 
                id: ${this.id},
                name: ${this.name},
                age: ${this.age}`;
	}
}

export class Admin extends User {
	public role: string;
	constructor(role: string, id: number, name: string, age: number) {
		super(id, name, age);
		this.role = role;
	}
	getDetails(): string {
		return `User Details: 
                id: ${this.id},
                name: ${this.name},
                age: ${this.age},
                role: ${this.role}`;
	}
}
