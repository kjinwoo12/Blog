export function instantScrollToTop() {
  const { documentElement, body } = document;

  documentElement.scrollTop = 0;
  body.scrollTop = 0;
  window.scrollTo(0, 0);
}
