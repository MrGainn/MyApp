import {  StyleSheet } from 'react-native';

export const primaryAppColor = '#007bff'

export const primaryTitelColor = 'black'

export const primaryTextColor = '#484848'
export const secondaryTextColor = '#767676'
export const detailTextColor = '#9c9c9c'

//NAVIGATION MENU BELOW
export const globalBackgroundColor = 'white';
export const tabBarGreyColor = secondaryTextColor;


//#e9e7e6 for light grey from image
export const globalMenuBorderColor = '#FAFAFA';

export const GlobalStyles = StyleSheet.create({
    title: {

      color: primaryTitelColor,
      fontSize: 20,
    },
    primaryText: {
        fontSize: 16,
        color: primaryTextColor
      },
      secondaryText: {
        fontSize: 14,
        color: secondaryTextColor
      },

      primaryFeedText: {
        color: primaryTitelColor,
        fontSize: 16
      },

      detailText: {
        fontSize: 12,
        color: "#9c9c9c"
      },
      headerTitelText: {
        color: primaryTitelColor,
        fontSize: 20
      },
      /*
    The line 'border' used to seperate the items in the search and settings screens
    */
      seperator: {
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
      },
      seperatorTop: {
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
      },

  });


