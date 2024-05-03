import db from "./connection.js";
import bcrypt from 'bcrypt';

async function createUser(email, username, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`;

        await db.run(sql, [email, username, hashedPassword]);

        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; 
    }
}


async function findUser(email, password) {
    try {

        const user = await db.get('SELECT * FROM users WHERE email = ?', email);

        if (!user){
            throw new Error('User could not be found');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return user;
        } else {
            throw new Error('Invalid credentials for login');
        }
    } catch (error) {
        console.error('Error with logging in:', error);
        throw error;
    }
}


export { createUser, findUser };