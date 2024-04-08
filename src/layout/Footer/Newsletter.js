// import React from "react";

import GhostContentAPI from "@tryghost/content-api";
export async function getNewsletter() {
  const api = new GhostContentAPI({
    url: "https://demo.ghost.io",
    key: "22444f78447824223cefc48062",
    version: "v5.0",
  });
  console.log(api);
  return await api.newsletters
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
