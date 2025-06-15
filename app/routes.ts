import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layout.tsx", [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    // route("blog", "routes/snippets.tsx"),
  ]),
] satisfies RouteConfig;
