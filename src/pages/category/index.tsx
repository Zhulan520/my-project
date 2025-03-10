import { View, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import styles from './index.module.less'
import { categories, categoryTree } from './constants'




const Category = () => {

  const [leftIndex, setLeftIndex] = useState(0)
  const [rightScrollTop, setRightScrollTop] = useState(0)





  return (
    <View className={styles.categoryView}>
      {/* 左侧菜单 */}
      <ScrollView
        scrollY
        scrollWithAnimation
        className={styles.leftScrollView}
      >
        {categories.map((item, index) => (
          <View
            key={item}
            onClick={() => {
              setLeftIndex(index)
              setRightScrollTop((index - 2) * 140)
            }}
            className={styles.menuItem}
            style={{ backgroundColor: leftIndex === index ? '#F0F1F3' : '#fff' }}
          >
            {item}
          </View>
        ))}
      </ScrollView>

      {/* 右侧内容 */}
      <ScrollView
        scrollY
        scrollWithAnimation
        className={styles.rightScrollView}
        scrollTop={rightScrollTop}
      >
        {categoryTree.map((item, index) => (
          <View
            key={item.type}
            id={item.type}
            style={{ height: 140 }}
          >
            <View className={styles.categoryTitle} >{item.type}</View>
            <View className={styles.subcategory} >
              {item.subcategories.map(text => (
                <View key={text} className={styles.item} >
                  <View >{text}</View>
                </View>
              ))}
            </View>
          </View>
        ))
        }
      </ScrollView >
    </View >
  )
}

export default Category
