// This needs to be a plain JS file because it's used in a node context as
// well.
exports.formatPath = path => {
  // Generate page paths based on their location in the filesystem
  return path
    .replace(/.*\/src\/pages/, "") // Use path from /src/pages onwards
    .replace(/\.mdx?$/, "") // strip extension
    .replace(/\/index$/, "") // strip "index" for textbundle-types
    .replace(/(\d{2,4})-(\d{2})-(\d{2})-/, "$1/$2/$3/") // format date
}
