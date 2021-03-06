import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

// Services
import api from '../../services/api';

// Assets
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  // State
  const [totalConnections, setTotalConnections] = useState(0);

  // Effects
  useEffect(() => {
    api.get('/connections')
      .then(({data}) => setTotalConnections(data.total_connections));
  }, []);

  // Functions
  const handleNavigateToStudy = useCallback(() => {
    navigate('TeacherList');
  }, [navigate]);

  const handleNavigateToTeach = useCallback(() => {
    navigate('Teach');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudy}
          style={[styles.button, styles.primaryButton]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToTeach}
          style={[styles.button, styles.secondaryButton]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Ensinar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas <Image source={heartIcon} />.
      </Text>
    </View>
  );
}

export default Landing;
