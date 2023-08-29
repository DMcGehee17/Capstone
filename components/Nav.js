import html from "html-literal";

export default links => html`
  <nav class="navbar">
    <ul class="hidden--mobile nav-links">
        ${links.map(link => {
          return `<li>
                    <a href="/${link.title}" title="${link.title}" data-navigo>
                      ${link.text}
                    </a>
                  </li>`
        })}
      </div>
    </ul>
  </nav>
`;
