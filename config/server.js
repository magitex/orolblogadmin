module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1332),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1d53f2e96d8f6cea3c49b7bb4a6811db'),
    },
  },
});
