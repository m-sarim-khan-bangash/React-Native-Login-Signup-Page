import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const image = {
  uri: 'https://iammagnus.com/wp-content/uploads/2016/05/website-design-background-1.jpg',
};

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        alert('User Logged in SuccessFully!!');
        props.navigation.navigate('TabNavigation');
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
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.view}>
            <Text style={styles.loginHeading}>LOG IN</Text>
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: 'http://www.wrnrtv.com/wp-content/uploads/2017/05/male.png',
                }}
              />
            </View>
            <View style={styles.viewText}>
              <Icon name="envelope-o" size={20} color="#f4f4f4" />
              <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#ccc"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.viewText}>
              <Icon name="lock" size={20} color="#f4f4f4" />
              <TextInput
                onChangeText={text => setPassword(text)}
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor="#ccc"
              />
            </View>
            <Text style={styles.forgetPassword}>Forgot Password?</Text>
            <TouchableOpacity style={styles.btn} onPress={Login}>
              <Text style={{color: '#fff'}}>Login</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 14,
              }}>
              <Text
                style={{color: '#fff', fontSize: 12, paddingHorizontal: 10}}>
                Dont have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}>
                <Text
                  style={{
                    color: '#7ed6df',
                    fontSize: 14,
                    paddingHorizontal: 10,
                  }}>
                  Signup Now
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: '#fff', paddingVertical: 12, fontSize: 20}}>
              ___________OR___________
            </Text>
            <TouchableOpacity
              style={styles.btnGoogle}
              onPress={() => props.navigation.navigate('TabNavigation')}>
              <Text style={{color: '#000', fontSize: 17}}>Go To Home Page</Text>
              <Icon name="home" size={25} color="#2d98da" />
              {/* <Image
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 20,
                }}
                source={{
                  uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png',
                }}
              /> */}
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    // backgroundColor: '#192a56',
    // backgroundColor: '#2c3e50',
    flex: 1,
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: 38,
    letterSpacing: 1,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    marginTop: 80,
  },
  btn: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#2d98da',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGoogle: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  forgetPassword: {
    color: '#7ed6df',
    marginTop: 10,
    marginLeft: 110,
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 15,
    marginBottom: 15,
  },
  viewText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '62%',
    marginTop: 12,
  },
});

export default Login;
