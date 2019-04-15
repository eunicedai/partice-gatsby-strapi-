// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-article-js": () => import("/Users/ALEE/Desktop/strapi/gats/app/src/templates/article.js" /* webpackChunkName: "component---src-templates-article-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/ALEE/Desktop/strapi/gats/app/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/ALEE/Desktop/strapi/gats/app/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/ALEE/Desktop/strapi/gats/app/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/ALEE/Desktop/strapi/gats/app/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-signup-js": () => import("/Users/ALEE/Desktop/strapi/gats/app/src/pages/signup.js" /* webpackChunkName: "component---src-pages-signup-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ALEE/Desktop/strapi/gats/app/.cache/data.json")

