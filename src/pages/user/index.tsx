import { useEffect, useState } from 'react'
import { View, Text, Image, Icon, Switch } from '@tarojs/components'
import { getUserInfo } from './utils'
import styles from './index.module.less'



const User = () => {

  const [userInfo, setUserInfo] = useState<any>()

  const fetchUserInfo = async () => {
    const info = await getUserInfo();
    console.log(info, 'info')
    setUserInfo(info && info.userInfo as any)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <View className={styles.outSideView} >
      <View className={styles.top}>
        <View className={styles.titleView} >
          <View className={styles.imageView}>
            <Image
              src='https://img0.baidu.com/it/u=1578711234,1402851523&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
              className={styles.image}
              style={{ width: 50, height: 50, borderRadius: 25 }}
              mode='scaleToFill'
            />
            <Text>蜡笔小新</Text>
          </View>
          <View className={styles.customer} >客服服务</View>
        </View>
        <View className={styles.sign}>
          <View className={styles.icon}>
            <Icon size={15} type='info' color='#ccc' />
            <Text style={{ marginLeft: 10 }}>签到</Text>
          </View>
          <View style={{ color: '#ccc' }}>{'>'}</View>
        </View>
      </View>
      <View className={styles.filedList}>
        {/* 定时关闭 */}
        <View className={styles.listItem}>
          <View className={styles.icon}>
            <Icon size={15} type='waiting' color='#ccc' />
            <Text className={styles.text}>定时关闭</Text>
          </View>
          <View style={{ color: '#ccc' }}>{'>'}</View>
        </View>
        {/* 夜间模式 */}
        <View className={styles.listItem}>
          <View className={styles.icon}>
            <Icon size={15} type='success' color='#ccc' />
            <Text className={styles.text}>夜间模式</Text>
          </View>
          <View style={{ color: '#ccc' }}><Switch /></View>
        </View>
        {/* 意见反馈 */}
        <View className={styles.listItem}>
          <View className={styles.icon}>
            <Icon size={15} type='warn' color='#ccc' />
            <Text className={styles.text}>意见反馈</Text>
          </View>
          <View style={{ color: '#ccc' }}>{'>'}</View>
        </View>
        {/* 切换账号 */}
        <View className={styles.listItem}>
          <View className={styles.icon}>
            <Icon size={15} type='info' color='#ccc' />
            <Text className={styles.text}>切换账号</Text>
          </View>
          <View style={{ color: '#ccc' }}>{'>'}</View>
        </View>
      </View>
    </View>
  )
}

export default User
