import Taro from "@tarojs/taro";

// 封装改进后的用户信息获取函数
export async function getUserInfo(): Promise<Taro.getUserInfo.SuccessCallbackResult | null> {
  try {
    // ① 请求用户授权
    const authResult = await Taro.authorize({
      scope: 'scope.userInfo',
    });

    if (!authResult) {
      console.error('用户拒绝授权');
      return null;
    }

    // ② 授权成功后获取用户信息
    const userInfo = await Taro.getUserInfo({
      withCredentials: false, // 不需要携带凭证
    });

    return userInfo;
    
  } catch (error) {
    console.error('获取用户信息失败', error);
    throw error;
  }
}
