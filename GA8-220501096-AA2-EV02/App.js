import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //credenciales de ingreso
    if (username === 'jason.galvis' && password === 'j_017@') {
      //Si el Usuario y Contraseña son Correctos, muestra el alert
      Alert.alert(
        'Inicio de sesión exitoso',
        'GA8- 220501096-AA2- EV02\n\n' +
        'APK (desarrollar módulos móvil según requerimientos del proyecto).\n\n' +
        'Aprendiz: Jason Galvis Camargo\n\n' +
        'Instructor: Ramiro Andrade Polanco.\n\n' +
        'Tecnólogo en Análisis y Desarrollo de Software\n\n' +
        'Ficha: 2627092\n' +
        'Año: 2024',
        [{ text: 'Aceptar', style: 'cancel' }]
      );
      //Si el usuario y/o contraseña no son correctos mostrar alert de error
    } else {
      Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
    }
  };
//Body Pantalla Principal
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('./img/Logo_2.png')} style={styles.imagen} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>SISTEMA DE GESTIÓN DE PERMISOS DE TRABAJO SEGURO EN ALTURAS</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const customBlue = '#6EB5FF'; //color azul claro
const darkBlue = '#1E2A4A'; // color a azul oscuro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: customBlue,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'white',
    fontSize: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imagen: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: darkBlue, // Cambio de color a azul oscuro
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default App;
