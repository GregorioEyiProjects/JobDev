const {
  AndroidConfig,
  createRunOncePlugin,
  withAndroidStyles,
} = require("@expo/config-plugins");

const pkg = require("../package.json");

const NAVIGATION_BAR_COLOR = "#0F1117";

function withAndroidNavigationBar(config) {
  return withAndroidStyles(config, (config) => {
    const themeGroup = AndroidConfig.Styles.getAppThemeGroup();
    let styles = config.modResults;

    styles = AndroidConfig.Styles.assignStylesValue(styles, {
      add: true,
      parent: themeGroup,
      name: "android:navigationBarColor",
      value: NAVIGATION_BAR_COLOR,
    });

    styles = AndroidConfig.Styles.assignStylesValue(styles, {
      add: true,
      parent: themeGroup,
      name: "android:windowLightNavigationBar",
      value: "false",
    });

    styles = AndroidConfig.Styles.assignStylesValue(styles, {
      add: true,
      parent: themeGroup,
      name: "android:enforceNavigationBarContrast",
      value: "false",
    });

    config.modResults = styles;
    return config;
  });
}

module.exports = createRunOncePlugin(
  withAndroidNavigationBar,
  pkg.name + "-android-navigation-bar",
  pkg.version,
);
