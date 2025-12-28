
import React, { useState, useCallback, useMemo } from 'react';
import { QUESTIONS, ARM_TYPES } from './constants';
import { ArmType, ArmTypeInfo, DiagnosisResult } from './types';
import { getPersonalizedInsight } from './services/chatgptService';
import { LucideChevronRight, LucideCheck, LucideSparkles, LucideCalendar, LucideChevronLeft, LucideLoader2 } from 'lucide-react';

// Components
const LandingPage: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 fade-in">
    <div className="mb-8 tracking-[0.2em] text-stone-400 uppercase text-sm font-luxury">Upper Arm Aesthetics</div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-stone-800">
      あなたの二の腕に隠された<br />
      <span className="text-amber-700 italic font-luxury">Potential</span> を知る
    </h1>
    <p className="max-w-md text-stone-500 mb-12 leading-relaxed">
      心理学と専門エステティシャンの知見から導き出す、<br />
      6つの美腕タイプ診断。
    </p>
    <button
      onClick={onStart}
      className="group relative px-12 py-4 bg-stone-900 text-white overflow-hidden transition-all hover:bg-stone-800 active:scale-95"
    >
      <span className="relative z-10 flex items-center gap-2 tracking-widest">
        診断をはじめる <LucideChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  </div>
);

const QuestionView: React.FC<{
  questionIdx: number;
  totalQuestions: number;
  onAnswer: (scores: Partial<Record<ArmType, number>>) => void;
  onBack: () => void;
}> = ({ questionIdx, totalQuestions, onAnswer, onBack }) => {
  const question = QUESTIONS[questionIdx];
  const progress = ((questionIdx + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 fade-in">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1 text-sm">
          <LucideChevronLeft size={16} /> 戻る
        </button>
        <span className="text-xs font-luxury tracking-widest text-stone-400 uppercase">Step {questionIdx + 1} / {totalQuestions}</span>
      </div>
      
      <div className="w-full bg-stone-100 h-px mb-12">
        <div className="bg-amber-600 h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-stone-800 mb-4 leading-relaxed">{question.text}</h2>
        {question.subtext && <p className="text-sm text-stone-400 italic">{question.subtext}</p>}
      </div>

      <div className="grid gap-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option.scores)}
            className="w-full text-left p-6 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all group flex items-center justify-between"
          >
            <span className="text-stone-700 group-hover:text-amber-900 transition-colors">{option.label}</span>
            <div className="w-5 h-5 rounded-full border border-stone-200 group-hover:border-amber-400 transition-all flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ResultView: React.FC<{ result: DiagnosisResult }> = ({ result }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 fade-in">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-6">
          <LucideSparkles className="text-amber-600" size={32} />
        </div>
        <div className="text-stone-400 tracking-[0.3em] uppercase text-xs mb-4 font-luxury">Diagnosis Result</div>
        <h2 className="text-sm text-stone-500 mb-2">あなたのタイプは...</h2>
        <div className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">{result.topType.name}</div>
        <p className="text-lg italic text-amber-800 font-serif opacity-80">" {result.topType.catchphrase} "</p>
      </div>

      <div className="bg-white border border-stone-100 p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <span className="text-8xl font-luxury italic">Type</span>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xs tracking-widest text-stone-400 uppercase font-luxury mb-4 border-b border-stone-100 pb-2">Analysis</h3>
          <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">{result.topType.description}</p>
        </div>

        <div className="mb-10">
          <h3 className="text-xs tracking-widest text-stone-400 uppercase font-luxury mb-4 border-b border-stone-100 pb-2">Therapist Insight</h3>
          <p className="text-stone-800 font-serif leading-relaxed italic bg-stone-50 p-6 rounded-sm">
            {result.aiInsight || "あなたの二の腕には、まだ眠っている本来の美しさがあります。"}
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xs tracking-widest text-stone-400 uppercase font-luxury mb-4 border-b border-stone-100 pb-2">Expert Advice</h3>
          <p className="text-stone-700 leading-relaxed">{result.topType.advice}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {result.topType.keywords.map(k => (
              <span key={k} className="text-[10px] tracking-widest uppercase bg-stone-100 text-stone-500 px-3 py-1 rounded-full">#{k}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-stone-900 text-white p-10 text-center rounded-sm">
        <h3 className="text-2xl font-bold mb-4">体験コースのご案内</h3>
        <p className="text-stone-400 text-sm mb-8 leading-relaxed">
          あなたのタイプに合わせたオーダーメイドケアを、<br />
          今なら特別価格でご体験いただけます。
        </p>
        <button className="w-full md:w-auto px-12 py-4 bg-white text-stone-900 font-bold tracking-widest hover:bg-stone-100 transition-all flex items-center justify-center gap-2 mx-auto">
          <LucideCalendar size={20} /> 無料カウンセリングを予約する
        </button>
        <p className="mt-4 text-[10px] text-stone-500 uppercase tracking-widest">Limited availability for new clients</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [step, setStep] = useState<'landing' | 'quiz' | 'loading' | 'result'>('landing');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<ArmType, number>>[]>([]);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);

  const startQuiz = () => setStep('quiz');

  const handleAnswer = useCallback(async (scores: Partial<Record<ArmType, number>>) => {
    const newAnswers = [...answers, scores];
    setAnswers(newAnswers);

    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setStep('loading');
      
      // Calculate final scores
      const finalScores: Record<ArmType, number> = {
        [ArmType.CHIFFON_EDEMA]: 0,
        [ArmType.MARBLE_CELLULITE]: 0,
        [ArmType.ANTIQUE_SAGGING]: 0,
        [ArmType.SHADOW_POSTURE]: 0,
        [ArmType.TENSE_MUSCLE]: 0,
        [ArmType.PRISM_MIXED]: 0,
      };

      newAnswers.forEach(answer => {
        // Fix: Explicitly cast score to number to fix 'unknown' type error in += operation
        Object.entries(answer).forEach(([type, score]) => {
          finalScores[type as ArmType] += (score as number) || 0;
        });
      });

      // Find winner
      const topTypeKey = Object.entries(finalScores).reduce((a, b) => (a[1] > b[1] ? a : b))[0] as ArmType;
      const topTypeInfo = ARM_TYPES[topTypeKey];

      // Get ChatGPT Insight
      const aiInsight = await getPersonalizedInsight(topTypeInfo);

      setDiagnosisResult({
        topType: topTypeInfo,
        scores: finalScores,
        aiInsight
      });
      setStep('result');
    }
  }, [answers, currentQuestionIdx]);

  const handleBack = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    } else {
      setStep('landing');
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <header className="py-8 px-6 flex justify-center border-b border-stone-50">
        <div className="font-luxury tracking-[0.4em] text-xl font-light uppercase text-stone-900">
          Elegance <span className="text-amber-700">Studio</span>
        </div>
      </header>

      <main className="container mx-auto pb-20">
        {step === 'landing' && <LandingPage onStart={startQuiz} />}
        
        {step === 'quiz' && (
          <QuestionView
            questionIdx={currentQuestionIdx}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        )}

        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 fade-in">
            <LucideLoader2 size={48} className="text-amber-600 animate-spin mb-6" />
            <div className="text-stone-400 font-luxury tracking-widest text-xs mb-2 uppercase">Analyzing Your Profile</div>
            <h2 className="text-xl font-serif text-stone-700">プロフェッショナルな知見で<br />あなたの二の腕を分析中...</h2>
          </div>
        )}

        {step === 'result' && diagnosisResult && (
          <ResultView result={diagnosisResult} />
        )}
      </main>

      <footer className="py-12 border-t border-stone-50 bg-stone-50/30 text-center">
        <p className="text-[10px] text-stone-400 tracking-[0.2em] uppercase">
          &copy; 2024 Elegance Studio Japan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
