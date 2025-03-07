export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  permission: {
    "scope.userInfo": {
      desc: "需要您的个人信息以完善体验" // 必填描述
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
})
