export default function tagUrl(values) {
  return values.map(tag => `<a href="/tags/${tag}">${tag}</a>`)
}
