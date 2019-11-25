export class User {
    userId: number;
    username: String;
    name: String;
    password: String;
    location: String;

    constructor (username: String, name: String, password: String, location: String) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.location = location;
    }
}