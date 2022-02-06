module.exports = {
  components: {
    categories: [
      {
        name: "Buttons",
        include: ["src/components/Button/Button.js"],
      },
      {
        name: "Typography",
        include: ["src/components/Text/Text.js"],
      },
      {
        name: "Data Display",
        include: ["src/components/Avatar/Avatar.js"],
      },
      {
        name: "Layout",
        include: [
          // "src/components/View/View.js",
          // "src/components/Container/Container.js",
          // "src/components/Grid/Grid.js",
          "src/components/Group/Group.js",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "co-design-uxpin",
};
