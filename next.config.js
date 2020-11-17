const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = bundleAnalyzer({
  images: {
    domains: [
      'localhost',
      'gbruv.com',
      'ghassanbrov.com',
      'classicbody.org',
      'ghassanclassic.com',
    ],
  },
})

/**
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: '',
  },
 */
