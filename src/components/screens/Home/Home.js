import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";

import styles from "./Home.style";

import { blogData } from "../../../../assets/data/blogData";

import Blogs from "../../shared/Blogs";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";

const Home = ({ navigation }) => {
  const [blogs, setBlogs] = useState(blogData);
  const [filteredBlogs, setFilteredBlogs] = useState();

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  const handleSearch = (text) => {
    const filteredBlogs = blogs.filter((blog) => {
      const _text = text.toLowerCase().replace(/ /g, "");
      const id = blog.id;
      const title = blog.title.toLowerCase();
      const blogText = blog.blogText.toLowerCase();
      const author = blog.author.toLowerCase();
      const blogInfo = (id + title + blogText + author).replace(/ /g, "");
      return blogInfo.includes(_text) && blog;
    });
    setFilteredBlogs(filteredBlogs);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleNavigate = (item) => {
    navigation.navigate("Details", item);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.logo}>Blog App</Text>
      </View>
      <View>
        <View style={styles.section}>
          <SearchBar handleSearch={handleSearch} />
        </View>
        <FlatList
          data={filteredBlogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Blogs
              item={item}
              handleDelete={handleDelete}
              onPress={() => handleNavigate(item)}
            />
          )}
        />
      </View>
      <Button title="New Blog" onPress={() => navigation.navigate("Blogger")} />
    </SafeAreaView>
  );
};

export default Home;
