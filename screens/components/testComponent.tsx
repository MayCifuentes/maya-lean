import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from '../lenguasMayas/styles';

const ReusableComponent = ({ data, id_user, lengua_id }) => {

  const contenidoCategoria = data;
  const IdUser = id_user;
  const idLengua = lengua_id;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const newQuestions = [];

    const categoriasKeys = Object.keys(contenidoCategoria);

    for (let i = 0; i < 10; i++) {
      const randomCategoria = categoriasKeys[Math.floor(Math.random() * categoriasKeys.length)];
      const options = contenidoCategoria[randomCategoria].map(item => item.traduccion);
      const correctOptionIndex = Math.floor(Math.random() * options.length);
      const question = contenidoCategoria[randomCategoria][correctOptionIndex].nombre;
      const correctAnswer = contenidoCategoria[randomCategoria][correctOptionIndex].traduccion;

      const shuffledOptions = shuffleArray(options);

      newQuestions.push({
        question: question,
        options: shuffledOptions,
        correctAnswer: correctAnswer,
      });
    }

    setQuestions(newQuestions);
    setCurrentIndex(0);
    setCorrectAnswers(0);
    setSelectedOption(null);
  }, []);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);

      // Aquí, al mostrar los resultados, también enviamos la puntuación al servidor
      sendScoreToServer(correctAnswers);
    }
  };

  const sendScoreToServer = async (score) => {
    try {
      const scoreData = {
        userId: IdUser,
        lenguaje: idLengua,
        puntuacion: score,
      };

      const response = await fetch('http://190.151.128.78:3000/api/insertarResultadoQuiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scoreData),
      });

      const result = await response.json();

      if (result.message === 'Resultado del quiz insertado con éxito') {
        console.log('Puntuación enviada con éxito.');
      } else {
        console.error('Error al enviar la puntuación:', result.error);
        // Puedes manejar el error aquí si lo deseas
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Puedes manejar el error aquí si lo deseas
    }
  };

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getResultMessage = (correctAnswers) => {
    if (correctAnswers < 5) {
      return "Sigue estudiando, ¡puedes mejorar!";
    } else if (correctAnswers >= 5 && correctAnswers < 7) {
      return "¡Buen trabajo, puedes mejorar!";
    } else if (correctAnswers >= 7 && correctAnswers < 9) {
      return "¡Excelente! Puedes lograr un puntaje aún mejor.";
    } else {
      return "¡Felicidades! ¡Excelente puntaje!";
    }
  };

  return (
    <View style={styles.container}>
      {showResults ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>¡Test completado!</Text>
          <Text style={styles.resultSummary}>
            Respondiste correctamente a {correctAnswers} de 10 preguntas.
          </Text>
          <Text style={styles.resultMessage}>{getResultMessage(correctAnswers)}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.header}>Selecciona la respuesta Correcta</Text>
          <Text style={styles.progressText}>Pregunta {currentIndex + 1} de 10</Text>
          <Text style={styles.question}>
            {questions.length > 0 ? questions[currentIndex].question : ""}
          </Text>
          {questions.length > 0 &&
            questions[currentIndex].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedOption,
                ]}
                onPress={() => setSelectedOption(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          {selectedOption !== null && (
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleAnswer(selectedOption)}
            >
              <Text style={styles.submitButtonText}>Responder</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default ReusableComponent;
