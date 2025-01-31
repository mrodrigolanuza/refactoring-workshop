export class AuthenticationService {
	isAuthenticated(id: number): boolean {
		return (id == 12345);
	}
	isAuthenticatedNew(id: Id): boolean {
		return (id.equals(Id.create(12345)));
	}
}

export class Id {
	private constructor(private readonly id: number) {
		this.id = id;
	}
	static create(id: number): Id {
		if (id <= 0 )
			throw Error(`id ${id} not valid`);
		return new Id(id);
	}
	
	public equals(other: Id): boolean {
		return other.id === this.id;
	}
}