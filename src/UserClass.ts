interface HasID {
	id: number;
}

export class User implements HasID {
	private _id: number;
	protected name: string;
	age: number;
	constructor(id: number, name: string, age: number) {
		this._id = id;
		this.name = name;
		this.age = age;
	}

	get id(): number {
		return this._id;
	}

	getDetails(): string {
		return `User Details: 
                id: ${this._id},
                name: ${this.name},
                age: ${this.age}`;
	}
}

export class Admin extends User {
	public role: string;
	constructor(role: string, _id: number, name: string, age: number) {
		super(_id, name, age);
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
