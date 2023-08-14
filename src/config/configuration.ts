export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 3309,
        database: process.env.DB_NAME || 'vsp',
        username: process.env.DB_USERNAME || 'admin',
        password: process.env.DB_PASSWORD || 'admin',
    },
    jwt: {
        at_secret: process.env.ACCESS_TOKEN_SECRET,
        exp_in: process.env.ACCESS_TOKEN_EXPIRES_IN || '60s'
    }
});