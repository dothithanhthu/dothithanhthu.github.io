module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `📷 of Do Thi Thanh Thu`,
    siteTitleAlt: `📷 of Do Thi Thanh Thu`,
    siteHeadline: `📷 of Do Thi Thanh Thu`,
    siteUrl: `https://dothithanhthu.github.io/`,
    siteDescription: "📷 of Do Thi Thanh Thu",
    siteLanguage: `en`,
    author: `@dothithanhthu`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `📷 of Do Thi Thanh Thu`,
        socialMedia: [{}],
        location: `Vietnam`,
      },
    },
  ],
}