import React, { useCallback } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// Assets
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  // Functions
  const handleNavigateTeach = useCallback(() => {
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
        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleNavigateTeach}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Ensinar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas <Image source={heartIcon} />.
      </Text>
    </View>
  );
}

export default Landing;
