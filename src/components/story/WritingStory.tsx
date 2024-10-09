"use client";

import { useState } from "react";

const WritingStoryInput = () => {
  const [storyValue, setStoryValue] = useState<string>("");
  return (
    <div>
      <input
        value={storyValue}
        onChange={({ target }) => setStoryValue(target.value)}
      />
    </div>
  );
};

export default WritingStoryInput;
