import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import SearchBar from "./../components/SearchBar";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  //const SearchScreen = ({navigation}) => {
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (price) => {
    //price ==='$'|| '$$' || '$$$'

    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMessage}</Text>
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
          // navigation={navigation}
        />
        <ResultsList
          // navigation={navigation}
          results={filterResultByPrice("$$")}
          title="Bit Pricer"
        />
        <ResultsList
          results={filterResultByPrice("$$$")}
          title="Big Spender!"
          // navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
});

export default SearchScreen;
