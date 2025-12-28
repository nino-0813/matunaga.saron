
export enum ArmType {
  CHIFFON_EDEMA = 'CHIFFON_EDEMA',
  MARBLE_CELLULITE = 'MARBLE_CELLULITE',
  ANTIQUE_SAGGING = 'ANTIQUE_SAGGING',
  SHADOW_POSTURE = 'SHADOW_POSTURE',
  TENSE_MUSCLE = 'TENSE_MUSCLE',
  PRISM_MIXED = 'PRISM_MIXED'
}

export interface ArmTypeInfo {
  id: ArmType;
  name: string;
  catchphrase: string;
  description: string;
  advice: string;
  keywords: string[];
}

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  options: {
    label: string;
    scores: Partial<Record<ArmType, number>>;
  }[];
}

export interface DiagnosisResult {
  topType: ArmTypeInfo;
  scores: Record<ArmType, number>;
  aiInsight?: string;
}
