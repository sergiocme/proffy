import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

// Routers
import StackRouter from './src/routers/StackRouter';

// Assets
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

function App() {
  let [loadedFonts] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  return (
    <>
      { loadedFonts ?
        <>
          <StatusBar style="light" />
          <StackRouter />
        </> :
        <AppLoading />
      }
    </>
  );
}

export default App;
