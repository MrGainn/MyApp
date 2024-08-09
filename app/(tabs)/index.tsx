
import recentSearches from '@/assets/data.tsx/recentSearches';


import { GlobalStyles } from '@/constants/GlobalStyles';

import { User } from '@/constants/types';

import { AntDesign, Entypo } from '@expo/vector-icons';

import { View, Text } from 'react-native';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';
import SearchListItem from '@/components/searchListItem';
import PopulairProfiles from '@/components/populairProfiles';
import fetchData from '@/assets/data.tsx/fetchData';

export default function SearchScreen() {
  //If undefined, then set the moti
  const [userList, setUserList] = useState<User[] | undefined>([]);

  const [searchText, setSearchText] = useState<string>('');
  
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value / 2 }],
  }));

  const userSearchListPlaceHolder = useMemo(() => {
    return Array.from({ length: 7 }).map((_) => null);
  }, []);

  const fetchSearch = async (query: string) => {
    // Similate http request 
    setTimeout(() => {
      // This code executes after 2000 milliseconds (2 seconds)
          //After succell, set the userList to the new data
          setUserList(fetchData);
    }, 500); 

  };

  useEffect(() => {
    setUserList(recentSearches);
  }, []);

  const handleSearch = (query: string) => {
    setSearchText(query);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    if (query == '') {
      setUserList(recentSearches);
    } else {

      setUserList(undefined);

      debounceTimeoutRef.current = setTimeout(() => {
        fetchSearch(query);
      }, 300);

      console.log("timeout set with id: " + debounceTimeoutRef.current);
    }
  };

  //Everything in ListHeaderComponent can't be in a seperate component, because otherwise the textinput doesnt work.
  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <FlatList
        contentContainerStyle={{ gap: 10, padding: 5 }}
        keyboardShouldPersistTaps="always"
        data={userList ?? userSearchListPlaceHolder}
        renderItem={({ item }) => {
          return <SearchListItem user={item} />;
        }}
        ListHeaderComponent={
          <>
            <Text style={[styles.captionText, GlobalStyles.detailText]}>DISCOVER</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={recentSearches}
              keyboardShouldPersistTaps={'always'}
              renderItem={({ item, index }) => <PopulairProfiles user={item} index={index} />}

            />

            <View style={styles.searchbarView}>
              <View style={styles.searchBarContainer}>
                <TextInput
                  style={styles.searchBar}
                  placeholder={'Search'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={searchText}
                  onChangeText={handleSearch}
                />

                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => handleSearch('')}
                  activeOpacity={0.7}>
                  {searchText !== '' ? (
                      <Entypo name="cross" size={20} color="black" />
                  ) : (
                    <AntDesign name="search1" size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <Text style={[styles.captionText, GlobalStyles.detailText]}>RECENT</Text>
          </>
        }
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  searchbarView: {
    marginVertical: 20,
    marginHorizontal: 5,
  },
  captionText: {
    paddingVertical: 10,
    paddingLeft: 13,
  },
  container: {
    flex: 1,
    marginLeft: 2,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  searchBarContainer: {
    backgroundColor: '#e3e3e3',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    width: '15%',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingVertical: 13,
  },
  searchBar: {
    width: '85%',
    paddingLeft: 16,
    paddingVertical: 14,
    textAlign: 'left',
  },
});

//https://dribbble.com/shots/21205051-Dating-App-Design-Concept
