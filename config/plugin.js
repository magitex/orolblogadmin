module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIA4UTPTWGNDZ3HQOUP',
        secretAccessKey: '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',
        region: 'ap-south-1',
        params: {
          Bucket: 'orlblg',
        },
      },
    },
  });