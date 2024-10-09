import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { LevelStory } from "./entity";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const level = searchParams.get("level");
  const parent_id = searchParams.get("parent_id");
  const start_id = searchParams.get("start_id");

  try {
    // FIXME: 배포 시  story_date에 변수 주입
    // const response =
    //   await sql`SELECT id, parent_id, level, content, start_id FROM level_stories WHERE level = 2 AND parent_id IS NULL AND start_id = 3`;
    return NextResponse.json(
      [
        {
          id: 1,
          parent_id: null,
          level: 2,
          content:
            "조심스레 안으로 들어가자 거실에는 아무도 없었지만, 식탁 위에 놓인 편지 한 통이 눈에 들어왔다. 떨리는 손으로 편지를 펼쳐 읽어내려가는 순간, 나는 충격에 빠졌다.",
          start_id: 3,
        },
      ],
      { status: 200 }
    );
    // return NextResponse.json(response.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { level, content, start_id, parent_id } = await request.json();
  try {
    await sql`INSERT INTO level_stories (level, content, start_id, parent_id) VALUES (${level}, ${content}, ${start_id}, ${parent_id})`;
    return NextResponse.json(`Success: create ${level}level story`, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
