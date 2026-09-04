import React from 'react';
import { Search, BookOpen, CheckCircle2, Moon, Sun, Menu, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  reviewedCount: number;
  totalQuestions: number;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onToggleMobileSidebar: () => void;
  currentSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  reviewedCount,
  totalQuestions,
  isDarkMode,
  onToggleDarkMode,
  onToggleMobileSidebar,
  currentSection
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile trigger & App Identity */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-sidebar-toggle-btn"
            onClick={onToggleMobileSidebar}
            className="p-2 -ml-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-200 dark:shadow-none">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base">
                  IN 3410 Exam Prep
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                  UoM • Sem 6
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block truncate max-w-xs">
                Data Mining &amp; Data Warehousing
              </p>
            </div>
          </div>
        </div>

        {/* Center: Global Search Bar Trigger */}
        <div className="flex-1 max-w-md mx-2 sm:mx-4">
          <button
            id="global-search-trigger-btn"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 transition-all shadow-2xs"
          >
            <span className="flex items-center gap-2 truncate">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">Search questions, lectures, formulas, topics...</span>
            </span>
            <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right: Progress Pill & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            id="quick-progress-pill"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"
            title={`${reviewedCount} of ${totalQuestions} questions reviewed`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-medium whitespace-nowrap">
              {reviewedCount}/{totalQuestions} Reviewed
            </span>
          </div>

          <button
            id="theme-toggle-btn"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 border border-transparent dark:border-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
