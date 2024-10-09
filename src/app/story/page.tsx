"use client";

import { apiStartStory } from "@/app/api/start-story/func";
import LevelBar from "@/app/components/story/LevelBar";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

const StoryPage = () => {
  const [todayDate] = useState(dayjs().format("YYYY-MM-DD"));

  const { data } = useQuery({
    queryKey: ["state_story"],
    queryFn: () => apiStartStory.get({ date: todayDate }),
    retry: 0,
  });

  return (
    <main>
      <LevelBar />
      <article>
        <section>{data?.content}</section>
        <section>다음 단계 이야기</section>
      </article>
    </main>
  );
};

export default StoryPage;
