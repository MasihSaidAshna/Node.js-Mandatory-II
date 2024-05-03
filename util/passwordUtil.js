import bcrypt from "bcrypt";

const saltRounds = 10;
const plaintextPassword = "password123";
const passwordHash = "$2b$14$0lPQTl8OvU/PEoUkxfH9M./lv..pm24PrPZm/uiGIkaCcOTqYOdXi";

const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hashedPassword);

const isSame = await bcrypt.compare(plaintextPassword, passwordHash);

console.log(isSame);