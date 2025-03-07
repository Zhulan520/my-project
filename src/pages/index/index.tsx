import { FC, useState } from 'react';
import {
  View,
  ScrollView,
} from '@tarojs/components';
import styles from './index.module.scss';
import Header from '../components/Home/Header';
import ImageSwiper from '../components/Home/Swiper/ index';
import Category from '../components/Home/Category';
import Recommend from '../components/Home/Recommend';
import AudioBook from '../components/Home/AudioBook';
import TabBar from '../components/Home/TabBar';


const Index: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <ScrollView scrollY>
      <View className={styles.viewBody}>
        {/* 头部 */}
        <Header onSearch={setSearchValue} />
        {/* 轮播图 */}
        <ImageSwiper />
        {/* 分类 */}
        <Category />
        {/* 推荐 */}
        <Recommend />
        {/*有声小说*/}
        <AudioBook />
        {/* 底部 */}
        <TabBar />
      </View>
    </ScrollView>

  );
};

export default Index;
