import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IMCCalculator from './src/components/Ola/Ola';

export default function App() {
  const [resultadoIMC, setResultadoIMC] = useState<string>('');

  function handleCalculate(result: string) {
    setResultadoIMC(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calcular IMC</Text>
      <IMCCalculator onCalculate={handleCalculate} />
      {resultadoIMC ? <Text style={styles.resultado}>{resultadoIMC}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
  },
});
