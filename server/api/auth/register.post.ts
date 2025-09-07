import { defineEventHandler, readBody, createError } from 'h3';
import { usersCollection } from '../../utils/mongo';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
    const body = await readBody<{ username?: string; password?: string }>(event);
    if (!body?.username || !body?.password) {
        throw createError({ statusCode: 400, statusMessage: 'Username and password required' });
    }
    const username = body.username.trim().toLowerCase();
    const password = body.password;
    if (username.length < 3 || password.length < 6) {
        throw createError({ statusCode: 400, statusMessage: 'Username or password too short' });
    }
    const users = await usersCollection();
    const existing = await users.findOne({ username });
    if (existing) {
        throw createError({ statusCode: 409, statusMessage: 'Username already taken' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const doc = { username, passwordHash, createdAt: new Date() };
    const { insertedId } = await users.insertOne(doc);
    return { _id: insertedId, username };
});
