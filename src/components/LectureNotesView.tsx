import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Bookmark,
  Layers,
  HelpCircle,
  Clock,
  Award
} from 'lucide-react';
import { Lecture, ExamQuestion } from '../types';
import { SectionType } from './Sidebar';

interface LectureNotesViewProps {
  lectures: Lecture[];
  questions: ExamQuestion[];
  activeLectureId: string;
  onSelectLecture: (id: string) => void;
  onNavigate: (section: SectionType, targetId?: string) => void;
}

export const LectureNotesView: React.FC<LectureNotesViewProps> = ({
  lectures,
  questions,
  activeLectureId,
  onSelectLecture,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedConceptIdx, setExpandedConceptIdx] = useState<number | null>(0);

  // Active lecture
  const currentLecture = lectures.find((l) => l.id === activeLectureId) || lectures[0];

  // Filter lectures if search is active
  const filteredLectures = useMemo(() => {
    if (!searchQuery) return lectures;
    const q = searchQuery.toLowerCase();
    return lectures.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.shortTitle.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q) ||
        l.overview.toLowerCase().includes(q) ||
        l.concepts.some(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.simpleExplanation.toLowerCase().includes(q) ||
            c.formalDefinition.toLowerCase().includes(q)
        )
    );
  }, [lectures, searchQuery]);

  // Questions connected to this lecture
  const connectedQuestions = questions.filter((q) =>
    currentLecture.examFocus.relatedQuestionIds.includes(q.id) ||
    q.lectureIds.includes(currentLecture.id)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                Curriculum Study Notes
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                8 Comprehensive Lectures • Formatted for Rapid Revision
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Data Mining &amp; Warehousing Lecture Notes
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Each concept rewritten with plain explanations, formal definitions, worked mechanics, and exam connections.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              id="lecture-notes-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, algorithms..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Lecture Pill selector */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto pb-1">
          {lectures.map((lec) => {
            const isSelected = lec.id === currentLecture.id;
            return (
              <button
                key={lec.id}
                id={`lecture-pill-${lec.id}`}
                onClick={() => {
                  onSelectLecture(lec.id);
                  setExpandedConceptIdx(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300 dark:ring-amber-800'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>{lec.code}</span>
                <span className="hidden sm:inline text-[11px] opacity-80">
                  {lec.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Lecture Summary & Exam Links */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-2xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                {currentLecture.code}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {currentLecture.concepts.length} Concepts
              </span>
            </div>

            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {currentLecture.title}
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentLecture.overview}
            </p>

            {/* Learning Objectives */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                Learning Objectives:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {currentLecture.learningObjectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exam Connection Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
              <Award className="w-4 h-4" />
              <span>Exam Connection &amp; Past Paper</span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentLecture.examFocus.summary}
            </p>

            {connectedQuestions.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Questions From This Lecture:
                </span>
                {connectedQuestions.map((q) => (
                  <div
                    key={q.id}
                    onClick={() => onNavigate('answers', q.id)}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-slate-200/60 dark:border-slate-700/60 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">
                          {q.questionCode}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                          [{q.marks} Marks]
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {q.title}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 shrink-0" />
                  </div>
                ))}
              </div>
            )}

            <button
              id="practice-these-questions-btn"
              onClick={() => {
                if (connectedQuestions[0]) {
                  onNavigate('answers', connectedQuestions[0].id);
                } else {
                  onNavigate('past-paper');
                }
              }}
              className="w-full mt-2 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Practice These Questions</span>
            </button>
          </div>
        </div>

        {/* Right Column: Key Concepts Accordion / Detailed Cards */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Core Concepts Explained in Detail</span>
            </h3>
            <span className="text-xs text-slate-500">
              Click concept cards to expand
            </span>
          </div>

          <div className="space-y-3">
            {currentLecture.concepts.map((concept, idx) => {
              const isExpanded = expandedConceptIdx === idx;
              return (
                <div
                  key={idx}
                  id={`concept-card-${idx}`}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-2xs transition-all"
                >
                  {/* Card Header */}
                  <div
                    onClick={() => setExpandedConceptIdx(isExpanded ? null : idx)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {concept.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {concept.simpleExplanation}
                        </p>
                      </div>
                    </div>

                    <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="p-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-5 text-xs animate-fade-in">
                      {/* What is it? (Simple explanation) */}
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                        <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] block mb-1">
                          What is it? (Simple Explanation)
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {concept.simpleExplanation}
                        </p>
                      </div>

                      {/* Formal Academic Definition */}
                      <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                        <span className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider text-[10px] block mb-1">
                          Formal Academic Definition
                        </span>
                        <p className="text-slate-800 dark:text-slate-200 font-mono text-[11px] leading-relaxed">
                          "{concept.formalDefinition}"
                        </p>
                      </div>

                      {/* How does it work? */}
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] block mb-2">
                          How Does It Work?
                        </span>
                        <div className="space-y-1.5">
                          {(Array.isArray(concept.howItWorks)
                            ? concept.howItWorks
                            : typeof concept.howItWorks === 'string'
                            ? concept.howItWorks.split('\n').map((l) => l.trim()).filter((l) => l.length > 0)
                            : []
                          ).map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 text-[10px]">
                                {sIdx + 1}
                              </span>
                              <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
                        <span className="font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider text-[10px] block mb-1">
                          Worked Example
                        </span>
                        <p className="text-slate-800 dark:text-slate-200 font-mono text-[11px] leading-relaxed">
                          {concept.example}
                        </p>
                      </div>

                      {/* Important to Remember & Common Mistake */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40">
                          <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-[11px] mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Important to Remember</span>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
                            {concept.importantToRemember}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40">
                          <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 font-bold text-[11px] mb-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Common Mistake</span>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
                            {concept.commonMistake || 'Failing to include specific academic definitions or formal notations.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
