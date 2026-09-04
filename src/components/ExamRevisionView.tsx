import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  ListCheck,
  Calculator,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Clock,
  Layers,
  Check
} from 'lucide-react';
import { RevisionTopic, FormulaItem, KeyDefinition, QuestionPattern, ExamQuestion } from '../types';
import { SectionType } from './Sidebar';

interface ExamRevisionViewProps {
  highPriorityTopics: RevisionTopic[];
  formulas: FormulaItem[];
  definitions: KeyDefinition[];
  questionPatterns: QuestionPattern[];
  questions: ExamQuestion[];
  onNavigate: (section: SectionType, targetId?: string) => void;
  checkedRevisionIds: string[];
  onToggleRevisionItem: (id: string) => void;
}

export const ExamRevisionView: React.FC<ExamRevisionViewProps> = ({
  highPriorityTopics,
  formulas,
  definitions,
  questionPatterns,
  questions,
  onNavigate,
  checkedRevisionIds,
  onToggleRevisionItem
}) => {
  const [activeTab, setActiveTab] = useState<'priority' | 'patterns' | 'formulas' | 'definitions' | 'checklist'>('priority');

  const revisionChecklistItems = [
    { id: 'chk_inmon', label: 'W. H. Inmon definition of Data Warehouse (4 characteristics)', category: 'Warehousing' },
    { id: 'chk_star_snow', label: 'Differences between Star, Snowflake, and Fact Constellation Schemas', category: 'Warehousing' },
    { id: 'chk_kimball', label: 'Kimball 4-Step Dimensional Design Process (in order)', category: 'Warehousing' },
    { id: 'chk_olap', label: 'Core OLAP operations: Roll-up, Drill-down, Slice, Dice, Pivot, Drill-across', category: 'Warehousing' },
    { id: 'chk_binning', label: 'Equal-width binning formula W = (Max - Min)/N on sorted data', category: 'Preprocessing' },
    { id: 'chk_boundary', label: 'Smoothing by bin boundaries (replacing with closer min or max)', category: 'Preprocessing' },
    { id: 'chk_maxdiff', label: 'MaxDiff histogram: identifying largest gaps between adjacent values', category: 'Preprocessing' },
    { id: 'chk_minmax', label: 'Min-Max normalization to [0, 1] range: (v - min)/(max - min)', category: 'Preprocessing' },
    { id: 'chk_aoi', label: 'Attribute-Oriented Induction: PreGen, attribute removal, prime generalized relations', category: 'Data Mining' },
    { id: 'chk_star_attr', label: 'Star attribute reduction: replacing values with count < minsup with wildcard (*)', category: 'Data Cubes' },
    { id: 'chk_cuboid', label: 'Data cube lattice: 0-D Apex cuboid (all, all, ...) to n-D base cuboid', category: 'Data Cubes' },
    { id: 'chk_apriori', label: 'The Apriori Principle: all subsets of a frequent itemset must be frequent', category: 'Frequent Patterns' },
    { id: 'chk_supp_conf', label: 'Calculating Support P(X U Y) and Confidence P(Y|X)', category: 'Frequent Patterns' },
    { id: 'chk_entropy', label: 'Entropy formula calculation using log2 values: - p1*log2(p1) - p2*log2(p2)', category: 'Classification' },
    { id: 'chk_info_gain', label: 'Information Gain = Info(D) - Info_A(D) and choosing max gain', category: 'Classification' },
    { id: 'chk_leaf_node', label: 'Identifying pure nodes (entropy = 0) as immediate leaf nodes', category: 'Classification' }
  ];

  const totalChecklist = revisionChecklistItems.length;
  const completedChecklist = checkedRevisionIds.length;
  const checklistPercent = Math.round((completedChecklist / totalChecklist) * 100);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Exam Revision Toolkit
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Tailored for IN 3410 November 2025 Paper
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Targeted Exam Revision &amp; Cheatsheets
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              High-priority topics, formula references, examiner grading expectations, and interactive readiness checklist.
            </p>
          </div>

          {/* Checklist Progress Quick Pill */}
          <div className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 shrink-0">
            <div className="flex items-center justify-between gap-3 text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-1">
              <span>Mastery Checklist:</span>
              <span>{checklistPercent}%</span>
            </div>
            <div className="w-36 h-2 bg-indigo-200 dark:bg-indigo-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${checklistPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto pb-1">
          <button
            id="tab-priority-topics"
            onClick={() => setActiveTab('priority')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'priority'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>High-Priority Topics</span>
          </button>

          <button
            id="tab-checklist"
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'checklist'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <ListCheck className="w-4 h-4" />
            <span>Revision Checklist ({completedChecklist}/{totalChecklist})</span>
          </button>

          <button
            id="tab-formulas"
            onClick={() => setActiveTab('formulas')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'formulas'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Formula Sheet ({formulas.length})</span>
          </button>

          <button
            id="tab-definitions"
            onClick={() => setActiveTab('definitions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'definitions'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Key Definitions ({definitions.length})</span>
          </button>

          <button
            id="tab-patterns"
            onClick={() => setActiveTab('patterns')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'patterns'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Question Patterns &amp; Strategies</span>
          </button>
        </div>
      </div>

      {/* Tab 1: High-Priority Topics */}
      {activeTab === 'priority' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highPriorityTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                      {topic.priority} Priority
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {topic.frequencyInExam}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {topic.topicName}
                  </h3>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                      Why it is critical for this exam:
                    </span>
                    {topic.importanceReason}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      Core Concepts to Review:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {topic.keyConcepts.map((concept, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Appears in: {topic.relatedQuestions.join(', ')}
                  </span>
                  <button
                    onClick={() => onNavigate('answers', topic.relatedQuestions[0])}
                    className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <span>Practice Questions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Revision Checklist */}
      {activeTab === 'checklist' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Exam Readiness Master Checklist
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Check off each syllabus requirement as you review it. Progress is saved locally.
              </p>
            </div>
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              {completedChecklist} / {totalChecklist} Completed ({checklistPercent}%)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {revisionChecklistItems.map((item) => {
              const isChecked = checkedRevisionIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onToggleRevisionItem(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                      : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/60 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 text-white'
                        : 'border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                      {item.category}
                    </span>
                    <p
                      className={`text-xs font-medium leading-relaxed ${
                        isChecked
                          ? 'text-emerald-900 dark:text-emerald-200 line-through opacity-80'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Formula Sheet */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formulas.map((form) => (
              <div
                key={form.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xs space-y-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {form.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {form.category}
                  </span>
                </div>

                {/* Formula display */}
                <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-center">
                  <code className="font-mono text-xs sm:text-sm font-bold text-indigo-800 dark:text-indigo-300">
                    {form.formula}
                  </code>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {form.description}
                </p>

                {/* Variables explanation */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Variable Definitions:
                  </span>
                  <div className="grid grid-cols-1 gap-1 text-[11px]">
                    {form.variables.map((v, vIdx) => (
                      <div key={vIdx} className="flex items-baseline gap-1.5">
                        <code className="font-bold text-indigo-600 dark:text-indigo-400">
                          {v.symbol}:
                        </code>
                        <span className="text-slate-600 dark:text-slate-400">
                          {v.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Short Example calculation */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-[11px]">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                    Example Working:
                  </span>
                  <p className="font-mono text-slate-600 dark:text-slate-400">
                    {form.exampleCalculation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Key Definitions */}
      {activeTab === 'definitions' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {definitions.map((def) => (
              <div
                key={def.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xs space-y-4"
              >
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {def.term}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {def.sourceLecture}
                  </span>
                </div>

                {/* Academic Definition */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                    Academic Wording (Quote in Exam):
                  </span>
                  <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
                    "{def.academicDefinition}"
                  </div>
                </div>

                {/* Simplified Explanation */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Plain Meaning:
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {def.simpleExplanation}
                  </p>
                </div>

                {def.relatedQuestionId && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button
                      onClick={() => onNavigate('answers', def.relatedQuestionId)}
                      className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <span>Tested in Question</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Question Patterns & Strategies */}
      {activeTab === 'patterns' && (
        <div className="space-y-4">
          {questionPatterns.map((pat) => (
            <div
              key={pat.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white">
                      {pat.typicalMarks} Marks Problem
                    </span>
                    <span className="text-xs text-slate-400">
                      Standard Exam Pattern
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pat.patternName}
                  </h3>
                </div>

                {pat.exampleQuestionId && (
                  <button
                    onClick={() => onNavigate('answers', pat.exampleQuestionId)}
                    className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Worked Example</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pat.description}
              </p>

              {/* Strategy */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Step-by-Step Scoring Strategy:
                </span>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {pat.strategy.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitfalls */}
              <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-700 dark:text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Common Examiner Traps &amp; Student Pitfalls:</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  {pat.commonPitfalls.map((pf, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{pf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
