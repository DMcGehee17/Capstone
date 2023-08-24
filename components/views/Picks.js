import html from "html-literal";
export default () => html `
[<!DOCTYPE html>
<html>
  <link href="style.css" rel="stylesheet" />
  <head lang="en">
    <meta charset="UTF-8" />
    <title>FindMeAMovie</title>
    <h1>Editor's Picks</h1>
    <h2>Here are some of my recent favorites, all-time favorites, and more!</h2>
  </head>
  <div id="root"></div>
</html>]
`;
