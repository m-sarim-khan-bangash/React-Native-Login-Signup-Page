import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

const Login = props => {
  return (
    <View style={styles.view}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          color: '#fff',
          marginBottom: 10,
        }}>
        Login Here
      </Text>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: 'http://www.wrnrtv.com/wp-content/uploads/2017/05/male.png',
          }}
        />
      </View>
      <TextInput style={styles.input} placeholder="Enter Username" />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
      />
      <Text style={styles.forgetPassword}>Forgot Password?</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert('User Login Successfully!')}>
        <Text style={{color: '#000'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{color: '#fff', marginTop: 10}}>Dont have an account? </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
        <Text style={{color: '#ddd', marginTop: 10}}>Signup Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#192a56',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '60%',
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  forgetPassword: {
    color: '#ccc',
    marginTop: 10,
    marginLeft: 110,
  },
  logo: {
    height: 120,
    width: 120,
  },
});

export default Login;
