export class User {
    userId: number;
    username: string;
    name: string;
    password: string;
    location: string;

    constructor (username: string, name: string, password: string, location: string) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.location = location;
    }
}