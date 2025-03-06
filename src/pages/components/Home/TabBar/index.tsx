import { Icon, View, Text } from "@tarojs/components"
import { useState } from "react"
import styles from './index.module.scss'
import { TabBarCategory } from "./constants"


const TabBar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <View className={styles.categoryFlex}>
      {
        TabBarCategory.map((item, index) => {
          return (
            <View className={styles.categoryItem} key={index} onClick={() => setActiveIndex(index)}>
              <Icon size={30} type='info_circle' color={activeIndex === index ? '#F94F27' : '#C5C5C5'} />
              <Text className={styles.text} style={{ color: activeIndex === index ? '#F94F27' : '#C5C5C5' }}>{item}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default TabBar