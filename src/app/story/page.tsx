"use client";

import { apiStartStory } from "@/app/api/start-story/func";
import LevelBar from "@/components/story/LevelBar";
import WritingStoryInput from "@/components/story/WritingStory";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

const StoryPage = () => {
  const [todayDate] = useState<string>(dayjs().format("YYYY-MM-DD"));
  const [isWritingStory, setIsWritingStory] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["state_story"],
    queryFn: () => apiStartStory.get({ date: todayDate }),
    retry: 0,
  });

  return (
    <main>
      <LevelBar />
      <article>
        <section>
          {isWritingStory ? <WritingStoryInput /> : <p>{data?.content}</p>}
          <button onClick={() => setIsWritingStory((prev) => !prev)}>
            글작성
          </button>
        </section>
        <section>다음 단계 이야기</section>
      </article>
    </main>
  );
};

export default StoryPage;
