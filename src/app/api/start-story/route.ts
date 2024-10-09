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
    const response =
      await sql`SELECT id, story_date, content FROM starting_stories WHERE story_date = 2024-10-09`;
    return NextResponse.json(response.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// response example
// {
//   "command": "SELECT",
//   "rowCount": 1,
//   "rows": [
//       {
//           "id": 1,
//           "story_date": "2024-10-08T15:00:00.000Z",
//           "content": "친구의 결혼식 날, 신부 대기실에서 우연히 들은 대화가 나의 인생을 완전히 뒤바꿔 놓았다.",
//           "created_at": "2024-10-08T17:29:11.703Z"
//       }
//   ],
//   "fields": [
//       {
//           "name": "id",
//           "dataTypeID": 23,
//           "tableID": 24609,
//           "columnID": 1,
//           "dataTypeSize": 4,
//           "dataTypeModifier": -1,
//           "format": "text"
//       },
//       {
//           "name": "story_date",
//           "dataTypeID": 1082,
//           "tableID": 24609,
//           "columnID": 2,
//           "dataTypeSize": 4,
//           "dataTypeModifier": -1,
//           "format": "text"
//       },
//       {
//           "name": "content",
//           "dataTypeID": 1043,
//           "tableID": 24609,
//           "columnID": 3,
//           "dataTypeSize": -1,
//           "dataTypeModifier": 204,
//           "format": "text"
//       },
//       {
//           "name": "created_at",
//           "dataTypeID": 1114,
//           "tableID": 24609,
//           "columnID": 4,
//           "dataTypeSize": 8,
//           "dataTypeModifier": -1,
//           "format": "text"
//       }
//   ],
//   "rowAsArray": false,
//   "viaNeonFetch": true,
//   "_parsers": [
//       null,
//       null,
//       null,
//       null
//   ],
//   "_types": {
//       "_types": {
//           "arrayParser": {},
//           "builtins": {
//               "BOOL": 16,
//               "BYTEA": 17,
//               "CHAR": 18,
//               "INT8": 20,
//               "INT2": 21,
//               "INT4": 23,
//               "REGPROC": 24,
//               "TEXT": 25,
//               "OID": 26,
//               "TID": 27,
//               "XID": 28,
//               "CID": 29,
//               "JSON": 114,
//               "XML": 142,
//               "PG_NODE_TREE": 194,
//               "SMGR": 210,
//               "PATH": 602,
//               "POLYGON": 604,
//               "CIDR": 650,
//               "FLOAT4": 700,
//               "FLOAT8": 701,
//               "ABSTIME": 702,
//               "RELTIME": 703,
//               "TINTERVAL": 704,
//               "CIRCLE": 718,
//               "MACADDR8": 774,
//               "MONEY": 790,
//               "MACADDR": 829,
//               "INET": 869,
//               "ACLITEM": 1033,
//               "BPCHAR": 1042,
//               "VARCHAR": 1043,
//               "DATE": 1082,
//               "TIME": 1083,
//               "TIMESTAMP": 1114,
//               "TIMESTAMPTZ": 1184,
//               "INTERVAL": 1186,
//               "TIMETZ": 1266,
//               "BIT": 1560,
//               "VARBIT": 1562,
//               "NUMERIC": 1700,
//               "REFCURSOR": 1790,
//               "REGPROCEDURE": 2202,
//               "REGOPER": 2203,
//               "REGOPERATOR": 2204,
//               "REGCLASS": 2205,
//               "REGTYPE": 2206,
//               "UUID": 2950,
//               "TXID_SNAPSHOT": 2970,
//               "PG_LSN": 3220,
//               "PG_NDISTINCT": 3361,
//               "PG_DEPENDENCIES": 3402,
//               "TSVECTOR": 3614,
//               "TSQUERY": 3615,
//               "GTSVECTOR": 3642,
//               "REGCONFIG": 3734,
//               "REGDICTIONARY": 3769,
//               "JSONB": 3802,
//               "REGNAMESPACE": 4089,
//               "REGROLE": 4096
//           }
//       },
//       "text": {},
//       "binary": {}
//   }
// }
