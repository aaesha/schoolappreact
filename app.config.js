// app.config.js
export default {
    expo: {
      name: "شرعية عين منين",
      slug: "school_app",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      android: {
        package: "com.yourcompany.yourapp",
        versionCode: 1,
        permissions: []
      },
      ios: {
        bundleIdentifier: "com.yourcompany.yourapp",
        buildNumber: "1.0.0"
      },
      web: {
        favicon: "./assets/favicon.png"
      },
      extra: {
        eas: {
          projectId: "f5ca397a-b5c8-40e9-96d0-6f1dba85b062"
        }
      }
    }
  };
  