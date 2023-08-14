import { APIGatewayProxyResult } from "aws-lambda";
import fetch from "node-fetch";

export async function main(): Promise<APIGatewayProxyResult> {
  const res = await fetch("http://localhost:3001/dev")
  const body = await res.text();
  console.log('body', body)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World! Via service2.`, fromService1: body}),
  };
}
