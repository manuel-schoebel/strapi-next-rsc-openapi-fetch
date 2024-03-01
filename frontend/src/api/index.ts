import createClient from "openapi-fetch";
import type { paths } from "./strapi";
import qs from "qs";

const client = createClient<paths>({
  baseUrl: "http://127.0.0.1:1337/api",
  headers: {
    Accept: "application/json",
  },
  querySerializer(params) {
    console.log("querySerializer", params, qs.stringify(params));
    return qs.stringify(params, {
      encodeValuesOnly: true, // prettify URL
    });
  },
});
export { client };
