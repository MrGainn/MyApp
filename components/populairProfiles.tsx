import { Image, Pressable, StyleSheet } from 'react-native';

import { User } from '@/constants/types';

import { View, Text } from 'react-native';
import { GlobalStyles } from '@/constants/GlobalStyles';

import {memo} from 'react';

export const defaultExerciseImage = '';

const profilePicture = 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg';

type SearchListItemProps = {
  user: User;
  index: number;
};

const handlePress = () => {};

const PopulairProfiles = ({ user, index }: SearchListItemProps) => {

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: profilePicture }} style={styles.image} />
      <Text style={GlobalStyles.primaryFeedText}>{user.username}</Text>
      <Text style={GlobalStyles.detailText}>405</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default memo(PopulairProfiles);