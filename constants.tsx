
import { ArmType, ArmTypeInfo, Question } from './types';

export const ARM_TYPES: Record<ArmType, ArmTypeInfo> = {
  [ArmType.EDEMA_METABOLISM]: {
    id: ArmType.EDEMA_METABOLISM,
    name: 'むくみ&代謝ダウンタイプ',
    catchphrase: '二の腕は脂肪よりも、巡りや代謝の低下の影響を受けやすい部位です。',
    description: '産後や年齢による体質変化で、溜まりやすい状態が続いている可能性があります。',
    advice: 'このタイプの二の腕は、自己流では変わりにくいですが、理由に合った専門ケアを行うと変化が出やすいのが特徴です。',
    keywords: ['むくみ', '代謝', '巡り'],
    dietAdvice: [
      '塩分・アルコールを控える',
      'カリウム豊富な食材を摂る(バナナ・きゅうり・アボカド)',
      '常温の水をしっかり飲む'
    ],
    actionAdvice: [
      '湯船に浸かる',
      '二の腕から脇・鎖骨に流すリンパマッサージ',
      '肩回し&深呼吸'
    ]
  },
  [ArmType.POSTURE_USAGE]: {
    id: ArmType.POSTURE_USAGE,
    name: '姿勢ゆがみタイプ',
    catchphrase: '猫背や巻き肩などの姿勢が続くと、二の腕は使われにくく、たるみやすくなります。',
    description: '抱っこや家事が多い方に特に多いタイプです。',
    advice: 'このタイプの二の腕は、自己流では変わりにくいですが、理由に合った専門ケアを行うと変化が出やすいのが特徴です。',
    keywords: ['姿勢', '使い方', 'たるみ'],
    dietAdvice: [
      '青魚・ナッツ・オリーブオイルで炎症を抑える',
      'タンパク質をしっかり摂る'
    ],
    actionAdvice: [
      '肩甲骨はがしストレッチ',
      '骨盤を立てて座る',
      '壁に背中をつけて姿勢を意識'
    ]
  },
  [ArmType.DIET_HABIT]: {
    id: ArmType.DIET_HABIT,
    name: '食習慣タイプ',
    catchphrase: '食事内容の影響で、二の腕に脂肪がつきやすくなっている可能性があります。',
    description: '意志の弱さではなく、体の反応によるものです。',
    advice: 'このタイプの二の腕は、自己流では変わりにくいですが、理由に合った専門ケアを行うと変化が出やすいのが特徴です。',
    keywords: ['食習慣', '脂肪', '体質'],
    dietAdvice: [
      '間食をナッツやプロテインバーに置き換える',
      '玄米や全粒パンなど茶色の炭水化物に切り替え',
      '豚肉や卵などビタミンB群を意識'
    ],
    actionAdvice: [
      '食後10分ウォーキング',
      '寝る前ストレッチ',
      '甘い飲み物を無糖茶に変える'
    ]
  },
  [ArmType.MUSCLE_FOUNDATION]: {
    id: ArmType.MUSCLE_FOUNDATION,
    name: '隠れ筋力不足タイプ',
    catchphrase: '二の腕は年齢とともに筋力が落ちやすい部位です。',
    description: '土台の筋肉が使われないことで、引き締まりにくくなっています。',
    advice: 'このタイプの二の腕は、自己流では変わりにくいですが、理由に合った専門ケアを行うと変化が出やすいのが特徴です。',
    keywords: ['筋力', '土台', '引き締め'],
    dietAdvice: [
      '鶏むね肉・魚・大豆製品などタンパク質',
      '鉄分(赤身肉・ほうれん草)を意識'
    ],
    actionAdvice: [
      'ペットボトル筋トレ',
      '買い物で片手持ちを意識',
      '週2~3回の自宅エクササイズ'
    ]
  }
};

// 質問とタイプのマッピング
// むくみ・代謝ダウン型: Q4, Q5, Q7, Q8
// 姿勢・使い方型: Q3, Q9, Q10
// 食習慣影響型: Q2, Q6
// 筋力・土台不足型: Q1, Q10
export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '二の腕のたるみが気になるけれど、運動習慣はほとんどない？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.MUSCLE_FOUNDATION]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 2,
    text: '甘いものや炭水化物をつい食べ過ぎてしまうことが多い？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.DIET_HABIT]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 3,
    text: '姿勢が悪い（猫背・巻き肩など）と言われたことがある？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.POSTURE_USAGE]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 4,
    text: '肩こりや首こりを感じることが多い？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.EDEMA_METABOLISM]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 5,
    text: 'むくみやすく、夕方になると腕や指輪がきつくなる？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.EDEMA_METABOLISM]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 6,
    text: 'ダイエットをしても上半身（特に二の腕）が痩せにくいと感じる？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.DIET_HABIT]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 7,
    text: 'お風呂はシャワーで済ませることが多い？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.EDEMA_METABOLISM]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 8,
    text: '仕事や育児などでストレスを感じやすい？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.EDEMA_METABOLISM]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 9,
    text: '過去に二の腕を気にしてノースリーブを避けた経験がある？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.POSTURE_USAGE]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  },
  {
    id: 10,
    text: '肩甲骨まわりを意識して動かす習慣はほとんどない？',
    subtext: '',
    options: [
      { label: 'はい', scores: { [ArmType.POSTURE_USAGE]: 1, [ArmType.MUSCLE_FOUNDATION]: 1 } },
      { label: 'いいえ', scores: {} }
    ]
  }
];
