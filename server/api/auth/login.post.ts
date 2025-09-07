import { defineEventHandler, readBody, createError } from 'h3';
import { usersCollection } from '../../utils/mongo';
import bcrypt from 'bcryptjs';
import { setUserSession } from '#imports';

export default defineEventHandler(async (event) => {
    const body = await readBody<{ username?: string; password?: string }>(event);
    if (!body?.username || !body?.password) {
        throw createError({ statusCode: 400, statusMessage: 'Username and password required' });
    }
    const username = body.username.trim().toLowerCase();
    const password = body.password;
    const users = await usersCollection();
    const user = await users.findOne({ username });
    if (!user) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
    }
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
    }
    await setUserSession(event, { user: { id: String(user._id), username: user.username } });
    return { username: user.username };
});
