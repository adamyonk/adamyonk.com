module.exports = {
  trailingComma: "all",
  semi: false,
  overrides: [
    {
      files: ".{prettier,babel}rc",
      options: { parser: "json" },
    },
  ],
}
