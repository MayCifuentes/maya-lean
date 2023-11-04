import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppScreen = () => {
  const navigation = useNavigation();
  const [buttonsEnabled, setButtonsEnabled] = useState(false);
  const audioPath = require('../assets/sound/bienvenida.mp3'); // Ruta audo aprender a leer
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const playSound = async () => {
    try {
      if (sound) {
        await sound.replayAsync();
      } else {
        const { sound } = await Audio.Sound.createAsync(audioPath);
        setSound(sound);
        await sound.playAsync();
      }
    } catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  };

  const handleBocinaPress = () => {
    setButtonsEnabled(true);
    playSound();
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText, { fontSize: windowWidth > 600 ? 36 : 28 }]}>Bienvenido a Maya Learn</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.paypalButton]}
        onPress={handleBocinaPress}
      >
        <FontAwesome name="volume-up" size={windowWidth > 600 ? 48 : 32} color="white" />
      </TouchableOpacity>

      <View style={styles.imageButtonContainer}>
        <TouchableOpacity
          style={[
            styles.imageButton,
            buttonsEnabled && styles.enabledButton,
            { marginVertical: windowWidth > 600 ? 30 : 20 }, // Ajusta el margen vertical
          ]}
          onPress={() => navigation.navigate('Button1Screen')}
          disabled={!buttonsEnabled}
        >
          <Image source={require('../img/letras.png')} style={styles.image} />
          <Text style={[styles.imageButtonText, { fontSize: windowWidth > 600 ? 24 : 18 }]}>Aprender a leer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.imageButton,
            buttonsEnabled && styles.enabledButton,
            { marginVertical: windowWidth > 600 ? 30 : 20 }, // Ajusta el margen vertical
          ]}
          onPress={() => navigation.navigate('Login')}
          disabled={!buttonsEnabled}
        >
          <Image source={require('../img/lenguas-mayas.png')} style={styles.image} />
          <Text style={[styles.imageButtonText, { fontSize: windowWidth > 600 ? 24 : 18 }]}>Aprende Lenguas Mayas</Text>
        </TouchableOpacity>
      </View>

      {/* Otros elementos si los tienes */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 5,
    alignSelf: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowWidth > 600 ? 30 : 20, // Ajusta el espacio vertical
    paddingHorizontal: windowWidth > 600 ? 60 : 20, // Ajusta el espacio horizontal
    borderRadius: windowWidth > 600 ? 100 : 50, // Aumenta el radio de borde para tablets
    elevation: 5,
  },
  paypalButton: {
    backgroundColor: '#0070BA',
  },
  imageButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: windowWidth > 600 ? 60 : 30, // Ajusta el margen superior
  },
  imageButton: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth > 600 ? 200 : 150, // Ajusta el tamaño de la imagen
    height: windowWidth > 600 ? 200 : 150, // Ajusta el tamaño de la imagen
    resizeMode: 'contain',
  },
  enabledButton: {
    opacity: 1,
  },
  imageButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppScreen;
