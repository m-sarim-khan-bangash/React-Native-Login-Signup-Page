import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Spinner} from 'native-base';
import NewsCard from './NewsCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const [newsData, setNewsData] = useState('');
  let api_key = '615cfc2f6afe7c44ec0bd08cf91af49a';
  useEffect(() => {
    fetch(
      `http://api.mediastack.com/v1/news?access_key=${api_key}&keywords=${search}&sources=en`,
    )
      .then(response => response.json())
      .then(({data}) => setNewsData(data));
  }, [search]);
  return (
    <ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          placeholder="Search Here..."
          placeholderTextColor="#333"
          onChangeText={text => setSearch(text)}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#333',
            width: '80%',
            color: '#333',
          }}
        />
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
          <View style={styles.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
});

export default Search;
