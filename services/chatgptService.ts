
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
          content: "あなたは「二の腕専門サロン」の診断AIです。売り込みはせず、安心・納得・共感を最優先してください。責めない、否定しない、医療的な断定はしない。やさしく、共感的なトーンでメッセージを作成します。"
        },
        {
          role: "user",
          content: `
        二の腕やせ診断の結果、以下のタイプと判定されたお客様に向けて、安心・納得・共感を最優先したメッセージを作成してください。
        
        診断タイプ：${typeInfo.name}
        キャッチフレーズ：${typeInfo.catchphrase}
        説明：${typeInfo.description}
        
        【重要なポイント】
        - 二の腕が戻らない理由を「努力不足ではない」と納得してもらう
        - 原因を1つに絞って、やさしく説明する
        - 最後は「専門ケアが有効」という結論に自然に導く
        - 数字で責めない、否定しない、医療的な断定はしない
        - 売り込みは一切しない
        
        【トーン】
        - 非常に上品で落ち着いた日本語
        - 相手を否定せず、今の状態を「伸び代」として捉える
        - プロフェッショナルな知性を感じさせる
        - 30代・40代の出産経験者への共感を示す
        - 安心感を与える
        
        【文字数】
        150文字程度
        
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

