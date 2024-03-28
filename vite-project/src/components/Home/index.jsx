import React, { useEffect } from "react";
import styles from "./Home.module.css";
import styled from "styled-components";
import fetchTweets from "../../utils/getTweets";
import Tweet from "../Tweet";
import CreatePostForm from "../CreatePostForm";
import { useState } from "react";

const Feed = styled.div`
  max-width: 42rem;
  width: 100%;
  border-left: 1px solid #475569;
  border-right: 1px solid #475569;
  max-width: 672px;
`;

export default function Home() {
  // const [counter, setCounter] = useState(0);
  const [tweets, setTweets] = useState([]);

  const fetchData = async () => {
    const response = await fetchTweets();
    setTweets(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.home}>
      <Feed>
        <div className="border-b border-slate-400 p-4">
          <CreatePostForm postTweet={setTweets} />
        </div>
        <div className="flex flex-col">
          {tweets.length ? (
            tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Feed>
    </main>
  );
}
