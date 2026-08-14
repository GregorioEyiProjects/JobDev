const { expo } = require("./app.json");

module.exports = () => ({
  ...expo,
  plugins: [
    "expo-router",
    "./plugins/withAndroidNavigationBar",
    ["expo-splash-screen", {
      backgroundColor: "#208AEF",
      android: {
        image: "./assets/images/splash-icon.png",
        imageWidth: 76,
      },
    }],
    "expo-secure-store",
  ],
});
