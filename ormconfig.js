require('dotenv/config');

module.exports = {
    type: "postgres",
    host: "ec2-52-70-107-254.compute-1.amazonaws.com",
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "d1c3k16rqqiq9h",
    synchronize: false,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
 };