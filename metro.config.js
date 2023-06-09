/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

const defaultAssetExts =
  require("metro-config/src/defaults/defaults").assetExts;
const defaultSourceExts =
  require("metro-config/src/defaults/defaults").sourceExts;

module.exports = makeMetroConfig({
  projectRoot: __dirname,
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
    assetExts: defaultAssetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...defaultSourceExts, "svg"],
  },
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
});
