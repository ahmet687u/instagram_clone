import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Stories() {
  const [width, setWidth] = useState(0);
  const [stories, setStories] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    getStories();
  }, []);

  const getStories = async () => {
    const storiesCol = collection(db, "stories");
    const storieSnapshot = await getDocs(storiesCol);
    const storyList = storieSnapshot.docs.map((doc) => doc.data());
    setStories(storyList);
  };

  const splitText = (txt, boundary) => txt.substring(0, boundary);

  return (
    <div className="stories">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="carousel_inner"
        >
          {stories.map(({ id, imgUrl, name }) => (
            <motion.div key={id} className="item">
              <div className="imageBx">
                <img src={imgUrl} />
              </div>
              <p className="story_name">
                {name.length > 6 ? `${splitText(name, 6)}...` : name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
