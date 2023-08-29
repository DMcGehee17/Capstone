import html from "html-literal";
export default (state) => html `
test: ${state.movies[0].title}
`;
