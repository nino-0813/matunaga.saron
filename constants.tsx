
import { ArmType, ArmTypeInfo, Question } from './types';

export const ARM_TYPES: Record<ArmType, ArmTypeInfo> = {
  [ArmType.CHIFFON_EDEMA]: {
    id: ArmType.CHIFFON_EDEMA,
    name: 'シフォン・シルク型',
    catchphrase: '巡りが滞り、ふんわりとした柔らかさが重たさに変わる時。',
    description: '冷えやむくみが原因で、水分が溜まりやすいタイプです。夕方になると指輪がキツくなったり、腕のラインがぼやけがちな方に多く見られます。',
    advice: 'まずは「温めること」と「流すこと」が最優先。リンパの流れを整えることで、驚くほどスッキリとしたラインが戻ってきます。',
    keywords: ['むくみ', '冷え性', '代謝低下']
  },
  [ArmType.MARBLE_CELLULITE]: {
    id: ArmType.MARBLE_CELLULITE,
    name: 'マーブル・テクスチャ型',
    catchphrase: '肌の下に眠る頑固な凹凸、解き放たれるのを待っている。',
    description: '脂肪細胞と老廃物が結びついた「セルライト」が目立つタイプです。ねじると表面がボコボコしたり、掴むと痛みを感じることも。自己流のダイエットでは最も落ちにくい状態です。',
    advice: '凝り固まった脂肪を深部からほぐし、破壊する専門的なアプローチが必要です。プロの技術で「解体」することで、滑らかな質感へと導きます。',
    keywords: ['セルライト', '蓄積脂肪', '固太り']
  },
  [ArmType.ANTIQUE_SAGGING]: {
    id: ArmType.ANTIQUE_SAGGING,
    name: 'アンティーク・レース型',
    catchphrase: '繊細な美しさが、重力という名の時の流れに身を任せている。',
    description: '加齢や急激なダイエットにより、コラーゲンが減少し、肌のハリ（弾力）が失われたタイプ。いわゆる「振袖」状態が気になり、ノースリーブを敬遠しがちです。',
    advice: '引き締めと同時に、肌深部へのエイジングケアが不可欠。筋膜へのアプローチと保湿ケアを組み合わせることで、ピンと張った若々しい二の腕を再建します。',
    keywords: ['たるみ', 'ハリ不足', 'エイジング']
  },
  [ArmType.SHADOW_POSTURE]: {
    id: ArmType.SHADOW_POSTURE,
    name: 'シャドウ・アーチ型',
    catchphrase: '美しい腕を隠しているのは、知らずに身につけた背中の影。',
    description: '巻き肩や猫背などの姿勢不良により、二の腕が横に広がって太く見えてしまうタイプ。PCやスマホ作業が多く、肩甲骨が埋もれてしまっている方に多いです。',
    advice: '二の腕だけをケアしても解決しません。肩甲骨周りの可動域を広げ、姿勢を正す骨格アプローチによって、腕は本来の細さを取り戻します。',
    keywords: ['巻き肩', '姿勢不良', '肩甲骨']
  },
  [ArmType.TENSE_MUSCLE]: {
    id: ArmType.TENSE_MUSCLE,
    name: 'テンス・ベルベット型',
    catchphrase: '頑張りすぎた筋肉が、優雅な曲線を力強さに変えてしまった。',
    description: '肩の力が抜けず、腕の外側の筋肉（上腕三頭筋ではなく三角筋）を使いすぎて、ガッシリと逞しく見えてしまうタイプ。常に肩コリを感じている方に多いです。',
    advice: '必要なのはトレーニングではなく「脱力」と「ストレッチ」。過度な緊張をリセットし、筋肉の付き方をデザインし直すことで、女性らしい華奢なラインを作ります。',
    keywords: ['筋肉太り', '肩コリ', '緊張']
  },
  [ArmType.PRISM_MIXED]: {
    id: ArmType.PRISM_MIXED,
    name: 'プリズム・コンプレックス型',
    catchphrase: '複雑に絡み合う要因が、あなたの輝きに薄いベールをかけている。',
    description: 'むくみ、脂肪、たるみが複合的に重なっているタイプ。生活リズムの乱れやストレスが、腕の質感にダイレクトに現れています。',
    advice: '総合的なデトックスが必要です。食事、睡眠、そしてサロンでのトータルケア。一つずつ原因を紐解いていくことで、本来の輝きを呼び覚まします。',
    keywords: ['複合型', '生活習慣', 'ストレス']
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '夏場でも、二の腕を触るとひんやり冷たく感じることがありますか？',
    subtext: '内側からの巡りの良さを確認します。',
    options: [
      { label: 'はい、いつも冷たい', scores: { [ArmType.CHIFFON_EDEMA]: 3, [ArmType.PRISM_MIXED]: 1 } },
      { label: 'たまに冷たく感じる', scores: { [ArmType.CHIFFON_EDEMA]: 1, [ArmType.MARBLE_CELLULITE]: 1 } },
      { label: 'あまり気にならない', scores: { [ArmType.TENSE_MUSCLE]: 1 } }
    ]
  },
  {
    id: 2,
    text: '腕を振ったとき、皮膚の「揺れ」が止まるまでに時間がかかりますか？',
    subtext: '肌の密度と弾力性を測ります。',
    options: [
      { label: '波打つように揺れる', scores: { [ArmType.ANTIQUE_SAGGING]: 3, [ArmType.CHIFFON_EDEMA]: 1 } },
      { label: '少し揺れる程度', scores: { [ArmType.CHIFFON_EDEMA]: 1, [ArmType.PRISM_MIXED]: 1 } },
      { label: '筋肉質で揺れない', scores: { [ArmType.TENSE_MUSCLE]: 2, [ArmType.MARBLE_CELLULITE]: 1 } }
    ]
  },
  {
    id: 3,
    text: 'PCやスマホを使っている時、ふと気づくと「巻き肩」になっていますか？',
    subtext: '骨格がシルエットに与える影響を分析します。',
    options: [
      { label: '常に肩が内側に入っている', scores: { [ArmType.SHADOW_POSTURE]: 4 } },
      { label: '集中すると丸くなる', scores: { [ArmType.SHADOW_POSTURE]: 2, [ArmType.TENSE_MUSCLE]: 1 } },
      { label: '姿勢は良い方だ', scores: { [ArmType.MARBLE_CELLULITE]: 1 } }
    ]
  },
  {
    id: 4,
    text: '二の腕の肉をギュッと捻ると、表面にボコボコした凹凸が現れますか？',
    subtext: 'セルライトの蓄積度合いをチェックします。',
    options: [
      { label: 'はっきりと現れる', scores: { [ArmType.MARBLE_CELLULITE]: 4 } },
      { label: '薄らと見える', scores: { [ArmType.MARBLE_CELLULITE]: 2, [ArmType.PRISM_MIXED]: 1 } },
      { label: '滑らかなままだ', scores: { [ArmType.ANTIQUE_SAGGING]: 1, [ArmType.CHIFFON_EDEMA]: 1 } }
    ]
  },
  {
    id: 5,
    text: 'ブラジャーの着脱時、脇や背中にお肉が逃げていると感じますか？',
    subtext: '脂肪の移動と定着状態を見極めます。',
    options: [
      { label: '段差が気になる', scores: { [ArmType.MARBLE_CELLULITE]: 2, [ArmType.SHADOW_POSTURE]: 2 } },
      { label: '多少気にする', scores: { [ArmType.PRISM_MIXED]: 1, [ArmType.MARBLE_CELLULITE]: 1 } },
      { label: 'スッキリしている', scores: { [ArmType.TENSE_MUSCLE]: 1 } }
    ]
  },
  {
    id: 6,
    text: 'ダイエットをしても、二の腕の太さだけが変わらないと感じますか？',
    subtext: '落としにくい「停滞脂肪」の有無を探ります。',
    options: [
      { label: '全く変わらない', scores: { [ArmType.MARBLE_CELLULITE]: 3, [ArmType.TENSE_MUSCLE]: 2 } },
      { label: '少しは変化する', scores: { [ArmType.PRISM_MIXED]: 1, [ArmType.CHIFFON_EDEMA]: 1 } },
      { label: '痩せれば腕も細くなる', scores: { [ArmType.CHIFFON_EDEMA]: 2 } }
    ]
  },
  {
    id: 7,
    text: '朝起きた時、顔や手がむくみやすい体質ですか？',
    subtext: '全身の水分代謝の状態を確認します。',
    options: [
      { label: '毎日むくんでいる', scores: { [ArmType.CHIFFON_EDEMA]: 4 } },
      { label: '時々ある', scores: { [ArmType.CHIFFON_EDEMA]: 2, [ArmType.PRISM_MIXED]: 1 } },
      { label: 'むくみにくい', scores: { [ArmType.MARBLE_CELLULITE]: 1 } }
    ]
  },
  {
    id: 8,
    text: '鏡を見た時、肩のラインが「いかり肩」のように上がって見えますか？',
    subtext: '筋肉の緊張と厚みを分析します。',
    options: [
      { label: '常に力が入っている', scores: { [ArmType.TENSE_MUSCLE]: 4 } },
      { label: '疲れると上がる', scores: { [ArmType.TENSE_MUSCLE]: 2, [ArmType.SHADOW_POSTURE]: 1 } },
      { label: 'なで肩である', scores: { [ArmType.ANTIQUE_SAGGING]: 1, [ArmType.SHADOW_POSTURE]: 1 } }
    ]
  },
  {
    id: 9,
    text: '二の腕の皮膚を引っ張った時、戻りが遅い（伸びる）と感じますか？',
    subtext: '真皮層のコラーゲン密度を推測します。',
    options: [
      { label: '伸びやすく戻りが遅い', scores: { [ArmType.ANTIQUE_SAGGING]: 4 } },
      { label: '普通だと思う', scores: { [ArmType.PRISM_MIXED]: 1, [ArmType.CHIFFON_EDEMA]: 1 } },
      { label: '弾力があり伸びない', scores: { [ArmType.TENSE_MUSCLE]: 1, [ArmType.MARBLE_CELLULITE]: 1 } }
    ]
  },
  {
    id: 10,
    text: '日常生活で、腕を頭より高く上げる動作はどのくらいありますか？',
    subtext: '筋肉のポンプ機能の活用度を測ります。',
    options: [
      { label: 'ほとんどない（デスクワーク中心）', scores: { [ArmType.CHIFFON_EDEMA]: 2, [ArmType.SHADOW_POSTURE]: 2, [ArmType.PRISM_MIXED]: 1 } },
      { label: '家事などで時々ある', scores: { [ArmType.PRISM_MIXED]: 1 } },
      { label: '意識的に動かしている', scores: { [ArmType.TENSE_MUSCLE]: 1 } }
    ]
  }
];
