import React, { useEffect, useState } from "react";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { BsThreeDots } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
  AiOutlineShareAlt,
} from "react-icons/ai";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const postsCol = collection(db, "posts");
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    setPosts(postList);
  };

  const Header = ({ authorName, authorImage }) => {
    return (
      <div className="posts__header">
        <div className="header__right">
          <div className="imageBx">
            <img src={authorImage} />
          </div>
          <p className="author__name">{authorName}</p>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
    );
  };

  const ImageBox = ({ postImage }) => {
    return (
      <div className="posts__imageBx">
        <img src={postImage} />

        <div className="imageBx__bottom">
          <ul>
            <li>
              <AiOutlineHeart />
            </li>
            <li>
              <AiOutlineMessage />
            </li>
            <li>
              <AiOutlineSend />
            </li>
          </ul>
          <div className="dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="share">
            <AiOutlineShareAlt />
          </div>
        </div>
      </div>
    );
  };

  const PostBottom = ({ post }) => {
    return (
      <div className="posts__bottom">
        <p>
          <b>{post.postAuthor}</b>
          {post.postDescription}
        </p>

        <p className="comments">
          Yorumları Görüntüle
        </p>
      </div>
    );
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div style={{ margin: "15px 0" }} key={post.id}>
          <Header authorImage={post.authorImage} authorName={post.postAuthor} />
          <ImageBox postImage={post.postImage} />
          <PostBottom post={post} />
        </div>
      ))}
    </div>
  );
}
