export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export type QuestionType = 
  | 'Fill in the Blanks'
  | 'Data Preprocessing & Calculation'
  | 'Data Cube & Star Reduction'
  | 'Association Rules & Mining'
  | 'Decision Tree & Information Gain'
  | 'Conceptual & Architectural';

export interface LectureConcept {
  id: string;
  name: string;
  simpleExplanation: string;
  formalDefinition: string;
  howItWorks: string | string[];
  example: string;
  importantToRemember: string;
  commonMistake?: string;
  examConnection: string;
  relatedQuestionIds: string[];
}

export interface Lecture {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  author: string;
  chapterNumber: number;
  overview: string;
  learningObjectives: string[];
  concepts: LectureConcept[];
  importantPoints: string[];
  examFocus: {
    summary: string;
    relatedQuestionIds: string[];
  };
}

export interface QuestionSubPart {
  partId: string;
  label: string; // e.g. "(a)", "(i)", "a", etc.
  text: string;
  marks: number;
  answer: string;
  explanation: string;
  stepByStep?: string[];
  examAnswer: string;
}

export interface QuestionSteps {
  step1_concept: string;
  step2_approach: string;
  step3_working: string;
  step4_finalAnswer: string;
}

export interface QuestionTips {
  commonMistakes: string[];
  keyKeywords: string[];
}

export interface ExamQuestion {
  id: string;
  number: number;
  questionCode: string; // e.g. "Q01", "Q02", "Q03", "Q04"
  title: string;
  summary?: string;
  exactQuestionText: string;
  marks: number;
  topics: string[];
  lectureIds: string[];
  difficulty: DifficultyLevel;
  questionType: QuestionType;
  answer: string;
  explanation: string;
  stepByStepSolution?: string[];
  steps?: QuestionSteps;
  examAnswer: string;
  examReadyAnswer?: string;
  learningExplanation?: string;
  tips?: QuestionTips;
  lectureReference: {
    lectureId: string;
    lectureTitle: string;
    conceptName: string;
    slideReference?: string;
    specificNote?: string;
  };
  subParts?: QuestionSubPart[];
}

export interface Topic {
  id: string;
  name: string;
  category: string;
  summary: string;
  explanation: string;
  keyPoints: string[];
  formulas?: {
    name: string;
    formula: string;
    explanation: string;
  }[];
  examples: string[];
  lectureIds: string[];
  questionIds: string[];
}

export interface RevisionTopic {
  id: string;
  topicName: string;
  importanceReason: string;
  priority: 'High' | 'Medium';
  frequencyInExam: string;
  relatedQuestions: string[];
  keyConcepts: string[];
}

export interface FormulaItem {
  id: string;
  name: string;
  category: string;
  formula: string;
  description: string;
  variables: { symbol: string; meaning: string }[];
  exampleCalculation?: string;
  relatedQuestionIds: string[];
}

export interface KeyDefinition {
  id: string;
  term: string;
  academicDefinition: string;
  simpleExplanation: string;
  sourceLecture: string;
  relatedQuestionId?: string;
}

export interface QuestionPattern {
  id: string;
  patternName: string;
  typicalMarks: number;
  description: string;
  strategy: string[];
  commonPitfalls: string[];
  exampleQuestionId: string;
}
