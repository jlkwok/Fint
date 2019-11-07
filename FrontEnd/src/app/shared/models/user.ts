export class User {
    userId: number;
    username: String;
    name: String;
    password: String;

    constructor (username: String, name: String, password: String) {
        this.username = username;
        this.name = name;
        this.password = password;
    }
}