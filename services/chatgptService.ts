
import OpenAI from "openai";
import { ArmTypeInfo } from "../types";

export async function getPersonalizedInsight(typeInfo: ArmTypeInfo): Promise<string> {
  // Get API key from environment variables (works in both Vite dev and Vercel)
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.OPENAI_API_KEY || (typeof process !== 'undefined' ? process.env.OPENAI_API_KEY : undefined);
  
  if (!apiKey) {
    console.error("OpenAI API key is not set");
    return "あなたの二の腕には、まだ眠っている本来の美しさがあります。私たちはその可能性を最大限に引き出す準備ができています。";
  }
  
  const openai = new OpenAI({ 
    apiKey: apiKey,
    dangerouslyAllowBrowser: true 
  });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "あなたは最高級エステサロンのオーナー兼、熟練のセラピストです。心理学に基づいた共感と、期待感を高めるメッセージを作成する専門家です。"
        },
        {
          role: "user",
          content: `
        診断結果「${typeInfo.name}」となったお客様に向けて、心理学に基づいた共感と、
        「ここなら私の悩みを解決してくれる」という期待感を高める150文字程度のメッセージを作成してください。
        
        タイプの特徴：${typeInfo.description}
        タイプへのアドバイス：${typeInfo.advice}
        
        トーン：
        - 非常に上品で落ち着いた日本語
        - 相手を否定せず、今の状態を「伸び代」として捉える
        - プロフェッショナルな知性を感じさせる
        
        返信は純粋なテキストのみにしてください。
      `
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });
    return response.choices[0]?.message?.content?.trim() || "あなたの二の腕には、本来の美しさが眠っています。";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "あなたの二の腕には、まだ眠っている本来の美しさがあります。私たちはその可能性を最大限に引き出す準備ができています。";
  }
}

