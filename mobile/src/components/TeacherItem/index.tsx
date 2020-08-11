import React, { useState, useCallback } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

// Assets
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorite: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorite}) => {
  // State
  const [isFavorite, setIsFavorite] = useState(favorite);

  // Functions
  const handleWhatsappCall = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, [Linking]);

  const handleToogleFavorite = useCallback(async () => {
    let favoriredTeacherList = [];
    const getedItem = await AsyncStorage.getItem('favorites');
    getedItem ? favoriredTeacherList = JSON.parse(getedItem) : null;
    if (isFavorite) {
      const favoriredTeacherListIds = favoriredTeacherList.map((eachTeach: Teacher) => eachTeach.id);
      const teacherIndex = favoriredTeacherListIds.indexOf(teacher.id);
      favoriredTeacherList.splice(teacherIndex, 1);

      await AsyncStorage.setItem('favorites', JSON.stringify(favoriredTeacherList));
      setIsFavorite(false);
    } else {
      favoriredTeacherList.push(teacher);
      await AsyncStorage.setItem('favorites', JSON.stringify(favoriredTeacherList));
      setIsFavorite(true);
    }
  }, [AsyncStorage, isFavorite, teacher]);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: `${teacher.avatar}` }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>{teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToogleFavorite}
            style={[
              styles.favoriteButton,
              isFavorite ? styles.favorited : {},
            ]}
          >
            <Image source={isFavorite ? unfavoriteIcon : heartOutlineIcon} />
          </RectButton>

          <RectButton onPress={handleWhatsappCall} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Chamar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
