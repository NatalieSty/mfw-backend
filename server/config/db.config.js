module.exports = {
    HOST: "localhost",
    USER: "mfw",
    PASSWORD: "123",
    DB: "api",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};