import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  /**
   * @format 'YYYY-MM-DD'
   */
  const date = searchParams.get("date");

  try {
    // FIXME: 배포 시  story_date에 변수 주입
    // const response =
    //   await sql`SELECT id, story_date, content FROM starting_stories WHERE story_date = '2024-10-09'`;
    return NextResponse.json(
      [
        {
          id: 3,
          story_date: "2024-10-08T15:00:00.000Z",
          content:
            "소문난 맛집을 30분동안 줄서서 대기하고  들어가서 음식이 나오고 한숟갈 먹으려는데 애인이 이별을 통보했다. 나는 왜 지금 시점이냐며 이유를 물어봤다.",
        },
      ],
      { status: 200 }
    );
    // return NextResponse.json(response.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
