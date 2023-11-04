import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/vocales';
import html from './components/canvas';

const AbecedarioScreen = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const navigation = useNavigation();
  const webviewRef = useRef(null);

  const abecedarioData = [
    { letter: 'A a', image: require('../img/letra_a.jpg'), audio: require('../assets/sound/a.mp3'), description: 'Ejemplo de descripción para la letra A.' },
    { letter: 'B b', image: require('../img/letra_b.jpg'), audio: require('../assets/sound/b.mp3'), description: 'Ejemplo de descripción para la letra B.' },
    { letter: 'C c', image: require('../img/letra_c.jpg'), audio: require('../assets/sound/c.mp3'), description: 'Ejemplo de descripción para la letra C.' },
    { letter: 'D d', image: require('../img/letra_d.jpg'), audio: require('../assets/sound/d.mp3'), description: 'Ejemplo de descripción para la letra D.' },
    { letter: 'E e', image: require('../img/letra_e.png'), audio: require('../assets/sound/e.mp3'), description: 'Ejemplo de descripción para la letra E.' },
    { letter: 'F f', image: require('../img/letra_f.jpg'), audio: require('../assets/sound/f.mp3'), description: 'Ejemplo de descripción para la letra F.' },
    { letter: 'G g', image: require('../img/letra_g.jpg'), audio: require('../assets/sound/g.mp3'), description: 'Ejemplo de descripción para la letra G.' },
    { letter: 'H h', image: require('../img/letra_h.jpg'), audio: require('../assets/sound/h.mp3'), description: 'Ejemplo de descripción para la letra H.' },
    { letter: 'I i', image: require('../img/letra_i.jpg'), audio: require('../assets/sound/i.mp3'), description: 'Ejemplo de descripción para la letra I.' },
    { letter: 'J j', image: require('../img/letra_j.jpg'), audio: require('../assets/sound/j.mp3'), description: 'Ejemplo de descripción para la letra J.' },
    { letter: 'K k', image: require('../img/letra_k.jpg'), audio: require('../assets/sound/k.mp3'), description: 'Ejemplo de descripción para la letra K.' },
    { letter: 'L l', image: require('../img/letra_l.jpg'), audio: require('../assets/sound/l.mp3'), description: 'Ejemplo de descripción para la letra L.' },
    { letter: 'M m', image: require('../img/letra_m.jpg'), audio: require('../assets/sound/m.mp3'), description: 'Ejemplo de descripción para la letra M.' },
    { letter: 'N n', image: require('../img/letra_n.jpg'), audio: require('../assets/sound/n.mp3'), description: 'Ejemplo de descripción para la letra N.' },
    { letter: 'Ñ ñ', image: require('../img/letra_ñ.jpg'), audio: require('../assets/sound/ñ.mp3'), description: 'Ejemplo de descripción para la letra Ñ.' },
    { letter: 'O o', image: require('../img/letra_o.jpg'), audio: require('../assets/sound/o.mp3'), description: 'Ejemplo de descripción para la letra O.' },
    { letter: 'P p', image: require('../img/letra_p.jpg'), audio: require('../assets/sound/p.mp3'), description: 'Ejemplo de descripción para la letra P.' },
    { letter: 'Q q', image: require('../img/letra_q.jpg'), audio: require('../assets/sound/q.mp3'), description: 'Ejemplo de descripción para la letra Q.' },
    { letter: 'R r', image: require('../img/letra_r.jpg'), audio: require('../assets/sound/r.mp3'), description: 'Ejemplo de descripción para la letra R.' },
    { letter: 'S s', image: require('../img/letra_s.jpg'), audio: require('../assets/sound/s.mp3'), description: 'Ejemplo de descripción para la letra S.' },
    { letter: 'T t', image: require('../img/letra_t.jpg'), audio: require('../assets/sound/t.mp3'), description: 'Ejemplo de descripción para la letra T.' },
    { letter: 'U u', image: require('../img/letra_u.jpg'), audio: require('../assets/sound/u.mp3'), description: 'Ejemplo de descripción para la letra U.' },
    { letter: 'V v', image: require('../img/letra_v.jpg'), audio: require('../assets/sound/v.mp3'), description: 'Ejemplo de descripción para la letra V.' },
    { letter: 'W w', image: require('../img/letra_w.jpg'), audio: require('../assets/sound/w.mp3'), description: 'Ejemplo de descripción para la letra W.' },
    { letter: 'X x', image: require('../img/letra_x.jpg'), audio: require('../assets/sound/x.mp3'), description: 'Ejemplo de descripción para la letra X.' },
    { letter: 'Y y', image: require('../img/letra_y.jpg'), audio: require('../assets/sound/y.mp3'), description: 'Ejemplo de descripción para la letra Y.' },
    { letter: 'Z z', image: require('../img/letra_z.jpg'), audio: require('../assets/sound/z.mp3'), description: 'Ejemplo de descripción para la letra Z.' },
    // ... Resto de las letras
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
      webviewRef.current.reload(); // Esto recargará el WebView
    }
  };

  const currentLetter = abecedarioData[currentLetterIndex];
  const data = currentLetter.letter;
  const htmlContent = html({data})
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.letterContainer}>
        <Text style={styles.letter}>{currentLetter.letter}</Text>
        <Image source={currentLetter.image} style={styles.image} />
        <Text style={styles.description}>{currentLetter.description}</Text>
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


