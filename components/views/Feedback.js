import html from "html-literal";
export default () => html `
    <title>FindMeAMovie</title>
    <h1>Feedback Submission</h1>
    <h2>We want to hear from you! Please fill out the form below to let us know what we can do better.</h2>
    <form action="https://formspree.io/f/mqkvqbee" method="POST" enctype="multipart/form-data"></form>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
  </head>
  <div id="root"></div>
</html>
`;
