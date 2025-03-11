export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/category/index',
    'pages/collect/index'
  ],
  permission: {
    "scope.userInfo": {
      desc: "需要您的个人信息以完善体验" // 必填描述
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '喜马拉雅',
    navigationBarTextStyle: 'black'
  },
})
