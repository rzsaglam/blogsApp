import React, { useState } from "react";
import { View, TextInput } from "react-native";

import styles from "./BlogForm.style";

import Button from "../../common/Button";

const BlogForm = ({ blogs }) => {
  const [blogData, setBlogData] = useState(...blogs);
  const [title, setTitle] = useState("");
  const [blogText, setBlogText] = useState("");
  const [author, setAuthor] = useState("");

  const initialBlog = {
    id: blogs.length,
    title: title.trim(),
    blogText: blogText.trim(),
    author: author.trim(),
  };

  const handlePress = () => {
    if (title && blogText && author !== "") {
      setBlogData([...blogs, initialBlog]);
      setTitle("");
      setBlogText("");
      setAuthor("");
    }
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
