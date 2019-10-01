exports.formatPath = path => {
  // Generate page paths based on their location in the filesystem
  return path
    .replace(/.*\/src\/pages/, "") // Use path from /src/pages onwards
    .replace(/\.md$/, "") // strip extension
    .replace(/\/index$/, "") // strip "index" for textbundle-types
    .replace(/\d\d(\d\d)?-\d\d-\d\d-/, "") // strip date
}
