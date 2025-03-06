import { FC, InputHTMLAttributes } from 'react';
import { View, Input, Button } from '@tarojs/components';
import styles from './index.module.scss';

interface HeaderProps {
  onSearch: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
  return (
    <View className={styles.headerView}>
      <Input
        placeholder='搜索你想听的节目'
        className={styles.input}
      />
    </View>
  );
};

export default Header;
