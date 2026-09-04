import React, { useState, useMemo } from 'react';
import {
  Compass,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Filter,
  Sparkles,
  Layers,
  Code,
  FileText
} from 'lucide-react';
import { Topic, Lecture, ExamQuestion } from '../types';
import { SectionType } from './Sidebar';

interface TopicExplorerViewProps {
  topics: Topic[];
  lectures: Lecture[];
  questions: ExamQuestion[];
  activeTopicId: string;
  onSelectTopic: (id: string) => void;
  onNavigate: (section: SectionType, targetId?: string) => void;
}

export const TopicExplorerView: React.FC<TopicExplorerViewProps> = ({
  topics,
  lectures,
  questions,
  activeTopicId,
  onSelectTopic,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    topics.forEach((t) => set.add(t.category));
    return ['ALL', ...Array.from(set)];
  }, [topics]);

  // Filtered topics
  const filteredTopics = useMemo(() => {
    if (selectedCategory === 'ALL') return topics;
    return topics.filter((t) => t.category === selectedCategory);
  }, [topics, selectedCategory]);

  // Active topic
  const activeTopic = topics.find((t) => t.id === activeTopicId) || filteredTopics[0] || topics[0];

  // Related questions
  const relatedQuestions = questions.filter((q) =>
    activeTopic.questionIds.includes(q.id) ||
    q.topics.some((qt) => activeTopic.name.toLowerCase().includes(qt.toLowerCase()) || qt.toLowerCase().includes(activeTopic.name.toLowerCase()))
  );

  // Related lectures
  const relatedLectures = lectures.filter((l) =>
    activeTopic.lectureIds.includes(l.id)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                Syllabus Synthesis
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Cross-Topic Knowledge Map
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Topic Explorer
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore syllabus topics connecting lecture slides, mathematical formulas, worked examples, and past exam questions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat === 'ALL' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Topic List */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Topics ({filteredTopics.length})
            </span>
          </div>

          {filteredTopics.map((topic) => {
            const isSelected = topic.id === activeTopic.id;
            return (
              <div
                key={topic.id}
                id={`topic-item-${topic.id}`}
                onClick={() => onSelectTopic(topic.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50/80 dark:bg-purple-950/70 border-purple-500 dark:border-purple-500 shadow-sm ring-1 ring-purple-500/30'
                    : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100/70 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300">
                    {topic.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {topic.questionIds.length} Exam Qs
                  </span>
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  {topic.name}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                  {topic.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Topic Comprehensive Explorer */}
        <div className="lg:col-span-8">
          {activeTopic && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
              {/* Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-600 text-white">
                  {activeTopic.category}
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {activeTopic.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {activeTopic.summary}
                </p>
              </div>

              {/* Comprehensive Concept Explanation */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Detailed Academic Overview
                </span>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {activeTopic.explanation}
                </div>
              </div>

              {/* Key Points */}
              {activeTopic.keyPoints && activeTopic.keyPoints.length > 0 && (
                <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40">
                  <span className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block mb-2">
                    Key Revision Takeaways:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeTopic.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Formulas (if applicable) */}
              {activeTopic.formulas && activeTopic.formulas.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Mathematical Formulas
                  </span>
                  <div className="space-y-2">
                    {activeTopic.formulas.map((form, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs"
                      >
                        <div className="font-bold text-indigo-900 dark:text-indigo-200 mb-1">
                          {form.name}
                        </div>
                        <code className="block p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 font-mono text-indigo-700 dark:text-indigo-300 text-xs my-1.5">
                          {form.formula}
                        </code>
                        <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                          {form.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practical Worked Examples */}
              {activeTopic.examples && activeTopic.examples.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Worked Examples
                  </span>
                  <div className="space-y-2">
                    {activeTopic.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-slate-800 dark:text-slate-200 font-mono leading-relaxed"
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cross Links: Related Lectures & Related Questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Related Lectures */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    Related Lectures ({relatedLectures.length})
                  </span>
                  <div className="space-y-1.5">
                    {relatedLectures.map((lec) => (
                      <button
                        key={lec.id}
                        onClick={() => onNavigate('lectures', lec.id)}
                        className="w-full text-left p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs transition-colors"
                      >
                        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {lec.code}: {lec.shortTitle}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Related Past-Paper Questions */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                    Appears in Questions ({relatedQuestions.length})
                  </span>
                  <div className="space-y-1.5">
                    {relatedQuestions.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => onNavigate('answers', q.id)}
                        className="w-full text-left p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs transition-colors"
                      >
                        <div className="truncate">
                          <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-1.5">
                            {q.questionCode}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {q.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400 shrink-0 ml-2">
                          [{q.marks}M]
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
