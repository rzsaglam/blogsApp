import React from "react";
import { View, TextInput } from "react-native";

import styles from "./SearchBar.style";

const SearchBar = ({ text, handleSearch }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => handleSearch(text)}
      />
    </View>
  );
};

export default SearchBar;
