import React, { useState, useEffect } from 'react';
import { questionsData } from './data/questionsData';
import { lecturesData } from './data/lecturesData';
import { topicsData } from './data/topicsData';
import {
  highPriorityTopics,
  keyFormulas,
  keyDefinitions,
  questionPatterns
} from './data/revisionData';

import { Navbar } from './components/Navbar';
import { Sidebar, SectionType } from './components/Sidebar';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { DashboardView } from './components/DashboardView';
import { PastPaperView } from './components/PastPaperView';
import { AnswersView } from './components/AnswersView';
import { LectureNotesView } from './components/LectureNotesView';
import { TopicExplorerView } from './components/TopicExplorerView';
import { ExamRevisionView } from './components/ExamRevisionView';

import {
  LayoutDashboard,
  FileText,
  HelpCircle,
  BookOpen,
  Compass,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>('dashboard');
  const [activeQuestionId, setActiveQuestionId] = useState<string>(questionsData[0]?.id || 'Q01');
  const [activeLectureId, setActiveLectureId] = useState<string>(lecturesData[0]?.id || 'L01');
  const [activeTopicId, setActiveTopicId] = useState<string>(topicsData[0]?.id || 't_schemas');

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Local storage persisted state
  const [reviewedQuestionIds, setReviewedQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('in3410_reviewed_questions');
      return saved ? JSON.parse(saved) : ['Q01'];
    } catch {
      return ['Q01'];
    }
  });

  const [practiceQuestionIds, setPracticeQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('in3410_practice_questions');
      return saved ? JSON.parse(saved) : ['Q03', 'Q04'];
    } catch {
      return ['Q03', 'Q04'];
    }
  });

  const [checkedRevisionIds, setCheckedRevisionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('in3410_revision_checklist');
      return saved ? JSON.parse(saved) : ['chk_inmon', 'chk_star_snow', 'chk_binning'];
    } catch {
      return ['chk_inmon', 'chk_star_snow', 'chk_binning'];
    }
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('in3410_dark_mode');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  // Dark mode class toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('in3410_dark_mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Persist review states
  useEffect(() => {
    localStorage.setItem('in3410_reviewed_questions', JSON.stringify(reviewedQuestionIds));
  }, [reviewedQuestionIds]);

  useEffect(() => {
    localStorage.setItem('in3410_practice_questions', JSON.stringify(practiceQuestionIds));
  }, [practiceQuestionIds]);

  useEffect(() => {
    localStorage.setItem('in3410_revision_checklist', JSON.stringify(checkedRevisionIds));
  }, [checkedRevisionIds]);

  const handleToggleReviewed = (id: string) => {
    setReviewedQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleTogglePractice = (id: string) => {
    setPracticeQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleRevisionItem = (id: string) => {
    setCheckedRevisionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Cross-view navigation handler
  const handleNavigate = (section: SectionType, targetId?: string) => {
    setCurrentSection(section);
    if (targetId) {
      if (section === 'answers' || section === 'past-paper') {
        setActiveQuestionId(targetId);
      } else if (section === 'lectures') {
        setActiveLectureId(targetId);
      } else if (section === 'topics') {
        setActiveTopicId(targetId);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        reviewedCount={reviewedQuestionIds.length}
        totalQuestions={questionsData.length}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
        currentSection={currentSection}
      />

      {/* Main Container Layout with Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Persistent Desktop Sidebar / Drawer Mobile */}
        <Sidebar
          currentSection={currentSection}
          onSelectSection={(s) => {
            setCurrentSection(s);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          reviewedCount={reviewedQuestionIds.length}
          totalQuestions={questionsData.length}
        />

        {/* Dynamic Center Viewport */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          {currentSection === 'dashboard' && (
            <DashboardView
              onNavigate={handleNavigate}
              questions={questionsData}
              lectures={lecturesData}
              topics={topicsData}
              reviewedQuestionIds={reviewedQuestionIds}
              practiceQuestionIds={practiceQuestionIds}
              onToggleReviewed={handleToggleReviewed}
              onTogglePractice={handleTogglePractice}
            />
          )}

          {currentSection === 'past-paper' && (
            <PastPaperView
              questions={questionsData}
              lectures={lecturesData}
              topics={topicsData}
              reviewedQuestionIds={reviewedQuestionIds}
              practiceQuestionIds={practiceQuestionIds}
              onToggleReviewed={handleToggleReviewed}
              onTogglePractice={handleTogglePractice}
              onNavigate={handleNavigate}
            />
          )}

          {currentSection === 'answers' && (
            <AnswersView
              questions={questionsData}
              lectures={lecturesData}
              activeQuestionId={activeQuestionId}
              onSelectQuestion={(id) => setActiveQuestionId(id)}
              onNavigate={handleNavigate}
              reviewedQuestionIds={reviewedQuestionIds}
              practiceQuestionIds={practiceQuestionIds}
              onToggleReviewed={handleToggleReviewed}
              onTogglePractice={handleTogglePractice}
            />
          )}

          {currentSection === 'lectures' && (
            <LectureNotesView
              lectures={lecturesData}
              questions={questionsData}
              activeLectureId={activeLectureId}
              onSelectLecture={(id) => setActiveLectureId(id)}
              onNavigate={handleNavigate}
            />
          )}

          {currentSection === 'topics' && (
            <TopicExplorerView
              topics={topicsData}
              lectures={lecturesData}
              questions={questionsData}
              activeTopicId={activeTopicId}
              onSelectTopic={(id) => setActiveTopicId(id)}
              onNavigate={handleNavigate}
            />
          )}

          {currentSection === 'revision' && (
            <ExamRevisionView
              highPriorityTopics={highPriorityTopics}
              formulas={keyFormulas}
              definitions={keyDefinitions}
              questionPatterns={questionPatterns}
              questions={questionsData}
              onNavigate={handleNavigate}
              checkedRevisionIds={checkedRevisionIds}
              onToggleRevisionItem={handleToggleRevisionItem}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav
        id="mobile-bottom-nav"
        className="fixed bottom-0 inset-x-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 lg:hidden px-2 py-1 flex items-center justify-around"
      >
        <button
          onClick={() => handleNavigate('dashboard')}
          className={`flex flex-col items-center py-1.5 px-2 rounded-xl text-[10px] font-medium transition-colors ${
            currentSection === 'dashboard'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <LayoutDashboard className="w-5 h-5 mb-0.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => handleNavigate('past-paper')}
          className={`flex flex-col items-center py-1.5 px-2 rounded-xl text-[10px] font-medium transition-colors ${
            currentSection === 'past-paper'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span>Paper</span>
        </button>

        <button
          onClick={() => handleNavigate('answers')}
          className={`flex flex-col items-center py-1.5 px-2 rounded-xl text-[10px] font-medium transition-colors ${
            currentSection === 'answers'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <HelpCircle className="w-5 h-5 mb-0.5" />
          <span>Answers</span>
        </button>

        <button
          onClick={() => handleNavigate('lectures')}
          className={`flex flex-col items-center py-1.5 px-2 rounded-xl text-[10px] font-medium transition-colors ${
            currentSection === 'lectures'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span>Lectures</span>
        </button>

        <button
          onClick={() => handleNavigate('revision')}
          className={`flex flex-col items-center py-1.5 px-2 rounded-xl text-[10px] font-medium transition-colors ${
            currentSection === 'revision'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span>Revision</span>
        </button>
      </nav>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        questions={questionsData}
        lectures={lecturesData}
        topics={topicsData}
        formulas={keyFormulas}
        definitions={keyDefinitions}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
