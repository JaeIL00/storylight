import { AxiosError } from "axios";
import { GetStartStory } from "./entity";
import { API } from "..";

export const apiStartStory = {
  get: async ({ date }: { date: string }) => {
    try {
      const response = await API.get<GetStartStory[]>(
        `/api/start-story?date=${date}`
      );
      return response.data[0];
    } catch (err) {
      const error = err as AxiosError;
      throw error;
    }
  },
};
