module.exports = ({ config, mode }) => {
  // Remove rules for default storyboard .inline.svg
  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test.test(".svg")
  );
  fileLoaderRule.exclude = /\.inline.svg$/;

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" }
      }
    ],
    enforce: "pre"
  });
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf)$/,
    loaders: require.resolve("file-loader")
  });
  config.module.rules.push({
    test: /\.inline.svg$/,
    loader: require.resolve("@svgr/webpack")
  });
  return config;
};
