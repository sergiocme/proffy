import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

// Services
import api from '../../services/api';

// Components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

function TeacherList() {
  // State
  const [filtersVisibility, setFiltersVisibility] = useState(false);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState<number[]>([]);

  // Functions
  const loadFavorites = useCallback(async () => {
    let favoriredTeacherList = [];
    const getedItem = await AsyncStorage.getItem('favorites');
    getedItem ? favoriredTeacherList = JSON.parse(getedItem) : null;

    if (favoriredTeacherList.length > 0) {
      setFavoriteTeachers(favoriredTeacherList.map((eachTeach: Teacher) => eachTeach.id));
    }
  }, [AsyncStorage, setFavoriteTeachers]);

  const handleSearchTeachers = useCallback(async () => {
    const { data } = await api.get('/leassons', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    await loadFavorites();
    setFiltersVisibility(false);
    setTeachers(data);
  }, [
    api,
    subject,
    weekDay,
    time,
    setFiltersVisibility,
    setFavoriteTeachers,
    loadFavorites,
    favoriteTeachers,
  ]);

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        rightComponent={(
          <BorderlessButton onPress={() => setFiltersVisibility((state) => !state)}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        { filtersVisibility && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={handleSearchTeachers} style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.length > 0 && teachers.map((teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorite={favoriteTeachers.includes(teacher.id)} />
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
