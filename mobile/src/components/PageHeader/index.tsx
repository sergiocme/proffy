import React, { useCallback, ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';

// Assets
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  rightComponent?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, rightComponent, children}) => {
  const { navigate } = useNavigation();

  // Functions
  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {rightComponent}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;
