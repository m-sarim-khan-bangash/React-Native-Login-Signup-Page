import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Divider, ScrollView, Spinner} from 'native-base';
import NewsCard from './NewsCard';

const Home = props => {
  let api_key = '615cfc2f6afe7c44ec0bd08cf91af49a';
  const [newsData, setNewsData] = useState('');

  useEffect(() => {
    fetch(`http://api.mediastack.com/v1/news?access_key=${api_key}&sources=en`)
      .then(response => response.json())
      .then(({data}) => setNewsData(data));
  }, []);

  return (
    <ScrollView>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        {newsData ? (
          newsData.map((news, index) => {
            return (
              <NewsCard
                key={index}
                title={news.title}
                description={news.description}
                published_at={news.published_at}
                author={news.author}
                category={news.category}
                image={news.image}
              />
            );
          })
        ) : (
          //   <Text style={{fontSize: 25, fontWeight: 'bold', color: '#2c2c54'}}>
          //     Loading
          //   </Text>
          <View style={styles.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
        <Divider style={{marginBottom: 10}} />
        {/* <Text>Home Page</Text> */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.signoutBtn}
            onPress={() =>
              auth()
                .signOut()
                .then(() => props.navigation.navigate('Login Page'))
            }>
            <Text style={{color: '#fff'}}>SignOut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => props.navigation.navigate('Profile')}>
            <Text style={{color: '#fff'}}>Go To Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => props.navigation.navigate('Search')}>
            <Text style={{color: '#fff'}}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signoutBtn: {
    backgroundColor: '#0fb9b1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
    marginRight: 5,
  },
  profileBtn: {
    backgroundColor: '#0fb9b1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
    marginRight: 5,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
  },
});

export default Home;
