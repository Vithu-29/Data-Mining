import React from 'react';
import {
  LayoutDashboard,
  FileText,
  HelpCircle,
  BookOpen,
  Compass,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink
} from 'lucide-react';

export type SectionType = 
  | 'dashboard'
  | 'past-paper'
  | 'answers'
  | 'lectures'
  | 'topics'
  | 'revision';

interface SidebarProps {
  currentSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  reviewedCount: number;
  totalQuestions: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  isOpenMobile,
  onCloseMobile,
  reviewedCount,
  totalQuestions
}) => {
  const navItems = [
    {
      id: 'dashboard' as SectionType,
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: 'Overview'
    },
    {
      id: 'past-paper' as SectionType,
      label: 'Past Paper',
      icon: FileText,
      badge: 'Nov 2025'
    },
    {
      id: 'answers' as SectionType,
      label: 'Question-by-Question Answers',
      icon: HelpCircle,
      badge: '100 Marks'
    },
    {
      id: 'lectures' as SectionType,
      label: 'Lecture Notes',
      icon: BookOpen,
      badge: '8 Lectures'
    },
    {
      id: 'topics' as SectionType,
      label: 'Topic Explorer',
      icon: Compass,
      badge: '10 Topics'
    },
    {
      id: 'revision' as SectionType,
      label: 'Exam Revision',
      icon: Sparkles,
      badge: 'High Priority'
    }
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpenMobile && (
        <div
          id="mobile-sidebar-backdrop"
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        id="main-sidebar"
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto flex flex-col justify-between ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Course Study Portal
              </p>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Data Mining &amp; DW
              </h2>
            </div>
            <button
              id="close-mobile-sidebar-btn"
              onClick={onCloseMobile}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="p-4 space-y-1">
            <p className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Navigation
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => {
                    onSelectSection(item.id);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md shrink-0 ${
                        isActive
                          ? 'bg-indigo-100 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Progress Card & Meta */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Revision Progress
              </span>
              <span>
                {Math.round((reviewedCount / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${(reviewedCount / totalQuestions) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {reviewedCount} of {totalQuestions} questions marked as reviewed
            </p>
          </div>

          <div className="text-[11px] text-slate-400 dark:text-slate-500 px-2 flex items-center justify-between">
            <span>IN 3410 / IN 4400</span>
            <span>UoM Syllabus</span>
          </div>
        </div>
      </aside>
    </>
  );
};
