import { Image, Pressable, StyleSheet } from 'react-native';
import { GlobalStyles } from '@/constants/GlobalStyles';

import { User } from '@/constants/types';
import { Skeleton } from 'moti/skeleton';
import Animated, { FadeIn, LinearTransition } from 'react-native-reanimated';
import { View, Text } from 'react-native';
import { memo } from 'react';

export const defaultExerciseImage = '';

const profilePicture = 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg';

type SearchListItemProps = {
  user?: User | null;
};

const SkeletonCommonProps = {
  colorMode: 'light',
  transition: {
    type: 'timing',
    duration: 1500,
  },
  backgroundColor: '#D4D4D4',
} as const;

const handlePress = () => {};

const SearchListItem = ({ user }: SearchListItemProps) => {
  console.log("rerendering")
  return (
    <Pressable onPress={handlePress} style={[styles.container, GlobalStyles.seperatorTop]}>
      <Skeleton.Group show={user == null}>
        <Skeleton height={50} width={50} radius={'round'} {...SkeletonCommonProps}>
          {user && (
               <Image source={{ uri: profilePicture }} style={styles.image} />
          )}
        </Skeleton>
        <View style={styles.rowPutter}>
          <View style={styles.colPutter}>
            <Skeleton height={30} width={'80%'} {...SkeletonCommonProps}>
              {user && (
                <Text style={GlobalStyles.primaryFeedText}>{user.username}</Text>
              )}
            </Skeleton>
            <Skeleton height={30} width={'80%'} {...SkeletonCommonProps}>
              {user && (
                <Text style={GlobalStyles.detailText}>{user.username}</Text>
              )}
            </Skeleton>
          </View>

          <Text style={GlobalStyles.detailText}>Timon</Text>
        </View>
      </Skeleton.Group>
    </Pressable>
  );
};

export default memo(SearchListItem);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  recentCaptions: {
    borderRadius: 10,
    flexDirection: 'row',
  },
  rowPutter: {
    width: '100%',
    flexDirection: 'row',
  },

  colPutter: {
    marginRight: 180,
    flexDirection: 'column',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
});
