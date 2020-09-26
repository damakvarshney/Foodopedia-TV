import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "@react-navigation/compat";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            // onPress={
            //   // () =>
            //   // navigation.navigate("ResultsShowScreen", { id: item.id })
            // }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
