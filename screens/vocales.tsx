import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, ImageBase } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import html from './components/canvas';
import styles from './Styles/vocales';

  const AbecedarioScreen = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const navigation = useNavigation();
  const webviewRef = useRef(null);
  const abecedarioData = [
  { 
    letter: 'A a', 
    images: [
      require('../img/letra_a.jpg'),
      require('../img/letra_a.jpg'),
      // Agrega más imágenes para la letra 'A' aquí
    ],
    audio: require('../assets/sound/a.mp3'),
  },
  { 
    letter: 'E e', 
    images: [
      require('../img/letra_e.png'),
      require('../img/letra_e.png'),
      // Agrega más imágenes para la letra 'E' aquí
    ],
    audio: require('../assets/sound/e.mp3'),
  },
  // Repite el mismo patrón para otras letras
  { 
    letter: 'I i', 
    images: [
      require('../img/letra_i.jpg'),
      require('../img/letra_i.jpg'),
      // Agrega más imágenes para la letra 'I' aquí
    ],
    audio: require('../assets/sound/i.mp3'),
  },

  { 
    letter: 'O o', 
    images: [
      require('../img/letra_o.jpg'),
      require('../img/letra_o.jpg'),
      // Agrega más imágenes para la letra 'I' aquí
    ],
    audio: require('../assets/sound/o.mp3'),
  },

  { 
    letter: 'U u', 
    images: [
      require('../img/letra_u.jpg'),
      require('../img/letra_u.jpg'),
      // Agrega más imágenes para la letra 'I' aquí
    ],
    audio: require('../assets/sound/u.mp3'),
  },
  // ...y así sucesivamente para otras letras
];


  const [audioPlaying, setAudioPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(new Audio.Sound());

  useEffect(() => {
    return () => {
      soundObject.unloadAsync(); // Descargar el audio al desmontar
    };
  }, []);

  const playAudio = async () => {
    try {
      if (audioPlaying) {
        await soundObject.stopAsync();
      }
      await soundObject.unloadAsync();
      await soundObject.loadAsync(currentLetter.audio);
      await soundObject.playAsync();
      setAudioPlaying(true);
      soundObject.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setAudioPlaying(false);
        }
      });
    } catch (error) {
      console.error('Error al reproducir el audio:', error);
    }
  };

   const regresar = () => {

    navigation.navigate('Button1Screen');
    
   }

  const handleNextLetter = () => {
    if (currentLetterIndex < abecedarioData.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    } else {
      setLessonCompleted(true); // Marcar la lección como completada
    }

    if (webviewRef.current) {
      webviewRef.current.reload();
    }
  };

  const currentLetter = abecedarioData[currentLetterIndex];
  const data = currentLetter.letter;
  const htmlContent = html({data})

  return (
    <ScrollView style={styles.container}>
      <View style={styles.letterContainer}>
        <Text style={styles.letter}>{currentLetter.letter}</Text>
        <Image source={currentLetter.images[0]} style={styles.image} />
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.audioButton]}
          onPress={playAudio}
          disabled={audioPlaying}
        >
          <FontAwesome name="volume-up" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.webviewContainer}>
        <ImageBackground
            source={require('../img/letras.png')}
            style={styles.imageBackground}
        >
            <WebView
            ref={webviewRef} 
            source={{ html: htmlContent }}
            style={styles.webview}
            />
        </ImageBackground>
        </View>

       
  <View style={styles.nextButton}>
  {lessonCompleted ? (
    <TouchableOpacity
      style={[styles.button, styles.audioButton]}
      onPress={() => {
        regresar()
        }}
    >
      <FontAwesome name="check-circle" size={32} color="white" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.button, styles.audioButton]}
      onPress={handleNextLetter}
    >
      <FontAwesome name="arrow-right" size={32} color="white" />
    </TouchableOpacity>
  )}
</View>
     
    </ScrollView>
  );
};



export default AbecedarioScreen;
