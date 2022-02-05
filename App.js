import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import BlogForm from "./components/BlogForm";
import Blogs from "./components/Blogs";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState();
  const [formToggle, setFormToggle] = useState(false);
  const [blogToggle, setBlogToggle] = useState(false);

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  const handleSearch = (text) => {
    setBlogToggle(true);
    const filteredBlogs = blogs.filter((blog) => {
      const _text = text.toLowerCase();
      const id = blog.id;
      const title = blog.title.toLowerCase();
      const blogText = blog.blogText.toLowerCase();
      const author = blog.author.toLowerCase();
      const blogInfo = id + title + blogText + author;

      return blogInfo.indexOf(_text) > -1;
    });
    setFilteredBlogs(filteredBlogs);
  };

  const handleDelete = (id) => {
    filteredBlogs &&
      setFilteredBlogs(filteredBlogs.filter((blog) => blog.id !== id));
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.logo}>Blog App</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.toggleButtonContainer}>
          <Button
            style={styles.toggleButton}
            title="Toggle Form"
            onPress={() => setFormToggle(!formToggle)}
          />
        </View>
        {formToggle && (
          <BlogForm
            blogs={blogs}
            setBlogs={setBlogs}
            setBlogToggle={setBlogToggle}
          />
        )}
        <View style={styles.section}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            onChangeText={(text) => handleSearch(text)}
          />
          <View style={styles.toggleButtonContainer}>
            <Button
              style={styles.toggleButton}
              title="Toggle Blogs"
              onPress={() => setBlogToggle(!blogToggle)}
            />
          </View>
        </View>
        {blogToggle && (
          <FlatList
            data={filteredBlogs}
            renderItem={({ item }) => (
              <Blogs key={item.id} item={item} handleDelete={handleDelete} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#039be5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  logo: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  toggleButtonContainer: {
    alignSelf: "flex-end",
    margin: 10,
  },
  section: {
    flexDirection: "row",
    marginLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "white",
    padding: 10,
    paddingRight: 30,
    borderRadius: 5,
  },
});
