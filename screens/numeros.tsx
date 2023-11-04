import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/numbers';
import html from './components/canvas';

const AbecedarioScreen = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const navigation = useNavigation();
  const webviewRef = useRef(null);
  const abecedarioData = [
    { letter: '0', image: require('../img/letra_a.jpg'), audio: require('../assets/sound/0.mp3') },
    { letter: '1', image: require('../img/letra_e.png'), audio: require('../assets/sound/1.mp3') },
    { letter: '2', image: require('../img/letra_i.jpg'), audio: require('../assets/sound/2.mp3') },
    { letter: '3', image: require('../img/letra_o.jpg'), audio: require('../assets/sound/3.mp3') },
    { letter: '4', image: require('../img/letra_u.jpg'), audio: require('../assets/sound/4.mp3') },
    { letter: '5', image: require('../img/letra_a.jpg'), audio: require('../assets/sound/5.mp3') },
    { letter: '6', image: require('../img/letra_e.png'), audio: require('../assets/sound/6.mp3') },
    { letter: '7', image: require('../img/letra_i.jpg'), audio: require('../assets/sound/7.mp3') },
    { letter: '8', image: require('../img/letra_o.jpg'), audio: require('../assets/sound/8.mp3') },
    { letter: '9', image: require('../img/letra_u.jpg'), audio: require('../assets/sound/9.mp3') }
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
    if (currentLetterIndex < abecedarioData.length - 1){
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
  const htmlContent = html({data});

  return (
    <ScrollView style={styles.container}>
      <View style={styles.letterContainer}>
        <Text style={styles.letter}>{currentLetter.letter}</Text>
        <Image source={currentLetter.image} style={styles.image} />
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
