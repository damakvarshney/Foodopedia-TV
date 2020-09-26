import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam(`id`);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textStyle}>From : </Text>
        <Text style={styles.nameStyle}>{result.name}</Text>
      </View>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  imageStyle: {
    width: `90%`,
    alignSelf: "center",
    borderRadius: 4,
    marginVertical: 10,
    flex: 1,
    height: 200,
  },
  textStyle: {
    fontSize: 18,
    margin: 18,
  },
  nameStyle: {
    fontSize: 18,
    margin: 18,
    fontStyle: "italic",
  },
});

export default ResultsShowScreen;
