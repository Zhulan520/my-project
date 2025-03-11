import { View } from "@tarojs/components";
import { useState } from "react";
import styles from './index.module.scss';

const Collect = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const CollectSort = [
    {
      title: '我的收藏',
    },
    {
      title: '我的已购',
    },
    {
      title: '收听历史',
    },
    {
      title: '我的礼包',
    },
  ]

  return (
    <View>
      <View className={styles.tabBar}>
        {CollectSort.map((item, index) => {
          return (
            <View
              key={item.title}
              className={index === activeIndex ? styles.active : null}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </View>
          )
        })
        }
      </View>
    </View>
  );
}
export default Collect