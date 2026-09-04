import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, FileText, Compass, Sparkles, Hash, ArrowRight } from 'lucide-react';
import { ExamQuestion, Lecture, Topic, FormulaItem, KeyDefinition } from '../types';
import { SectionType } from './Sidebar';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: ExamQuestion[];
  lectures: Lecture[];
  topics: Topic[];
  formulas: FormulaItem[];
  definitions: KeyDefinition[];
  onNavigate: (section: SectionType, targetId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  questions,
  lectures,
  topics,
  formulas,
  definitions,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search Questions
  const matchedQuestions = normalizedQuery
    ? questions.filter((q) => {
        return (
          q.questionCode.toLowerCase().includes(normalizedQuery) ||
          q.title.toLowerCase().includes(normalizedQuery) ||
          q.exactQuestionText.toLowerCase().includes(normalizedQuery) ||
          q.topics.some((t) => t.toLowerCase().includes(normalizedQuery)) ||
          q.answer.toLowerCase().includes(normalizedQuery) ||
          (q.subParts && q.subParts.some((sp) => sp.text.toLowerCase().includes(normalizedQuery) || sp.answer.toLowerCase().includes(normalizedQuery)))
        );
      })
    : [];

  // Search Lectures & Concepts
  const matchedLectures = normalizedQuery
    ? lectures.filter((l) => {
        return (
          l.title.toLowerCase().includes(normalizedQuery) ||
          l.shortTitle.toLowerCase().includes(normalizedQuery) ||
          l.code.toLowerCase().includes(normalizedQuery) ||
          l.overview.toLowerCase().includes(normalizedQuery) ||
          l.concepts.some(
            (c) =>
              c.name.toLowerCase().includes(normalizedQuery) ||
              c.simpleExplanation.toLowerCase().includes(normalizedQuery) ||
              c.formalDefinition.toLowerCase().includes(normalizedQuery)
          )
        );
      })
    : [];

  // Search Topics
  const matchedTopics = normalizedQuery
    ? topics.filter((t) => {
        return (
          t.name.toLowerCase().includes(normalizedQuery) ||
          t.category.toLowerCase().includes(normalizedQuery) ||
          t.summary.toLowerCase().includes(normalizedQuery) ||
          t.explanation.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  // Search Formulas
  const matchedFormulas = normalizedQuery
    ? formulas.filter((f) => {
        return (
          f.name.toLowerCase().includes(normalizedQuery) ||
          f.description.toLowerCase().includes(normalizedQuery) ||
          f.category.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  // Search Definitions
  const matchedDefinitions = normalizedQuery
    ? definitions.filter((d) => {
        return (
          d.term.toLowerCase().includes(normalizedQuery) ||
          d.academicDefinition.toLowerCase().includes(normalizedQuery) ||
          d.simpleExplanation.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  const totalMatches =
    matchedQuestions.length +
    matchedLectures.length +
    matchedTopics.length +
    matchedFormulas.length +
    matchedDefinitions.length;

  return (
    <div
      id="global-search-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:pt-20"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50/50 dark:bg-slate-800/40">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions (e.g. 'Question 2', 'Entropy'), topics, lectures..."
            className="w-full bg-transparent border-0 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-slate-100 dark:divide-slate-800/80">
          {!normalizedQuery && (
            <div className="py-8 text-center text-slate-500 dark:text-slate-400">
              <p className="text-sm font-medium mb-1">Type keywords to search across the entire curriculum</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">"Entropy"</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">"Star Reduction"</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">"Binning"</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">"Support &amp; Confidence"</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">"Kimball"</span>
              </div>
            </div>
          )}

          {normalizedQuery && totalMatches === 0 && (
            <div className="py-8 text-center text-slate-500 dark:text-slate-400">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for specific syllabus topics like "Inmon", "Cuboid", "AOI", or "Decision Tree".
              </p>
            </div>
          )}

          {/* Matched Questions */}
          {matchedQuestions.length > 0 && (
            <div className="py-3">
              <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                Exam Questions ({matchedQuestions.length})
              </p>
              <div className="space-y-1.5">
                {matchedQuestions.map((q) => (
                  <div
                    key={q.id}
                    onClick={() => {
                      onNavigate('answers', q.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-indigo-600 dark:text-indigo-400">
                          {q.questionCode}
                        </span>
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          {q.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {q.marks} Marks
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {q.exactQuestionText}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Topics */}
          {matchedTopics.length > 0 && (
            <div className="py-3">
              <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-500" />
                Topics ({matchedTopics.length})
              </p>
              <div className="space-y-1.5">
                {matchedTopics.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      onNavigate('topics', t.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-xs text-emerald-600 dark:text-emerald-400 mr-2">
                        {t.category}
                      </span>
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {t.name}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {t.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Lectures */}
          {matchedLectures.length > 0 && (
            <div className="py-3">
              <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                Lectures ({matchedLectures.length})
              </p>
              <div className="space-y-1.5">
                {matchedLectures.map((l) => (
                  <div
                    key={l.id}
                    onClick={() => {
                      onNavigate('lectures', l.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-amber-600 dark:text-amber-400">
                          {l.code}
                        </span>
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          {l.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {l.overview}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Formulas & Definitions */}
          {(matchedFormulas.length > 0 || matchedDefinitions.length > 0) && (
            <div className="py-3">
              <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                Formulas &amp; Definitions ({matchedFormulas.length + matchedDefinitions.length})
              </p>
              <div className="space-y-1.5">
                {matchedFormulas.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onNavigate('revision', f.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-semibold mr-2">
                        Formula
                      </span>
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {f.name}
                      </span>
                      <code className="block text-[11px] text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">
                        {f.formula}
                      </code>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 shrink-0 ml-2" />
                  </div>
                ))}

                {matchedDefinitions.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => {
                      onNavigate('revision', d.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-semibold mr-2">
                        Definition
                      </span>
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {d.term}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {d.academicDefinition}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>Tip: Jump directly between questions and lectures</span>
        </div>
      </div>
    </div>
  );
};
