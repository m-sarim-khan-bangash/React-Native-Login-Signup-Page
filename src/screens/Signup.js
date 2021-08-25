import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.view}>
        <View style={styles.header}>
          <View>
            <Icon name="arrow-circle-left" size={30} color="#2980b9" />
          </View>
          <View>
            <Text style={styles.heading}>Signup Page</Text>
          </View>
          <View>
            <Icon name="bell" size={30} color="#2980b9" />
          </View>
        </View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            color: '#fff',
            marginBottom: 10,
            marginTop: 50,
          }}>
          SignUp Here
        </Text>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: 'http://www.wrnrtv.com/wp-content/uploads/2017/05/male.png',
            }}
          />
        </View>
        <TextInput
          onChangeText={text => console.log(text)}
          style={styles.input}
          placeholder="Enter Username"
        />
        <TextInput
          onChangeText={text => setEmail(text)}
          keyboardType={'email-address'}
          style={styles.input}
          placeholder="Enter Email"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />

        <Text style={styles.forgetPassword}>Forgot Password?</Text>
        <TouchableOpacity style={styles.btn} onPress={register}>
          <Text style={{color: '#000'}}>SignUp</Text>
        </TouchableOpacity>
        <Text style={{color: '#fff', marginTop: 10}}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login Page')}>
          <Text style={{color: '#ddd', marginTop: 10}}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#192a56',
    flex: 1,
    // paddingTop: 100,
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
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
  },
});

export default Signup;
