import React from "react";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import ChatWrapper from "@/app/components/ChatWrapper";
import { cookies } from "next/headers";

interface Pageprops {
  params: {
    url: string | string[] | undefined;
  };
}

const page = async ({ params }: Pageprops) => {
  const sessionCookie = cookies().get("sessionID")?.value;
  const url = params.url ? params.url : "";
  const reconstructedUrl = Array.isArray(url) ? url.join("/") : url;
  const decodedUrl = decodeURIComponent(reconstructedUrl);

  const isAlreadyInContext = await redis.sismember("indexed-urls", decodedUrl);

  const sessionID = (reconstructedUrl + "--" + sessionCookie).replace(
    /\//g,
    ""
  );

  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId: sessionID,
  });

  if (!isAlreadyInContext) {
    await ragChat.context.add({
      type: "html",
      source: decodedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", decodedUrl);
  }

  return (
    <ChatWrapper sessionID={sessionID} initialMessages={initialMessages} />
  );
};

export default page;
