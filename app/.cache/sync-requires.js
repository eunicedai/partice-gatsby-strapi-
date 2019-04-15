const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("/Users/ALEE/Desktop/strapi/gats/app/src/templates/article.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ALEE/Desktop/strapi/gats/app/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ALEE/Desktop/strapi/gats/app/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ALEE/Desktop/strapi/gats/app/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/ALEE/Desktop/strapi/gats/app/src/pages/page-2.js"))),
  "component---src-pages-signup-js": hot(preferDefault(require("/Users/ALEE/Desktop/strapi/gats/app/src/pages/signup.js")))
}

