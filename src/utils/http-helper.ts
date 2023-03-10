import { INotionResponse } from '../@types/notion-type';

const DATABASE_ID: string = '';
const PRIVATE_TOKEN: string = '';
const NOTION_DB_API = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;

export async function sendHttpRequest(requestData: object): Promise<INotionResponse> {
    const result = await fetch(NOTION_DB_API, requestData);
    return JSON.parse(await result.text());
}

export function makeHttpRequestData(method: string, filter: object) {
    return {
        method: method,
        headers: {
            Authorization: `Bearer ${PRIVATE_TOKEN}`,
            'Notion-Version': '2021-05-11',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            filter: filter,
        }),
    };
}
