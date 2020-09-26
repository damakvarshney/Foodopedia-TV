import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="magnify" style={styles.iconStyle} />
      <TextInput
        style={styles.inputText}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        placeholderTextColor="#A9A9A9"
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: `#D3D3D3`,
    marginTop: 15,
    height: 50,
    flexDirection: "row",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
