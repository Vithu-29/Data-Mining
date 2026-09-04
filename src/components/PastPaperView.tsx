import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Compass,
  ArrowRight,
  HelpCircle,
  Check,
  RotateCcw
} from 'lucide-react';
import { ExamQuestion, Lecture, Topic } from '../types';
import { SectionType } from './Sidebar';

interface PastPaperViewProps {
  questions: ExamQuestion[];
  lectures: Lecture[];
  topics: Topic[];
  reviewedQuestionIds: string[];
  practiceQuestionIds: string[];
  onToggleReviewed: (id: string) => void;
  onTogglePractice: (id: string) => void;
  onNavigate: (section: SectionType, targetId?: string) => void;
}

export const PastPaperView: React.FC<PastPaperViewProps> = ({
  questions,
  lectures,
  topics,
  reviewedQuestionIds,
  practiceQuestionIds,
  onToggleReviewed,
  onTogglePractice,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLecture, setSelectedLecture] = useState<string>('ALL');
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'REVIEWED' | 'PRACTICE'>('ALL');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(questions[0]?.id || '');

  // Unique list of all topics across questions
  const allTopicNames = useMemo(() => {
    const set = new Set<string>();
    questions.forEach((q) => q.topics.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [questions]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Search
      const matchSearch =
        !searchQuery ||
        q.questionCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.exactQuestionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Lecture
      const matchLecture =
        selectedLecture === 'ALL' || q.lectureIds.includes(selectedLecture);

      // Topic
      const matchTopic =
        selectedTopic === 'ALL' || q.topics.includes(selectedTopic);

      // Difficulty
      const matchDifficulty =
        selectedDifficulty === 'ALL' || q.difficulty === selectedDifficulty;

      // Status
      const isReviewed = reviewedQuestionIds.includes(q.id);
      const isPractice = practiceQuestionIds.includes(q.id);
      const matchStatus =
        selectedStatus === 'ALL' ||
        (selectedStatus === 'REVIEWED' && isReviewed) ||
        (selectedStatus === 'PRACTICE' && isPractice);

      return (
        matchSearch &&
        matchLecture &&
        matchTopic &&
        matchDifficulty &&
        matchStatus
      );
    });
  }, [
    questions,
    searchQuery,
    selectedLecture,
    selectedTopic,
    selectedDifficulty,
    selectedStatus,
    reviewedQuestionIds,
    practiceQuestionIds
  ]);

  const activeQuestion = questions.find((q) => q.id === selectedQuestionId) || questions[0];

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLecture('ALL');
    setSelectedTopic('ALL');
    setSelectedDifficulty('ALL');
    setSelectedStatus('ALL');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header bar */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                Official Exam Paper
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                November 2025 • Semester 6 Examination
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              IN 3410 - Data Mining &amp; Data Warehousing Past Paper
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Time Allowed: 3 hours • Total Marks: 100 • Answer ALL 4 Questions • Non-programmable calculators allowed
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('answers', activeQuestion?.id)}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Solve Selected Question</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              id="past-paper-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search question text..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Lecture Filter */}
          <div>
            <select
              id="filter-lecture-select"
              value={selectedLecture}
              onChange={(e) => setSelectedLecture(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden"
            >
              <option value="ALL">All Lectures</option>
              {lectures.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.code} - {l.shortTitle}
                </option>
              ))}
            </select>
          </div>

          {/* Topic Filter */}
          <div>
            <select
              id="filter-topic-select"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden"
            >
              <option value="ALL">All Topics</option>
              {allTopicNames.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              id="filter-difficulty-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden"
            >
              <option value="ALL">All Difficulties</option>
              <option value="Easy">Easy (Direct recall)</option>
              <option value="Medium">Medium (Application)</option>
              <option value="Hard">Hard (Multi-step calc)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <select
              id="filter-status-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden"
            >
              <option value="ALL">All Status</option>
              <option value="REVIEWED">Reviewed Only</option>
              <option value="PRACTICE">Needs Practice Only</option>
            </select>

            {(searchQuery || selectedLecture !== 'ALL' || selectedTopic !== 'ALL' || selectedDifficulty !== 'ALL' || selectedStatus !== 'ALL') && (
              <button
                onClick={resetFilters}
                title="Reset filters"
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Question List on Left, Active Question Detail on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Question selector pills */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Questions ({filteredQuestions.length})
            </span>
            <span className="text-[11px] text-slate-400">
              Total 100 Marks
            </span>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="p-6 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              No questions match the current filters.
              <button onClick={resetFilters} className="block mx-auto mt-2 text-indigo-600 dark:text-indigo-400 font-semibold underline">
                Reset filters
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filteredQuestions.map((q) => {
                const isSelected = q.id === selectedQuestionId;
                const isReviewed = reviewedQuestionIds.includes(q.id);
                const isPractice = practiceQuestionIds.includes(q.id);

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    onClick={() => setSelectedQuestionId(q.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50/90 dark:bg-indigo-950/70 border-indigo-500 dark:border-indigo-500 shadow-sm ring-1 ring-indigo-500/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">
                          {q.questionCode}
                        </span>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">
                          {q.marks} Marks
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isReviewed && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                            <Check className="w-3 h-3" />
                            Reviewed
                          </span>
                        )}
                        {isPractice && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-1.5 py-0.5 rounded">
                            <AlertCircle className="w-3 h-3" />
                            Practice
                          </span>
                        )}
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                            q.difficulty === 'Easy'
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                              : q.difficulty === 'Medium'
                              ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                      {q.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                      {q.exactQuestionText}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {q.topics.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                      {q.topics.length > 2 && (
                        <span className="text-[10px] px-1 py-0.5 text-slate-400">
                          +{q.topics.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Full Question Detailed Card */}
        <div className="lg:col-span-8">
          {activeQuestion ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
              {/* Question Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-600 text-white">
                      {activeQuestion.questionCode}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                      {activeQuestion.marks} Marks
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${
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
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {activeQuestion.title}
                  </h2>
                </div>

                {/* Status toggles */}
                <div className="flex items-center gap-2">
                  <button
                    id={`toggle-reviewed-btn-${activeQuestion.id}`}
                    onClick={() => onToggleReviewed(activeQuestion.id)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium border transition-colors flex items-center gap-1.5 ${
                      reviewedQuestionIds.includes(activeQuestion.id)
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>
                      {reviewedQuestionIds.includes(activeQuestion.id)
                        ? 'Reviewed'
                        : 'Mark Reviewed'}
                    </span>
                  </button>

                  <button
                    id={`toggle-practice-btn-${activeQuestion.id}`}
                    onClick={() => onTogglePractice(activeQuestion.id)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium border transition-colors flex items-center gap-1.5 ${
                      practiceQuestionIds.includes(activeQuestion.id)
                        ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>
                      {practiceQuestionIds.includes(activeQuestion.id)
                        ? 'Need Practice'
                        : 'Flag Practice'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Related Lecture & Topics Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <div>
                  <span className="text-slate-400 dark:text-slate-500 font-semibold uppercase text-[10px] block mb-1">
                    Related Lecture Material:
                  </span>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    <span>{activeQuestion.lectureReference.lectureTitle}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Concept: {activeQuestion.lectureReference.conceptName}
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 dark:text-slate-500 font-semibold uppercase text-[10px] block mb-1">
                    Relevant Topics:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {activeQuestion.topics.map((top, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                      >
                        {top}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exact Question Text */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Full Question Text (As printed on examination paper):
                </span>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                  {activeQuestion.exactQuestionText}
                </div>
              </div>

              {/* Action Buttons as requested: [View Answer] [View Lecture] [Study Topic] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id="view-answer-from-paper-btn"
                  onClick={() => onNavigate('answers', activeQuestion.id)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>View Complete Answer &amp; Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="view-lecture-from-paper-btn"
                  onClick={() => onNavigate('lectures', activeQuestion.lectureIds[0])}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>View Lecture Notes</span>
                </button>

                <button
                  id="study-topic-from-paper-btn"
                  onClick={() => onNavigate('topics')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-purple-500" />
                  <span>Study Relevant Topic</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-sm text-slate-500">
              Select a question to view its contents.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
