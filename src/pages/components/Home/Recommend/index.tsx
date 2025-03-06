import { View, Text, Image } from "@tarojs/components"
import styles from './index.module.scss'
import { DetailList } from "./constants";

const Recommend = () => {

  return (
    <View style={{ marginBottom: 20 }}>
      <View className={styles.title}  >
        <Text className={styles.text}>猜你喜欢</Text> <Text className={styles.view}>{"查看全部 >"}</Text>
      </View>
      <View className={styles.detail} >
        {
          DetailList.map((item, index) => {
            return (
              <View key={index} >
                <View className={styles.detailItem} >
                  <Image style={{ width: 110, height: 110 }} src={item.url} mode='scaleToFill' />
                  <Text className={styles.text} >
                    {item.count}
                  </Text>
                </View>
                <Text className={styles.intro}  >
                  {item.title}
                </Text>
              </View>

            );
          })
        }
      </View>
    </View>
  )
}

export default Recommend