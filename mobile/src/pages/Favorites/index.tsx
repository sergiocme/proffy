import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';

// Components
import PageHeader from '../../components/PageHeader';
import TeacherItem  from '../../components/TeacherItem';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

function Favorites() {
  // State
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>([]);

  // Functions
  const loadFavorites = useCallback(async () => {
    let favoriredTeacherList = [];
    const getedItem = await AsyncStorage.getItem('favorites');
    getedItem ? favoriredTeacherList = JSON.parse(getedItem) : null;

    if (favoriredTeacherList.length > 0) {
      setFavoriteTeachers(favoriredTeacherList);
    }
  }, [AsyncStorage, setFavoriteTeachers]);

  // Effects
  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favoriteTeachers.length > 0 && favoriteTeachers.map((teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorite />
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
