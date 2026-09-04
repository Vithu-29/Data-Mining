import React from 'react';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Compass,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Award,
  Calendar,
  Layers,
  GraduationCap,
  TrendingUp,
  Clock
} from 'lucide-react';
import { SectionType } from './Sidebar';
import { ExamQuestion, Lecture, Topic } from '../types';

interface DashboardViewProps {
  onNavigate: (section: SectionType, targetId?: string) => void;
  questions: ExamQuestion[];
  lectures: Lecture[];
  topics: Topic[];
  reviewedQuestionIds: string[];
  practiceQuestionIds: string[];
  onToggleReviewed: (id: string) => void;
  onTogglePractice: (id: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigate,
  questions,
  lectures,
  topics,
  reviewedQuestionIds,
  practiceQuestionIds,
  onToggleReviewed,
  onTogglePractice
}) => {
  const totalQuestions = questions.length;
  const reviewedCount = reviewedQuestionIds.length;
  const practiceCount = practiceQuestionIds.length;
  const progressPercent = Math.round((reviewedCount / totalQuestions) * 100);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 md:p-10 shadow-xl shadow-indigo-950/20">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 mb-4 backdrop-blur-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>University of Moratuwa • Faculty of Information Technology</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            IN 3410: Data Mining &amp; Data Warehousing
          </h1>

          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            Official Exam Preparation Platform grounded exclusively in the approved lecture materials and the November 2025 past paper. Master every algorithm, schema, and past paper question.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              id="start-revision-hero-btn"
              onClick={() => onNavigate('revision')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-sm shadow-md transition-all group"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 group-hover:rotate-12 transition-transform" />
              <span>Start Exam Revision</span>
              <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              id="browse-past-paper-hero-btn"
              onClick={() => onNavigate('past-paper')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-700/50 hover:bg-indigo-700 text-white border border-indigo-500/40 font-semibold text-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Browse Past Paper</span>
            </button>
          </div>
        </div>

        {/* Decorative corner badge */}
        <div className="absolute -right-6 -bottom-6 w-56 h-56 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Exam Questions</span>
            <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">4</span>
            <span className="text-xs text-slate-500">(100 Marks)</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            20 Fill-in-the-blanks + 10 Multi-part problems
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Lecture Modules</span>
            <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">{lectures.length}</span>
            <span className="text-xs text-slate-500">Lectures</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Chapters 1-6 &amp; 9 by S. Premaratne
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Answered</span>
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {totalQuestions}/{totalQuestions}
            </span>
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded">
              100%
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Every question fully solved with working
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Topics Covered</span>
            <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">{topics.length}</span>
            <span className="text-xs text-slate-500">Core Topics</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Cross-referenced with lecture notes
          </p>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div>
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span>Quick Study Access</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            id="quick-card-past-paper"
            onClick={() => onNavigate('past-paper')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500/70 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Past Paper
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              View the November 2025 exam paper structured into searchable, interactive questions.
            </p>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
              Browse paper <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            id="quick-card-answers"
            onClick={() => onNavigate('answers')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500/70 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Question Answers
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Study exam-level step-by-step solutions with both learning explanations and exam answers.
            </p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1">
              View solutions <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            id="quick-card-lectures"
            onClick={() => onNavigate('lectures')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500/70 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              Lecture Notes
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Read all uploaded slide materials rewritten into clear, conceptual study notes with examples.
            </p>
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1">
              Read notes <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            id="quick-card-topics"
            onClick={() => onNavigate('topics')}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500/70 hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Topic Explorer
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Explore syllabus topics connecting lectures, formulas, worked examples, and past questions.
            </p>
            <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 inline-flex items-center gap-1">
              Explore topics <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Split Section: Paper Overview + Study Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Past Paper Structure Overview */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Last Year Past Paper Overview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                November 2025 • Semester 6 Examination • Closed-Book • 3 Hours
              </p>
            </div>
            <button
              onClick={() => onNavigate('past-paper')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              Full paper <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {questions.map((q) => {
              const isReviewed = reviewedQuestionIds.includes(q.id);
              const isPractice = practiceQuestionIds.includes(q.id);
              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-0.5 rounded-md border border-indigo-200/50 dark:border-indigo-800/50">
                        {q.questionCode}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {q.title}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/70 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                        [{q.marks} Marks]
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Lectures: {q.lectureIds.join(', ')}</span>
                      <span>•</span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {q.difficulty} Difficulty
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={() => onToggleReviewed(q.id)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium border transition-colors flex items-center gap-1 ${
                        isReviewed
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isReviewed ? 'Reviewed' : 'Mark Reviewed'}</span>
                    </button>

                    <button
                      onClick={() => onNavigate('answers', q.id)}
                      className="text-xs px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-2xs transition-colors"
                    >
                      View Answer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Study Progress Tracker */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Study Progress</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Track question readiness before taking the exam.
            </p>

            {/* Circular / Progress Metric */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 mb-6 text-center">
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                {progressPercent}%
              </div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Exam Readiness Score
              </p>
              <div className="w-full h-2 bg-indigo-200/60 dark:bg-indigo-900/60 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Reviewed Questions
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {reviewedCount} / {totalQuestions}
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  Flagged for Practice
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {practiceCount}
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  Exam Time Allowed
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  3 Hours
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('revision')}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors text-center"
          >
            Review High Priority Formulas
          </button>
        </div>
      </div>
    </div>
  );
};
