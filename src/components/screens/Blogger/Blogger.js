import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./Blogger.style";
import { blogData } from "../../../../assets/data/blogData";

import Blogs from "../../shared/Blogs";
import BlogForm from "../../shared/BlogForm";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";

const Blogger = () => {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <View style={styles.container}>
      <BlogForm blogs={blogs} setBlogs={setBlogs} />
    </View>
  );
};

export default Blogger;
