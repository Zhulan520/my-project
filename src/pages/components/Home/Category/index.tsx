import { Icon, View, Text } from "@tarojs/components"
import styles from './index.module.scss'
import { CategoryText } from "./constants"

const Category = () => {

  return (
    <View className={styles.categoryFlex}>
      {
        CategoryText.map((item, index) => {
          return (
            <View className={styles.categoryItem} key={index}>
              <Icon size={40} type='success' color='#379DD5' />
              <Text className={styles.text} >{item}</Text>
            </View>
          )
        })
      }

    </View>
  )
}

export default Category