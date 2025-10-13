export default function tagUrl(values, context) {
  return values.map((tag) => `<a href="/en-US/tags/${tag}">${tag}</a>`);
}
