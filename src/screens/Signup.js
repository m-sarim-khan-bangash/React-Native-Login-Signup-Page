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
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.view}>
            {/* <View style={styles.header}>
          <View>
            <Icon name="arrow-circle-left" size={30} color="#2980b9" />
          </View>
          <View>
            <Text style={styles.heading}>Signup Page</Text>
          </View>
          <View>
            <Icon name="bell" size={25} color="#2980b9" />
          </View>
        </View> */}
            <Text style={styles.signupHeading}>SignUp Here</Text>
            <View>
              <Image
                style={styles.logo}
                source={{
                  uri: 'http://www.wrnrtv.com/wp-content/uploads/2017/05/male.png',
                }}
              />
            </View>
            <View style={styles.viewText}>
              <Icon name="user" size={20} color="#f4f4f4" />
              <TextInput
                onChangeText={text => console.log(text)}
                style={styles.input}
                placeholder="Enter Username"
                placeholderTextColor="#ccc"
              />
            </View>

            <View style={styles.viewText}>
              <Icon name="envelope-o" size={20} color="#f4f4f4" />
              <TextInput
                onChangeText={text => console.log(text)}
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#ccc"
              />
            </View>

            <View style={styles.viewText}>
              <Icon name="lock" size={20} color="#f4f4f4" />
              <TextInput
                onChangeText={text => console.log(text)}
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor="#ccc"
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={register}>
              <Text style={{color: '#000'}}>SignUp</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 14,
              }}>
              <Text
                style={{color: '#fff', fontSize: 12, paddingHorizontal: 10}}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login Page')}>
                <Text
                  style={{
                    color: '#7ed6df',
                    fontSize: 14,
                    paddingHorizontal: 10,
                  }}>
                  Login Here
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: '#fff', paddingVertical: 12, fontSize: 20}}>
              ___________OR___________
            </Text>
            <TouchableOpacity style={styles.btnGoogle}>
              <Text style={{color: '#fff', fontSize: 17}}>
                Signup With Google
              </Text>
              <Icon name="google" size={25} color="#f4f4f4" />
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
    flex: 1,
    alignItems: 'center',
  },
  signupHeading: {
    fontSize: 38,
    letterSpacing: 1,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    marginTop: 60,
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
  btnGoogle: {
    width: '62%',
    borderRadius: 2,
    marginTop: 10,
    backgroundColor: '#e74c3c',
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
  viewText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '60%',
    marginTop: 12,
  },
});

export default Signup;


