export interface GetLevelStory {
  id: number;
  parent_id: number | null;
  level: number;
  content: string;
  start_id: number;
}

export interface LevelStory {
  parent_id?: number;
  level: number;
  content: string;
  start_id: number;
}
