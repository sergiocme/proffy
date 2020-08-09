import React, { useCallback } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

// Assets
import giveClassesBackgroungImage from '../../assets/images/give-classes-background.png';

function Teach() {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBackgroungImage}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleGoBack} style={styles.okayButton}>
        <Text style={styles.okayButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default Teach;
