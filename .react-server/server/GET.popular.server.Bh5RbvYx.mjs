import{ConvexClient as a}from"convex/browser";import{a as i}from"./src/components/LatestArticleList.d7kz2F5q.mjs";import"convex/server";import"react-server-dom-webpack/server.edge";const n="https://sleek-kookabura-852.convex.cloud",s=new a(n);async function p(e){const t=new URL(e.url),r=t.searchParams.get("limit")?Number(t.searchParams.get("limit")):20,o=await s.query(i.articles.getPopular,{limit:r});return new Response(JSON.stringify(o))}export{p as default};
