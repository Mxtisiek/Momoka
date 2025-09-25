import Surreal from "surrealdb";

// Database config template
interface DbConfig {
    url: string;
    namespace: string;
    database: string;
    username: string;
    password: string;
}
//

// Default database config
const DEFAULT_CONFIG: DbConfig = {
    url: process.env.DB_URL!,
    namespace: process.env.DB_NAMESPACE!,
    database: process.env.DB_DATABASE!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!
};
//

// Get the database
export async function getDb(config: DbConfig = DEFAULT_CONFIG): Promise<Surreal> {
    const db = new Surreal();

    try {
        await db.connect(config.url);
        await db.signin({
            namespace: config.namespace,
            database: config.database,
            username: config.username,
            password: config.password
        });
        return db;
    } catch (error) {
        console.error(`${error}`);
        console.log(`Surreal !> Failed to connect to the database: ${error}`);
        await db.close();
        throw error;
    }
}
