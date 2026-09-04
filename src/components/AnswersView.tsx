import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Lightbulb,
  Sparkles,
  Award,
  Layers,
  ListOrdered,
  AlertTriangle,
  Compass
} from 'lucide-react';
import { ExamQuestion, Lecture, QuestionSteps, QuestionTips } from '../types';
import { SectionType } from './Sidebar';

interface AnswersViewProps {
  questions: ExamQuestion[];
  lectures: Lecture[];
  activeQuestionId: string;
  onSelectQuestion: (id: string) => void;
  onNavigate: (section: SectionType, targetId?: string) => void;
  reviewedQuestionIds: string[];
  practiceQuestionIds: string[];
  onToggleReviewed: (id: string) => void;
  onTogglePractice: (id: string) => void;
}

export const AnswersView: React.FC<AnswersViewProps> = ({
  questions,
  lectures,
  activeQuestionId,
  onSelectQuestion,
  onNavigate,
  reviewedQuestionIds,
  practiceQuestionIds,
  onToggleReviewed,
  onTogglePractice
}) => {
  const [activeTab, setActiveTab] = useState<'exam-ready' | 'learning'>('exam-ready');

  // Find active question or default to first
  const currentIndex = questions.findIndex((q) => q.id === activeQuestionId);
  const activeQuestion = questions[currentIndex >= 0 ? currentIndex : 0] || questions[0];

  const prevQuestion = currentIndex > 0 ? questions[currentIndex - 1] : null;
  const nextQuestion = currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;

  const isReviewed = activeQuestion ? reviewedQuestionIds.includes(activeQuestion.id) : false;
  const isPractice = activeQuestion ? practiceQuestionIds.includes(activeQuestion.id) : false;

  // Scroll to top when active question changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeQuestionId]);

  if (!activeQuestion) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-sm text-slate-500">
        No question selected.
      </div>
    );
  }

  // Derive safe Steps
  const steps: QuestionSteps = activeQuestion.steps || {
    step1_concept: `Theoretical Principle: Grounded in ${activeQuestion.lectureReference?.conceptName || 'Data Mining & Warehousing principles'}. Review ${activeQuestion.lectureReference?.lectureTitle || 'lecture notes'}.`,
    step2_approach: activeQuestion.stepByStepSolution && activeQuestion.stepByStepSolution.length > 0
      ? activeQuestion.stepByStepSolution[0]
      : 'Analyze the problem constraints, establish necessary definitions or parameters, and formulate the exact analytical path.',
    step3_working: activeQuestion.stepByStepSolution && activeQuestion.stepByStepSolution.length > 1
      ? activeQuestion.stepByStepSolution.slice(1).join('\n\n')
      : activeQuestion.explanation || 'Execute the step-by-step mathematical calculations and dimensional transformations as required.',
    step4_finalAnswer: activeQuestion.examAnswer
      ? activeQuestion.examAnswer.split('\n').slice(0, 4).join('\n') + (activeQuestion.examAnswer.split('\n').length > 4 ? '\n... (See Exam-Ready tab for full format)' : '')
      : 'Final verified academic output matching examination criteria.'
  };

  // Derive safe Tips
  const defaultTipsByQuestion: Record<string, QuestionTips> = {
    Q01: {
      commonMistakes: [
        "Confusing 'Constellation Schema' with snowflake schema (constellation has MULTIPLE fact tables sharing dimensions).",
        "Writing 'drill down' when describing hierarchy ascent (moving up is Roll-up).",
        "Omitting any of Inmon's 4 properties: subject-oriented, integrated, time-variant, non-volatile."
      ],
      keyKeywords: [
        'subject-oriented',
        'fact table',
        'constellation schema',
        'roll up',
        'pivot',
        'drill across',
        'multidimensional array',
        'Velocity',
        'apex cuboid'
      ]
    },
    Q02: {
      commonMistakes: [
        'Attempting binning formulas on unsorted data without sorting values in ascending order first.',
        'In boundary smoothing, replacing items with the bin mean instead of the closer boundary endpoint.',
        'In MaxDiff histogram, choosing the highest numbers instead of the largest differences between consecutive sorted numbers.'
      ],
      keyKeywords: [
        'Ascending Order',
        'Width W = (Max - Min)/N',
        'Equal-Depth (N/B)',
        'Boundary Smoothing',
        'MaxDiff Gaps',
        'Min-Max Normalization',
        'AOI Attribute Removal'
      ]
    },
    Q03: {
      commonMistakes: [
        'Replacing values with count >= minsup with * (only values STRICTLY LESS than minsup receive the *).',
        'Forgetting to combine duplicate tuples after star replacement and omitting the count column.',
        'Leaving out the 0-D Apex cuboid when enumerating the 2^n cuboid lattice.'
      ],
      keyKeywords: [
        'Minsup Threshold',
        'Wildcard (*)',
        'Lossless Iceberg Compression',
        'Star Table',
        '0-D Apex Cuboid',
        '2^n Cuboids',
        'Multiway Array Aggregation'
      ]
    },
    Q04: {
      commonMistakes: [
        'Using base-10 log or natural log instead of base-2 log (log2) from the provided exam table.',
        'Dividing by total transactions N when calculating Confidence (Confidence denominator MUST be count(X)).',
        'Forgetting to recognize that pure partitions (100% genuine or 100% fraud) have Entropy = 0.0 bits and immediately terminate as leaf nodes.'
      ],
      keyKeywords: [
        'Support P(X U Y)',
        'Confidence P(Y|X)',
        'Entropy -sum(p log2 p)',
        'Weighted Info_A(D)',
        'Information Gain',
        'Pure Leaf Node (Entropy=0.0)'
      ]
    }
  };

  const tips: QuestionTips = activeQuestion.tips || defaultTipsByQuestion[activeQuestion.id] || {
    commonMistakes: [
      'Overlooking specific notation requirements given in the question header.',
      'Failing to show intermediate working or formulas before presenting final values.'
    ],
    keyKeywords: activeQuestion.topics.slice(0, 6)
  };

  const summaryText = activeQuestion.summary || activeQuestion.title;
  const examReadyContent = activeQuestion.examReadyAnswer || activeQuestion.examAnswer || activeQuestion.answer;
  const learningContent = activeQuestion.learningExplanation || activeQuestion.explanation;
  const slideRef = activeQuestion.lectureReference?.slideReference || activeQuestion.lectureReference?.specificNote || 'Refer to lecture slides';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Question Selector Carousel / Pill Bar */}
      <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center justify-between gap-3 overflow-x-auto">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider pl-1">
            Questions:
          </span>
          {questions.map((q) => {
            const isCurrent = q.id === activeQuestion.id;
            const rev = reviewedQuestionIds.includes(q.id);
            return (
              <button
                key={q.id}
                id={`pill-select-question-${q.id}`}
                onClick={() => onSelectQuestion(q.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300 dark:ring-indigo-800'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{q.questionCode}</span>
                {rev && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('past-paper')}
            className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Past Paper</span>
          </button>
        </div>
      </div>

      {/* Main Solution Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-8">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white">
                {activeQuestion.questionCode}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {activeQuestion.marks} Marks Total
              </span>
              <span
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  activeQuestion.difficulty === 'Easy'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                    : activeQuestion.difficulty === 'Medium'
                    ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                    : 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                }`}
              >
                {activeQuestion.difficulty} Difficulty
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {activeQuestion.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl">
              {summaryText}
            </p>
          </div>

          {/* Action Flags */}
          <div className="flex items-center gap-2 self-start lg:self-center">
            <button
              onClick={() => onToggleReviewed(activeQuestion.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold border transition-colors flex items-center gap-1.5 ${
                isReviewed
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{isReviewed ? 'Reviewed' : 'Mark Reviewed'}</span>
            </button>

            <button
              onClick={() => onTogglePractice(activeQuestion.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold border transition-colors flex items-center gap-1.5 ${
                isPractice
                  ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>{isPractice ? 'Flagged Practice' : 'Flag for Practice'}</span>
            </button>
          </div>
        </div>

        {/* Academic Source Reference Callout */}
        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 tracking-wider">
                Academic Lecture Source:
              </span>
              <p className="font-semibold text-slate-900 dark:text-slate-100 text-xs sm:text-sm mt-0.5">
                {activeQuestion.lectureReference?.lectureTitle} ({activeQuestion.lectureReference?.lectureId})
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                Slide/Section: {slideRef} • Core Concept: {activeQuestion.lectureReference?.conceptName}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('lectures', activeQuestion.lectureIds?.[0])}
            className="px-3.5 py-1.5 rounded-xl bg-amber-200/60 hover:bg-amber-200 dark:bg-amber-900/80 dark:hover:bg-amber-800 text-amber-900 dark:text-amber-100 font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5 self-start sm:self-center"
          >
            <span>Open Lecture Notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* The Exact Question Text Box */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Original Exam Question
          </span>
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
            {activeQuestion.exactQuestionText}
          </div>
        </div>

        {/* Step-by-Step Structured Approach (Steps 1 to 4) */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ListOrdered className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Step-by-Step Solution Methodology</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Step 1: Concept Understanding
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed whitespace-pre-wrap">
                {steps.step1_concept}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40">
              <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Step 2: Approach &amp; Strategy
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed whitespace-pre-wrap">
                {steps.step2_approach}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Step 3: Calculations &amp; Working
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed whitespace-pre-wrap">
                {steps.step3_working}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Step 4: Final Academic Answer
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed whitespace-pre-wrap">
                {steps.step4_finalAnswer}
              </p>
            </div>
          </div>
        </div>

        {/* View Tabs: [Exam-Ready Answer] vs [Learning Explanation] */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <button
                id="tab-exam-ready-btn"
                onClick={() => setActiveTab('exam-ready')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'exam-ready'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Exam-Ready Answer (Full Marks Format)</span>
              </button>

              <button
                id="tab-learning-explanation-btn"
                onClick={() => setActiveTab('learning')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'learning'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Learning Explanation (The "Why" &amp; "How")</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'exam-ready' ? (
            <div className="p-6 rounded-2xl bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/50 space-y-4">
              <div className="flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-400 font-semibold border-b border-indigo-100 dark:border-indigo-900/40 pb-2">
                <span>Direct, complete university examination model answer</span>
                <span className="text-[11px] bg-indigo-100 dark:bg-indigo-900/80 px-2 py-0.5 rounded text-indigo-800 dark:text-indigo-200">
                  Target: {activeQuestion.marks}/{activeQuestion.marks} Marks
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-100 whitespace-pre-wrap leading-relaxed">
                {examReadyContent}
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                Deep conceptual breakdown explaining underlying principles and syllabus rules
              </div>
              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed font-sans">
                {learningContent}
              </div>
            </div>
          )}
        </div>

        {/* Sub-Parts Detailed Section (if question has sub-parts) */}
        {activeQuestion.subParts && activeQuestion.subParts.length > 0 && (
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Sub-Parts Breakdown ({activeQuestion.subParts.length} Parts)</span>
            </h3>

            <div className="space-y-3">
              {activeQuestion.subParts.map((sp) => (
                <div
                  key={sp.partId}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">
                      {sp.label}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-200/70 dark:bg-slate-700 px-2 py-0.5 rounded">
                      {sp.marks} Mark{sp.marks > 1 ? 's' : ''}
                    </span>
                  </div>

                  <p className="text-xs text-slate-800 dark:text-slate-200 font-mono">
                    {sp.text}
                  </p>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      Answer: {sp.examAnswer || sp.answer}
                    </span>
                    {sp.explanation && (
                      <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-1">
                        {sp.explanation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exam Tips Callouts: Common Mistakes & Required Keywords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Common Mistakes */}
          <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Common Mistakes to Avoid</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {tips.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Keywords Required */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>Keywords Required for Full Marks</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tips.keyKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-emerald-100/70 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200 text-xs font-semibold"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Controls: [Prev] [Next] [Back to Paper] [Go to Lectures] */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {prevQuestion ? (
              <button
                id="prev-question-btn"
                onClick={() => onSelectQuestion(prevQuestion.id)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev ({prevQuestion.questionCode})</span>
              </button>
            ) : (
              <div />
            )}

            {nextQuestion && (
              <button
                id="next-question-btn"
                onClick={() => onSelectQuestion(nextQuestion.id)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-2xs flex items-center gap-1.5 transition-colors"
              >
                <span>Next ({nextQuestion.questionCode})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('past-paper')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Back to Past Paper
            </button>

            <button
              onClick={() => onNavigate('lectures', activeQuestion.lectureIds?.[0])}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Go to Lecture Notes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
