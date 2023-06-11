export default defineAppConfig({
  pages: ["pages/index/index", "pages/thread-detail/index"],
  tabBar: {
    list: [
      {
        iconPath: "assets/images/篮球计分器-grey.png",
        selectedIconPath: "assets/images/篮球计分器.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "assets/images/篮球计分器-grey.png",
        selectedIconPath: "assets/images/篮球计分器.png",
        pagePath: "pages/thread-detail/index",
        text: "详情",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
