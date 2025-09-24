import Surreal from "surrealdb";

// Database config template
interface DbConfig {
    url: string;
    namespace: string;
    database: string;
    username: string;
    password: string;
}

// Default database config
const DEFAULT_CONFIG: DbConfig = {
    url: process.env.DB_URL!,
    namespace: process.env.DB_NAMESPACE!,
    database: process.env.DB_DATABASE!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!
};

// Get the database
export async function getDb(config: DbConfig = DEFAULT_CONFIG): Promise<Surreal> {
    const db = new Surreal();

    try {
        await db.connect(config.url, {
            namespace: config.namespace,
            database: config.database,
            auth: {
                username: config.username,
                password: config.password
	        }
        });
        return db;
    } catch (err) {
        console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
        await db.close();
        throw err;
    }
}