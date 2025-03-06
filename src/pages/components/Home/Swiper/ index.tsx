import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import { ImgList } from './constants';
import styles from './index.module.scss';



const ImageSwiper = () => {
  return (
    <Swiper
      indicatorColor='#999'
      indicatorActiveColor='#333'
      circular
      indicatorDots
      autoplay
      style={{
        overflow: 'hidden',
        borderRadius: '10px',
        marginBottom: '10px'
      }}
    >
      {ImgList.map((item, index) => {
        return (
          <SwiperItem key={index}>
            <Image
              src={item}
              style={{ width: '100%', }}
              // 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
              mode='scaleToFill'
            />
          </SwiperItem>
        );
      })}
    </Swiper>
  );
};

export default ImageSwiper;