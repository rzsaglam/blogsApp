import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import styles from "./BlogForm.style";

const BlogForm = ({ blogs, setBlogs, setBlogToggle }) => {
  const [title, setTitle] = useState("");
  const [blogText, setBlogText] = useState("");
  const [author, setAuthor] = useState("");

  const initialBlog = {
    id: Math.floor(Math.random() * 100),
    title: title,
    blogText: blogText,
    author: author,
  };

  const handlePress = () => {
    setBlogs([...blogs, initialBlog]);
    setBlogToggle(true);
    setTitle("");
    setBlogText("");
    setAuthor("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Blog"
        value={blogText}
        onChangeText={(text) => setBlogText(text)}
        multiline
      />
      <TextInput
        style={styles.authorInput}
        placeholder="Author"
        value={author}
        onChangeText={(text) => setAuthor(text)}
      />
      <Button title="Send Blog" onPress={handlePress} />
    </View>
  );
};

export default BlogForm;
