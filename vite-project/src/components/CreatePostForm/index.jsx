import { useCallback, useState } from "react";
import { tweets } from "../../utils/tweets";

export default function CreatePostForm({ postTweet }) {
  const [inputState, setInputState] = useState("sdfdsfdsfsd");

  const handleInputChange = useCallback(
    (e) => {
      console.log(inputState);
      setInputState(e.target.value);
    },
    [inputState],
  );

  const handleSubmit = () => {
    // e.preventDefault();
    const payload = {
      id: new Date().getTime(),
      username: "kentcdodds",
      name: "Kent C. Dodds",
      tweet: inputState,
      avatar: "https://i.pravatar.cc/150?img=1",
      createdAt: new Date().toISOString(),
    };
    postTweet((p) => [payload, ...p]);
    setInputState("");
  };
  return (
    <div className="flex gap-4 ">
      <img
        src={tweets[0].avatar}
        alt="avatar"
        className="h-14 w-14 rounded-full"
      />
      <input
        type="text"
        placeholder="What's happening?"
        className="w-full border-0 bg-transparent outline-none"
        onChange={handleInputChange}
        value={inputState}
      />
      <button
        className="h-9 w-24 cursor-pointer self-center rounded-full bg-cyan-400 px-2 py-0 text-black hover:bg-cyan-300 "
        onClick={handleSubmit}
        disabled={!inputState}
        style={{ cursor: !inputState ? "not-allowed" : "pointer" }}
      >
        Post
      </button>
    </div>
  );
}

// --------------------------------------------------------------------------------
// import { tweets } from "../../utils/tweets";
// import { useCallback, useState } from "react";

// export default function CreatePostForm() {
//   const [inputState, setInputState] = useState("");

//   const handleInputChange = useCallback((e) => {
//     setInputState(e.target.value);
//   }, []);

//   const handleSubmit = () => {
//     if (!inputState) return;
//     const payload = {
//       id: new Date().getTime(),
//       username: "kentcdodds",
//       name: "Kent C.",
//       tweet: inputState,
//     };
//     postTweet((p) => [payload, ...p]);
//     setInputState("");
//   };

//   return (
//     <div className="flex gap-4">
//       <img
//         src={tweets[0].avatar}
//         alt="avatar"
//         className="h-14 w-14 rounded-full"
//       />
//       <input
//         type="text"
//         placeholder="What's happening?"
//         className="w-full border-0 bg-transparent outline-none"
//       />

//       <button
//         className="h-9 w-24 self-center rounded-full bg-cyan-400 px-2 py-0 text-black"
//         onClick={() => handleSubmit()}
//         disabled={!inputState}
//         style={{ cursor: !inputState ? "not-allowed" : "pointer" }}
//       >
//         Post
//       </button>
//     </div>
//   );
// }
