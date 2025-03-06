import { View, Text, Image } from "@tarojs/components"
import styles from './index.module.scss'
import { AudioBooks } from "./constants";

const AudioBook = () => {

  return (
    <View >
      <View className={styles.title}  >
        <Text className={styles.text}>有声小说</Text> <Text className={styles.view}>{"查看全部 >"}</Text>
      </View>
      <View >
        {AudioBooks.map((item, index) => (
          <View key={index} className={styles.audioBookItem}>
            <View className={styles.imageView}><Image style={{ width: 110, height: 110, borderRadius: 20 }} src={item.url} mode='scaleToFill' /></View>
            <View className={styles.audioBookInfo} >
              <View> <View className={styles.title} >{item.title}</View></View>
              <View className={styles.subtitle} >{item.subtitle}</View>
              <View className={styles.info} >
                <Text className={styles.plays}>{item.plays}</Text>
                <Text className={styles.comments}>{item.comments}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default AudioBook