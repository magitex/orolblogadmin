module.exports = ({ env }) => ({
  host: env('HOST', '65.0.108.182'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1d53f2e96d8f6cea3c49b7bb4a6811db'),
    },
  },
});
