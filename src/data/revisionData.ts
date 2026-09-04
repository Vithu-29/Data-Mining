import { FormulaItem, KeyDefinition, QuestionPattern, RevisionTopic } from '../types';

export const highPriorityTopics: RevisionTopic[] = [
  {
    id: 'hp1',
    topicName: 'Decision Tree Induction & Information Gain Calculation',
    importanceReason: 'Carries 15 marks in Question 4(b) and requires accurate numerical computation of entropy, conditional expected information, information gain, and pure leaf node identification using the provided log table.',
    priority: 'High',
    frequencyInExam: 'Appears in Question 4(b) [15 Marks]',
    relatedQuestions: ['Q04'],
    keyConcepts: [
      'Two-class entropy formula: - p1*log2(p1) - p2*log2(p2)',
      'Calculating weighted entropy Info_A(D) across all attribute values',
      'Information Gain = Info(D) - Info_A(D)',
      'Selecting attribute with maximum gain for the root split',
      'Identifying pure subsets (entropy = 0) as immediate leaf nodes'
    ]
  },
  {
    id: 'hp2',
    topicName: 'Star Attribute Reduction & Data Cube Aggregation',
    importanceReason: 'Dominates Question 3 carrying 30 full marks (30% of entire examination). Involves single-dimensional frequency counting, wildcard (*) replacement, table compression, and cuboid calculations.',
    priority: 'High',
    frequencyInExam: 'Appears in Question 3(a) [12 Marks] & Question 3(b) [18 Marks]',
    relatedQuestions: ['Q03'],
    keyConcepts: [
      'Counting 1D occurrences of all attribute values against minsup',
      'Mapping sub-threshold values to * in a side Star Table',
      'Collapsing identical rows and summing counts',
      'Lattice of 2^n cuboids: 0-D Apex, 1-D, 2-D, and n-D Base cuboids',
      'Multiway Array Aggregation memory chunking mechanism'
    ]
  },
  {
    id: 'hp3',
    topicName: 'Data Preprocessing: Binning, Histograms & Normalization',
    importanceReason: 'Carries 25 marks in Question 2 and covers essential practical preprocessing operations that data scientists perform daily.',
    priority: 'High',
    frequencyInExam: 'Appears in Question 2(a) [9 Marks] & Question 2(b) [5 Marks]',
    relatedQuestions: ['Q02'],
    keyConcepts: [
      'Sorting data first before any binning or histogram construction',
      'Equal-width: W = (Max - Min)/N',
      'Equal-depth: N_samples/B per bucket',
      'Smoothing by bin means vs smoothing by bin boundaries',
      'MaxDiff: splitting at the (B - 1) largest consecutive differences',
      'Min-Max normalization formula into [0, 1]'
    ]
  },
  {
    id: 'hp4',
    topicName: 'Association Rules (Support & Confidence Computation)',
    importanceReason: 'Carries 10 marks in Question 4(a) requiring swift, accurate transaction subset counting.',
    priority: 'High',
    frequencyInExam: 'Appears in Question 4(a) [10 Marks]',
    relatedQuestions: ['Q04'],
    keyConcepts: [
      'Support(X -> Y) = count(X U Y) / N',
      'Confidence(X -> Y) = count(X U Y) / count(X)',
      'The Apriori property: all subsets of a frequent itemset must be frequent',
      'Distinguishing support (over all N) from confidence (over antecedent count)'
    ]
  },
  {
    id: 'hp5',
    topicName: 'Data Warehousing Fundamentals & Dimensional Modeling',
    importanceReason: 'Carries 20 marks in Question 1 fill-in-the-blanks. Covers Inmon definition, Star/Snowflake/Constellation schemas, Kimball 4 steps, and OLAP operations.',
    priority: 'Medium',
    frequencyInExam: 'Appears in Question 1 [20 Marks]',
    relatedQuestions: ['Q01'],
    keyConcepts: [
      'Inmon: Subject-oriented, integrated, time-variant, non-volatile',
      'Central fact table + dimension tables',
      'Kimball 4 steps: 1. Business Process, 2. Grain, 3. Dimensions, 4. Facts',
      'OLAP operations: Roll-up, Drill-down, Slice, Dice, Pivot, Drill-across'
    ]
  }
];

export const keyFormulas: FormulaItem[] = [
  {
    id: 'f_entropy',
    name: 'Entropy (Two-Class / Multi-Class)',
    category: 'Classification',
    formula: 'Entropy(t) = - \\sum_{c=1}^{m} p(c \\mid t) \\log_2 p(c \\mid t)',
    description: 'Measures class impurity at decision tree node t. When perfectly pure, entropy is 0. For an even 50/50 split in a 2-class problem, entropy is 1.0 bit.',
    variables: [
      { symbol: 't', meaning: 'Current node in the decision tree' },
      { symbol: 'm', meaning: 'Number of distinct class labels (m=2 for binary)' },
      { symbol: 'p(c|t)', meaning: 'Conditional probability of class c at node t' }
    ],
    exampleCalculation: 'For 7 Genuine and 8 Fraud: P(G) = 7/15 = 0.467, P(F) = 8/15 = 0.533. Entropy = - [0.467*log2(0.467) + 0.533*log2(0.533)] = 0.997 bits.',
    relatedQuestionIds: ['Q04']
  },
  {
    id: 'f_info_gain',
    name: 'Information Gain (ID3)',
    category: 'Classification',
    formula: 'Gain(A) = Info(D) - \\sum_{j=1}^{v} \\frac{|D_j|}{|D|} \\times Info(D_j)',
    description: 'Calculates the expected reduction in entropy achieved by partitioning dataset D using attribute A. The attribute with the highest Gain is selected.',
    variables: [
      { symbol: 'Info(D)', meaning: 'Overall entropy before splitting' },
      { symbol: 'v', meaning: 'Number of distinct partition values of attribute A' },
      { symbol: '|D_j| / |D|', meaning: 'Weight (proportion of records) in partition j' }
    ],
    exampleCalculation: 'Gain(Transaction Amount) = 0.997 - [(4/15)*0 + (5/15)*0.971 + (6/15)*0] = 0.997 - 0.324 = 0.673 bits.',
    relatedQuestionIds: ['Q04']
  },
  {
    id: 'f_support',
    name: 'Support of Association Rule',
    category: 'Frequent Patterns',
    formula: 'Support(X \\to Y) = P(X \\cup Y) = \\frac{\\text{count}(X \\cup Y)}{N}',
    description: 'The proportion of transactions in the entire database N that contain all items in both X and Y.',
    variables: [
      { symbol: 'N', meaning: 'Total number of transactions in the database' },
      { symbol: 'count(X U Y)', meaning: 'Number of transactions containing all items in X and Y' }
    ],
    exampleCalculation: 'In 10 transactions, {RAM, Monitor} appears in 8 transactions. Support = 8 / 10 = 80%.',
    relatedQuestionIds: ['Q04']
  },
  {
    id: 'f_confidence',
    name: 'Confidence of Association Rule',
    category: 'Frequent Patterns',
    formula: 'Confidence(X \\to Y) = P(Y \\mid X) = \\frac{\\text{count}(X \\cup Y)}{\\text{count}(X)}',
    description: 'The conditional probability that a transaction containing itemset X also contains itemset Y.',
    variables: [
      { symbol: 'count(X)', meaning: 'Number of transactions containing antecedent X' },
      { symbol: 'count(X U Y)', meaning: 'Number of transactions containing both X and Y' }
    ],
    exampleCalculation: '{RAM} appears in 9 transactions; {RAM, Monitor} appears in 8. Confidence = 8 / 9 = 88.89%.',
    relatedQuestionIds: ['Q04']
  },
  {
    id: 'f_min_max',
    name: 'Min-Max Normalization',
    category: 'Data Preprocessing',
    formula: 'v\' = \\frac{v - min_A}{max_A - min_A}(new\\_max_A - new\\_min_A) + new\\_min_A',
    description: 'Linearly scales an attribute value v into the target range [new_min_A, new_max_A]. When target is [0, 1], simply divide (v - min) by the range.',
    variables: [
      { symbol: 'v', meaning: 'Original value to normalize' },
      { symbol: 'min_A, max_A', meaning: 'Minimum and maximum values of attribute A' },
      { symbol: 'new_min, new_max', meaning: 'Target scaling boundaries (e.g. 0 and 1)' }
    ],
    exampleCalculation: 'For Test Score where min=40, max=100, score 78 maps to: (78 - 40)/(100 - 40) = 38/60 = 0.633.',
    relatedQuestionIds: ['Q02']
  },
  {
    id: 'f_equal_width',
    name: 'Equal-Width Binning Width',
    category: 'Data Preprocessing',
    formula: 'W = \\frac{Max - Min}{N}',
    description: 'Divides the continuous numerical range of an attribute into N equal-sized interval widths.',
    variables: [
      { symbol: 'Max, Min', meaning: 'Extremes of the sorted dataset' },
      { symbol: 'N', meaning: 'Desired number of bins' }
    ],
    exampleCalculation: 'For Age with Min=23 and Max=77, with 4 bins: W = (77 - 23)/4 = 54/4 = 13.5.',
    relatedQuestionIds: ['Q02']
  },
  {
    id: 'f_zscore',
    name: 'Z-Score Normalization',
    category: 'Data Preprocessing',
    formula: 'v\' = \\frac{v - \\bar{A}}{\\sigma_A}',
    description: 'Normalizes based on attribute mean and standard deviation. Values represent standard deviations above/below the mean.',
    variables: [
      { symbol: 'A_bar', meaning: 'Arithmetic mean of the attribute' },
      { symbol: 'sigma_A', meaning: 'Standard deviation of the attribute' }
    ],
    exampleCalculation: 'For Income with mean 54,000 and std dev 16,000: value 73,600 becomes (73,600 - 54,000)/16,000 = 1.225.',
    relatedQuestionIds: ['Q01', 'Q02']
  },
  {
    id: 'f_decimal_scaling',
    name: 'Decimal Scaling Normalization',
    category: 'Data Preprocessing',
    formula: 'v\' = \\frac{v}{10^j} \\quad \\text{where } j \\text{ is smallest integer such that } \\max(|v\'|) < 1',
    description: 'Normalizes values by moving the decimal point according to the maximum absolute value.',
    variables: [
      { symbol: 'j', meaning: 'Exponent power of 10 determined by max absolute value' }
    ],
    exampleCalculation: 'For values ranging from -500 to 45: max absolute value is 500, so j=3. -500 becomes -0.5, and 45 becomes 0.045.',
    relatedQuestionIds: ['Q01']
  }
];

export const keyDefinitions: KeyDefinition[] = [
  {
    id: 'kd_dw',
    term: 'Data Warehouse (W. H. Inmon)',
    academicDefinition: 'A subject-oriented, integrated, time-variant, and nonvolatile collection of data in support of management\'s decision-making process.',
    simpleExplanation: 'A historical, central repository of cleaned business data frozen in time to help executives make strategic choices.',
    sourceLecture: 'Lecture 02 (Slide 6)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_fact',
    term: 'Fact Table',
    academicDefinition: 'The central table in a dimensional model containing numeric, additive measures and foreign keys pointing to dimension tables.',
    simpleExplanation: 'The main data table that records the numbers of what happened (e.g. quantity sold, total price) and links to context.',
    sourceLecture: 'Lecture 04 (Slide 5)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_constellation',
    term: 'Fact Constellation (Galaxy Schema)',
    academicDefinition: 'A dimensional schema containing multiple fact tables that share one or more dimension tables.',
    simpleExplanation: 'A database design with several fact tables (e.g. Sales and Shipping) sharing the same master lists (e.g. Products and Stores).',
    sourceLecture: 'Lecture 04 (Slide 19)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_rollup',
    term: 'Roll-Up (Drill-Up)',
    academicDefinition: 'An OLAP operation that performs aggregation on a data cube either by climbing up a concept hierarchy or by dimension reduction.',
    simpleExplanation: 'Zooming out to see a bigger picture, such as moving from daily sales to annual totals.',
    sourceLecture: 'Lecture 02 (Slide 40)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_pivot',
    term: 'Pivot (Rotate)',
    academicDefinition: 'An OLAP operation that rotates the data axes in view in order to provide an alternative presentation of data.',
    simpleExplanation: 'Spinning the view so row headers become column headers, making different patterns easy to spot.',
    sourceLecture: 'Lecture 02 (Slide 40)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_drillacross',
    term: 'Drill-Across',
    academicDefinition: 'An OLAP operation that links and queries data spanning more than one fact table.',
    simpleExplanation: 'Comparing numbers that live in two different fact tables (e.g. comparing Orders against Shipments).',
    sourceLecture: 'Lecture 02 (Slide 40, 65)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_molap',
    term: 'MOLAP (Multidimensional OLAP)',
    academicDefinition: 'A special-purpose server that directly implements multidimensional data storage and operations using array-based multidimensional storage engines.',
    simpleExplanation: 'Storing data in true multi-dimensional matrix arrays in memory for lightning-fast retrieval.',
    sourceLecture: 'Lecture 02 (Slide 55)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_datamining',
    term: 'Data Mining',
    academicDefinition: 'The extraction of interesting (non-trivial, implicit, previously unknown, and potentially useful) information or patterns from data in large databases.',
    simpleExplanation: 'Finding hidden, actionable patterns in big data that you didn\'t already know were there.',
    sourceLecture: 'Lecture 01 (Slide 25)',
    relatedQuestionId: 'Q01'
  },
  {
    id: 'kd_apriori',
    term: 'The Apriori Principle',
    academicDefinition: 'Any subset of a frequent itemset must also be frequent. If an itemset is infrequent, all of its supersets will also be infrequent.',
    simpleExplanation: 'If a group of 2 items is rare, any bigger group of 3 items containing it will be even rarer, so stop checking it!',
    sourceLecture: 'Lecture 06 (Slide 7, 12)',
    relatedQuestionId: 'Q04'
  },
  {
    id: 'kd_star_reduction',
    term: 'Star Attribute Reduction',
    academicDefinition: 'A compression technique for iceberg cubing where attribute values with 1D count < minsup are replaced with wildcard (*) and identical tuples collapsed.',
    simpleExplanation: 'Replacing rare names or dates with a star symbol and merging duplicate rows so the table shrinks without losing meaningful trends.',
    sourceLecture: 'Lecture 05 (Slide 34, 35)',
    relatedQuestionId: 'Q03'
  },
  {
    id: 'kd_apex',
    term: 'Apex Cuboid',
    academicDefinition: 'The topmost 0-D cuboid in a data cube lattice corresponding to the group-by () that holds the highest level of summarization (the grand total).',
    simpleExplanation: 'The single grand total number at the very peak of the data pyramid.',
    sourceLecture: 'Lecture 05 (Slide 30)',
    relatedQuestionId: 'Q01'
  }
];

export const questionPatterns: QuestionPattern[] = [
  {
    id: 'qp_dt',
    patternName: 'Decision Tree Splitting with Log Table',
    typicalMarks: 15,
    description: 'Students are given a classification dataset (e.g. 15 transactions with a binary label like Genuine/Fraud) and a table of log2(x) values. They must calculate initial entropy, weighted entropy for 4 attributes, choose the best split, and identify pure leaf nodes.',
    strategy: [
      '1. Count total instances N and the distribution of Class 1 and Class 2.',
      '2. Calculate initial entropy Info(D) = - p1*log2(p1) - p2*log2(p2) using values from the log table.',
      '3. For each attribute, build a small frequency table for each attribute value showing Class 1 and Class 2 counts.',
      '4. If a value has 0 counts in one class (e.g. all Fraud), its entropy is 0.0 bits immediately!',
      '5. Weight each value\'s entropy by its size (|D_j|/|D|) and sum to get Info_A(D).',
      '6. Gain = Info(D) - Info_A(D). Pick the highest Gain.',
      '7. State clearly that pure subsets (entropy = 0) become leaf nodes.'
    ],
    commonPitfalls: [
      'Using natural log (ln) or log10 instead of base-2 log (log2).',
      'Forgetting to multiply the subset entropy by its proportion (|D_j| / |D|).',
      'Failing to notice pure values where entropy = 0 without needing any log calculations!'
    ],
    exampleQuestionId: 'Q04'
  },
  {
    id: 'qp_star',
    patternName: 'Star Attribute Reduction on Relational Tables',
    typicalMarks: 12,
    description: 'Given a dataset with 10-15 rows and multiple categorical attributes, apply star attribute reduction with a specified minimum support threshold (e.g. minsup = 3).',
    strategy: [
      '1. Scan each column separately and list the 1D frequency of every single distinct value.',
      '2. Compare each frequency against minsup. Mark values < minsup with a star (*).',
      '3. Write a Star Table mapping the replaced values to *.',
      '4. Rewrite the main table replacing low-frequency values with *.',
      '5. Group identical rows together and add a Count column showing how many original tuples merged.'
    ],
    commonPitfalls: [
      'Replacing values that have count >= minsup with *.',
      'Forgetting to combine identical rows after placing stars.',
      'Forgetting to include the count column in the final reduced table.'
    ],
    exampleQuestionId: 'Q03'
  },
  {
    id: 'qp_binning',
    patternName: 'Binning, Boundary Smoothing & MaxDiff',
    typicalMarks: 9,
    description: 'Given an unsorted list of 20-30 numbers, perform equal-width binning, equal-depth boundary smoothing, and MaxDiff histogram partitioning.',
    strategy: [
      '1. ALWAYS sort the numbers in ascending order as the very first step.',
      '2. Equal-width: compute Range = Max - Min, then Width = Range / N. Form intervals [Min, Min+W), [Min+W, Min+2W), etc.',
      '3. Equal-depth: divide count of items by N. Each bin has N_total / B items. Identify Min and Max boundary for each bin, and replace each number with the closer endpoint.',
      '4. MaxDiff: compute differences between adjacent sorted values. Find the (B - 1) largest gaps and draw bin dividers there.'
    ],
    commonPitfalls: [
      'Applying binning formulas on unsorted data.',
      'In boundary smoothing, replacing numbers with the bin average instead of the nearest boundary (Min or Max).',
      'In MaxDiff, picking the largest numbers instead of the largest differences between adjacent sorted numbers.'
    ],
    exampleQuestionId: 'Q02'
  }
];
