export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        port: parseInt(process.env.DATABASE_PORT, 10) || 3305,
        database: process.env.DATABASE_NAME || 'eco',
        username: process.env.DATABASE_USERNAME || 'eco',
        password: process.env.DATABASE_PASSWORD || 'eco',
    },
    jwt: {
        at_secret: process.env.ACCESS_TOKEN_SECRET,
        exp_in: process.env.ACCESS_TOKEN_EXPIRES_IN || '60s'
    }
});