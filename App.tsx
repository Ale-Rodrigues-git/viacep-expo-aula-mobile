import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ViaCepResponse } from './types/via-cep-response';

export default function App() {
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const buscarCep = async () => {
    if (!cep.trim()) {
      setErro('Por favor, digite um CEP');
      return;
    }

    setLoading(true);
    setErro('');
    setCidade('');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: ViaCepResponse = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado');
      } else {
        setCidade(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
      }
    } catch (err) {
      setErro('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.content}>
          <Text style={styles.title}>Buscar CEP</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Digite o CEP..."
            placeholderTextColor="#918e8e"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
            keyboardAppearance="dark"
            returnKeyType="done"
            onSubmitEditing={buscarCep}
            maxLength={8}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={buscarCep}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Buscando...' : 'Buscar'}
            </Text>
          </TouchableOpacity>

          {erro && <Text style={styles.erro}>{erro}</Text>}
          {cidade && <Text style={styles.resultado}>{cidade}</Text>}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2680df',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    backgroundColor: '#9ee4aa',
    padding: 15,
    borderRadius: 8,
    color: '#155724',
    fontSize: 14,
    marginTop: 10,
  },
  erro: {
    backgroundColor: '#f8d7da',
    padding: 15,
    borderRadius: 8,
    color: '#721c24',
    fontSize: 14,
    marginTop: 10,
  },
});
