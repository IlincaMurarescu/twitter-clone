import React from "react";
import styles from "./Home.module.css";
import styled from "styled-components";
import { tweets } from "../../utils/tweets";
import Tweet from "../Tweet";

const Feed = styled.div`
  max-width: 42 rem;
  width: 60%;
`;

export default function Home() {
  return (
    <main className={styles.feed}>
      <Feed className="w-2 border-x border-slate-400">
        {tweets.map((tweet) => (
          <Tweet></Tweet>
        ))}
      </Feed>
    </main>
  );
}
