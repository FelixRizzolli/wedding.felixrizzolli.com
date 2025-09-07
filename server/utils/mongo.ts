import { MongoClient, Db, Collection } from 'mongodb';

// Use a single shared client across hot reloads in dev
let _client: MongoClient | null = null;
let _db: Db | null = null;

const MONGO_HOST = process.env.DATABASE_HOST;
const MONGO_PORT = process.env.DATABASE_PORT;
const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;
const MONGO_DB = process.env.DATABASE_NAME || 'wedding';

export interface UserDoc {
    _id?: any;
    username: string;
    passwordHash: string; // bcrypt hash
    createdAt: Date;
}

export async function getMongoClient(): Promise<MongoClient> {
    if (_client && _client.topology && _client.topology.isConnected()) return _client;
    if (_client) return _client; // new driver v5 removes topology, reuse
    _client = new MongoClient(MONGO_URI);
    await _client.connect();
    return _client;
}

export async function getDb(): Promise<Db> {
    if (_db) return _db;
    const client = await getMongoClient();
    _db = client.db(MONGO_DB);
    return _db;
}

export async function usersCollection(): Promise<Collection<UserDoc>> {
    const db = await getDb();
    return db.collection<UserDoc>('users');
}
