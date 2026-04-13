import { env } from "cloudflare:workers";

export async function getJsonFromR2(key: string): Promise<string> {
  const bucket = env.R2;
  if (!bucket) {
    throw new Error("R2 binding not configured");
  }

  const object = await bucket.get(key);
  if (!object) {
    throw new Error("Audit payload not found");
  }

  return object.text();
}

export async function putTextToR2(
  key: string,
  body: string,
): Promise<{ key: string; sizeBytes: number } | null> {
  const bucket = env.R2;
  if (!bucket) {
    return null;
  }

  await bucket.put(key, body, {
    httpMetadata: {
      contentType: "application/json",
    },
  });

  return {
    key,
    sizeBytes: Buffer.byteLength(body),
  };
}
