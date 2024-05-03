import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Innlogging var vellykket
        console.log('Logged in with:', userCredential.user);
        navigation.navigate('Home'); // Naviger til Home-skjerm etter vellykket innlogging
      })
      .catch((error) => {
        // Håndter feil ved innlogging
        console.error('Login error:', error);
        Alert.alert('Login failed', error.message);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registreringen var vellykket
        console.log('User registered with:', userCredential.user);
        navigation.navigate('Home'); // Naviger til Home-skjerm etter vellykket registrering
      })
      .catch((error) => {
        // Håndter feil ved registrering
        console.error('Registration error:', error);
        Alert.alert('Registration failed', error.message);
      });
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.heading}>Hello Again!</Text>
      <Text>Sign in to your account</Text>

      <TextInput
        style={loginStyles.input}
        placeholder="Enter your school Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={loginStyles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={loginStyles.forgotPassword}>Forgot your password?</Text>

      <TouchableOpacity
        style={loginStyles.button}
        onPress={handleSignIn}
      >
        <Text style={loginStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[loginStyles.button, { backgroundColor: 'blue' }]} // En annen farge for registreringsknappen
        onPress={handleSignUp}
      >
        <Text style={loginStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    marginTop: 30,
    width: 250,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    padding: 10,
  },
  forgotPassword: {
    color: 'green',
    marginTop: 10,
  },
});

export default LoginScreen;
