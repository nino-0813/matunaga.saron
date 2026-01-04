
export enum ArmType {
  EDEMA_METABOLISM = 'EDEMA_METABOLISM', // むくみ・代謝ダウン型
  POSTURE_USAGE = 'POSTURE_USAGE', // 姿勢・使い方型
  DIET_HABIT = 'DIET_HABIT', // 食習慣影響型
  MUSCLE_FOUNDATION = 'MUSCLE_FOUNDATION' // 筋力・土台不足型
}

export interface ArmTypeInfo {
  id: ArmType;
  name: string;
  catchphrase: string;
  description: string;
  advice: string;
  keywords: string[];
  dietAdvice?: string[];
  actionAdvice?: string[];
}

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  options: {
    label: string;
    scores: Partial<Record<ArmType, number>> & { YES_COUNT?: number };
  }[];
}

export interface DiagnosisResult {
  topType: ArmTypeInfo;
  scores: Record<ArmType, number>;
  aiInsight?: string;
}
