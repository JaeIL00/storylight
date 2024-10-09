import { AxiosError } from "axios";
import { API } from "..";
import { GetLevelStory, LevelStory } from "./entity";

export const apiLevelStory = {
  get: async (params: Pick<LevelStory, "level" | "parent_id" | "start_id">) => {
    try {
      const response = await API.get<GetLevelStory[]>("/api/level-story", {
        params,
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      throw error;
    }
  },
  post: async (
    body: Pick<LevelStory, "level" | "parent_id" | "start_id" | "content">
  ) => {
    try {
      await API.post("/api/level-story", body);
    } catch (err) {
      const error = err as AxiosError;
      throw error;
    }
  },
};
