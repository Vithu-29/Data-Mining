import { Lecture } from '../types';

export const lecturesData: Lecture[] = [
  {
    id: 'L01',
    code: 'IN 3410 - Lec 01',
    title: 'Overview of Knowledge Discovery and Data Mining',
    shortTitle: 'Introduction & KDD',
    author: 'Saminda Premaratne',
    chapterNumber: 1,
    overview: 'Introduces the Big Data explosion, foundational motivations for data mining, the formal definition of Knowledge Discovery in Databases (KDD), comparing OLTP vs OLAP vs RTAP, and understanding the multidisciplinary nature of data mining.',
    learningObjectives: [
      'Understand the 3V characteristics and real-world scale of Big Data (Volume, Variety, Velocity).',
      'Distinguish between operational systems (OLTP) and analytical systems (OLAP & RTAP).',
      'Master the standard 7-step Knowledge Discovery in Databases (KDD) process.',
      'Differentiate between descriptive and predictive data mining tasks.',
      'Explain the "Interestingness Problem" in data mining.'
    ],
    importantPoints: [
      'Data preparation and preprocessing takes an estimated 70-80% of total project effort in practice.',
      'Data mining is strictly the extraction of non-trivial, implicit, previously unknown, and potentially useful patterns.',
      'Deductive query processing, SQL querying, and expert systems are NOT considered data mining.',
      'Systems generate thousands of patterns, but only a small fraction are novel and actionable.'
    ],
    examFocus: {
      summary: 'Directly tested in Question 1 fill-in-the-blanks (Big Data 3Vs, KDD process, pattern interestingness definition).',
      relatedQuestionIds: ['Q01']
    },
    concepts: [
      {
        id: 'c1_1',
        name: 'The 3V Characteristics of Big Data',
        simpleExplanation: 'Big Data refers to datasets that are too large, too diverse, and moving too fast for traditional spreadsheets or databases to handle.',
        formalDefinition: 'Big Data is data whose scale, diversity, and complexity require new architecture, techniques, algorithms, and analytics to manage it and extract value and hidden knowledge from it. Characterized by Volume, Variety, and Velocity.',
        howItWorks: '1. Volume: Exponential growth of stored bytes (from zettabytes to yottabytes).\n2. Variety: Diverse media structures (relational tables, text, sensor streams, audio, video, weblogs).\n3. Velocity: Fast rate of data generation requiring real-time analytical response.',
        example: 'Europe\'s VLBI generates 1 Gigabit/sec over 25 days; YouTube processes 72 hours of video uploaded every minute.',
        importantToRemember: 'Volume = Scale (data at rest), Variety = Complexity (data in many forms), Velocity = Speed (data in motion). Sometimes extended with Veracity (data in doubt).',
        commonMistake: 'Confusing Velocity (speed of incoming data generation) with database query execution speed.',
        examConnection: 'Tested in Question 1 (part i: Volume, Variety, and Velocity).',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c1_2',
        name: 'Data Mining and the KDD Process',
        simpleExplanation: 'Data mining is like panning for gold in massive mountains of data—digging out hidden, non-obvious gems of knowledge that help make smart decisions.',
        formalDefinition: 'The non-trivial process of identifying valid, novel, potentially useful, and ultimately understandable patterns in large databases (Fayyad et al., 1996).',
        howItWorks: 'The KDD process operates as an iterative pipeline:\n1. Learning domain & creating target dataset (Selection)\n2. Data cleaning & preprocessing (handling dirty/missing data, takes 60-80% of effort)\n3. Data reduction and transformation (feature selection, dimensionality reduction)\n4. Choosing data mining function (classification, association, clustering)\n5. Data mining (running algorithms to discover patterns)\n6. Pattern evaluation & knowledge presentation (visualization, pruning uninteresting patterns)\n7. Deployment of discovered knowledge.',
        example: 'Retailers analyzing loyalty card swipe transactions to discover associations between items bought together.',
        importantToRemember: 'Data mining is the core algorithmic step inside the broader multi-step KDD process.',
        commonMistake: 'Thinking simple SQL queries or basic business reporting is data mining. Routine reporting is deductive, whereas data mining is inductive pattern discovery.',
        examConnection: 'Directly tested in Question 1 (part h: definition of data mining; part j: data preprocessing; part k: interesting patterns).',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c1_3',
        name: 'OLTP vs. OLAP vs. RTAP',
        simpleExplanation: 'OLTP records daily individual cash register transactions; OLAP looks back at months of trends to make business decisions; RTAP analyzes live streaming events instantly.',
        formalDefinition: '• OLTP (Online Transaction Processing): DBMS optimized for day-to-day high-throughput ACID transactions.\n• OLAP (Online Analytical Processing): Multidimensional historical decision support querying.\n• RTAP (Real-Time Analytics Processing): Streaming event stream analytics.',
        howItWorks: 'OLTP writes atomic records (inserts/updates). OLAP consolidates historical data across dimensions (read-heavy aggregations). RTAP executes real-time scoring.',
        example: 'ATM dispensing money is OLTP; analyzing ATM failure rates across cities over 5 years is OLAP; flagging a stolen card at the swipe is RTAP.',
        importantToRemember: 'OLTP focuses on clerical daily operations; OLAP focuses on management strategic decision making.',
        commonMistake: 'Running analytical aggregation queries directly on live operational OLTP databases, causing lock contention and performance collapse.',
        examConnection: 'Forms the foundational theory for Question 1 and Question 3 cuboid operations.',
        relatedQuestionIds: ['Q01', 'Q03']
      }
    ]
  },
  {
    id: 'L02',
    code: 'IN 3410 - Lec 02',
    title: 'Data Warehousing and OLAP Technology for Data Mining',
    shortTitle: 'Data Warehousing & OLAP',
    author: 'Saminda Premaratne',
    chapterNumber: 2,
    overview: 'Covers the canonical W. H. Inmon definition of a data warehouse, multidimensional data models, Star vs Snowflake vs Fact Constellation schemas, DMQL cube definitions, measures classification, and all major OLAP manipulation operations.',
    learningObjectives: [
      'Define a Data Warehouse using Inmon\'s 4 pillars: Subject-Oriented, Integrated, Time-Variant, Non-Volatile.',
      'Compare Star Schema, Snowflake Schema, and Fact Constellation (Galaxy) Schema.',
      'Classify aggregation measures into Distributive, Algebraic, and Holistic.',
      'Execute and explain all 6 core OLAP operations: Roll-up, Drill-down, Slice, Dice, Pivot, Drill-across.',
      'Analyze 3-tier warehouse architectures: ROLAP vs MOLAP vs HOLAP.'
    ],
    importantPoints: [
      'Operational updates NEVER occur in a data warehouse environment; it only requires initial load and read access.',
      'In a Star schema, dimension tables are deliberately denormalized for query performance.',
      'Snowflake schema normalizes dimension tables into hierarchies, saving storage but adding costly joins.',
      'Distributive measures (sum, count) can be computed partition-by-partition; Algebraic (avg) requires bounded distributive components; Holistic (median, mode) has no constant storage bound.'
    ],
    examFocus: {
      summary: 'Tested heavily in Question 1 (Star, Constellation, OLAP operations, MOLAP, Apex cuboid) and Question 3 (Data Cube aggregation).',
      relatedQuestionIds: ['Q01', 'Q03']
    },
    concepts: [
      {
        id: 'c2_1',
        name: 'W. H. Inmon\'s Data Warehouse Definition',
        simpleExplanation: 'A dedicated, historical repository that pulls together cleaned records from everywhere in a company and freezes them for strategic trend analysis.',
        formalDefinition: 'A data warehouse is a subject-oriented, integrated, time-variant, and nonvolatile collection of data in support of management\'s decision-making process.',
        howItWorks: '1. Subject-Oriented: Structured around key entities (Customer, Sales, Product) rather than daily operational workflows.\n2. Integrated: Unified naming, coding schemes, and units across disparate databases.\n3. Time-Variant: Every record has an explicit or implicit timestamp spanning years (5-10 years).\n4. Non-Volatile: Read-only; operational records are never updated or deleted in place.',
        example: 'Consolidating retail store sales across multiple regions into a single warehouse to analyze annual growth.',
        importantToRemember: 'Must remember all four keywords: Subject-oriented, Integrated, Time-variant, Non-volatile.',
        commonMistake: 'Writing "non-variable" instead of "non-volatile".',
        examConnection: 'Question 1 Part a asks directly for this definition.',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c2_2',
        name: 'Warehouse Schemas: Star vs Snowflake vs Fact Constellation',
        simpleExplanation: 'Ways to organize tables: Star has one central fact table with flat dimension tables; Snowflake breaks dimension tables into normalized branches; Constellation connects multiple fact tables sharing dimensions.',
        formalDefinition: '• Star Schema: A central fact table surrounded by single-table, denormalized dimensions.\n• Snowflake Schema: A variant where dimension tables are normalized into sub-dimension tables.\n• Fact Constellation (Galaxy) Schema: Multiple fact tables sharing common dimension tables.',
        howItWorks: 'Star schemas prioritize fast queries by avoiding joins. Snowflake minimizes data redundancy by normalizing hierarchies (e.g. splitting City into State and Country). Constellations handle multiple interrelated business processes.',
        example: 'In a retail system: Sales Fact and Shipping Fact sharing the Time, Item, and Location dimensions form a Fact Constellation.',
        importantToRemember: 'Star schemas use denormalized dimensions; Snowflake uses normalized dimensions; Constellation contains >1 fact table.',
        commonMistake: 'Believing Snowflake is always faster; snowflake joins multiple tables at query time which often slows retrieval.',
        examConnection: 'Tested in Question 1 (parts b, c).',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c2_3',
        name: 'OLAP Operations',
        simpleExplanation: 'Interactive tools to inspect a data cube: zooming out (roll up), zooming in (drill down), cutting a slice (slice & dice), spinning the cube (pivot), and comparing fact tables (drill across).',
        formalDefinition: 'Operations that enable multidimensional exploration: Roll-up (summarization/dimension reduction), Drill-down (navigation to fine-grained detail), Slice (selection on 1 dimension), Dice (subcube selection on >=2 dimensions), Pivot (reorienting view axes), Drill-across (querying across multiple fact tables).',
        howItWorks: '• Roll-up climbs concept hierarchies (Day -> Month -> Quarter -> Year).\n• Drill-down steps down hierarchies (Country -> Region -> City).\n• Slice fixes one dimension (e.g. Time = "Q1").\n• Dice selects a bounding box (e.g. Time in {"Q1","Q2"} AND Region in {"North","South"}).\n• Pivot rotates the display matrix (e.g., swapping row and column headers).\n• Drill-across links facts via conformed dimensions.',
        example: 'Pivoting a sales table so rows represent Quarters instead of Products.',
        importantToRemember: 'Roll-up aggregates; Drill-down disaggregates; Pivot rotates; Drill-across spans multiple fact tables.',
        commonMistake: 'Confusing Slice (1 dimension constrained) with Dice (multiple dimensions constrained).',
        examConnection: 'Directly tested in Question 1 (parts d, e, f).',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c2_4',
        name: 'Measure Categories: Distributive, Algebraic, Holistic',
        simpleExplanation: 'How math functions behave when computed in chunks: Distributive can be done piece-by-piece; Algebraic combines bounded pieces; Holistic cannot be broken down without holding all data.',
        formalDefinition: '• Distributive: Function f applied to n partition aggregates equals function applied to raw data (e.g., count, sum, min, max).\n• Algebraic: Function can be computed by an algebraic function with M bounded arguments from distributive measures (e.g., avg = sum/count).\n• Holistic: No constant storage bound on sub-aggregates (e.g., median, mode, rank).',
        howItWorks: 'Distributive measures allow easy parallel cube computation across distributed nodes. Algebraic requires keeping track of intermediate components (e.g. sum and count to compute avg). Holistic requires sorting or storing all values.',
        example: 'Average cannot be computed by averaging averages unless weights/counts are stored.',
        importantToRemember: 'Sum/Count are Distributive; Avg/StdDev are Algebraic; Median/Mode/Rank are Holistic.',
        commonMistake: 'Assuming average is distributive; avg(a, b, c) != avg(avg(a, b), c) unless group sizes are identical.',
        examConnection: 'Fundamental to data cube computation in Question 3.',
        relatedQuestionIds: ['Q01', 'Q03']
      }
    ]
  },
  {
    id: 'L03',
    code: 'IN 3410 - Lec 03',
    title: 'Data Preprocessing',
    shortTitle: 'Data Preprocessing',
    author: 'Saminda Premaratne',
    chapterNumber: 3,
    overview: 'Covers why real-world data is dirty, major data preprocessing tasks (cleaning, integration, transformation, reduction, discretization), techniques for handling missing and noisy data, correlation analysis, normalization formulas, and discretization strategies.',
    learningObjectives: [
      'Explain the reasons why real-world data is dirty (incomplete, noisy, inconsistent).',
      'Handle missing values using imputation techniques (mean, class-mean, deduction, mode).',
      'Apply data smoothing using equal-width, equal-depth binning and MaxDiff histograms.',
      'Calculate normalization via Min-Max, Z-score, and Decimal Scaling.',
      'Understand correlation analysis via Pearson correlation and Chi-Square test.',
      'Apply discretization using the 3-4-5 rule and entropy-based partitioning.'
    ],
    importantPoints: [
      'Garbage in, garbage out: no quality data leads to no quality mining results.',
      'Equal-width binning divides data into equal numerical spans W = (Max - Min)/N; vulnerable to outliers.',
      'Equal-depth binning divides data so each bin has the exact same count of samples N/B; resistant to skew.',
      'MaxDiff histograms set boundaries between the adjacent values with the largest numerical gaps.',
      'Min-Max normalization linearly transforms values into [new_min, new_max].',
      'Handling missing values should never delete tuples when data is limited.'
    ],
    examFocus: {
      summary: 'Forms 100% of Question 2 (25 marks) on equal-width, equal-depth, MaxDiff histograms, Min-Max normalization, and missing data imputation.',
      relatedQuestionIds: ['Q01', 'Q02']
    },
    concepts: [
      {
        id: 'c3_1',
        name: 'Data Smoothing by Binning (Equal-Width & Equal-Depth)',
        simpleExplanation: 'Sorting numbers and grouping them into buckets to smooth away minor noise and fluctuations by replacing values with bin averages, medians, or boundary values.',
        formalDefinition: 'An unsupervised discretization and smoothing method. Equal-width partitions continuous range into N intervals of equal width W = (B - A)/N. Equal-depth partitions continuous range into N intervals each containing roughly N/B tuples.',
        howItWorks: '1. Sort the entire dataset in ascending order.\n2. In equal-width, calculate bin width W = (Max - Min)/N and assign numbers to intervals [Min, Min+W), [Min+W, Min+2W), etc.\n3. In equal-depth, assign an equal count of k = Total/N records to each bin.\n4. Smooth by mean: calculate average of bin and replace all values with this mean.\n5. Smooth by boundaries: replace each item with whichever boundary (min or max of the bin) is numerically closest.',
        example: 'Values: [4, 8, 9, 15], [21, 21, 24, 25], [26, 28, 29, 34]. Smoothed by means: [9, 9, 9, 9], [23, 23, 23, 23], [29, 29, 29, 29].',
        importantToRemember: 'Equal-width uses equal numerical distance; equal-depth uses equal sample counts. In boundary smoothing, values tie-break to the closest endpoint.',
        commonMistake: 'Forgetting to sort the numbers before partitioning.',
        examConnection: 'Tested in Question 2(a)(i) and Question 2(a)(ii).',
        relatedQuestionIds: ['Q02']
      },
      {
        id: 'c3_2',
        name: 'MaxDiff Histogram',
        simpleExplanation: 'A smart histogram that places bucket borders where the biggest sudden jumps (gaps) occur between sorted numbers.',
        formalDefinition: 'A histogram partitioning rule that sets bucket boundaries between adjacent sorted value pairs that exhibit the β - 1 largest absolute differences, where β is the desired number of buckets.',
        howItWorks: '1. Sort all unique values in ascending order.\n2. Compute the absolute difference between every consecutive pair: diff_i = value_{i+1} - value_i.\n3. Rank the differences from largest to smallest.\n4. Pick the top (β - 1) largest differences as the split points.\n5. Split the data at those gaps to form exactly β buckets.',
        example: 'Sorted values: 23 ... 42, 47, 51, 54, 56, 67 ... 77. Gaps: 56 to 67 is 11, 42 to 47 is 5. Top 2 gaps create 3 bins: [23-42], [47-56], [67-77].',
        importantToRemember: 'For β buckets, you need exactly β - 1 split points placed at the β - 1 largest consecutive differences.',
        commonMistake: 'Looking at differences between unsorted data or confusing MaxDiff with V-optimal histograms.',
        examConnection: 'Tested in Question 2(a)(iii).',
        relatedQuestionIds: ['Q02']
      },
      {
        id: 'c3_3',
        name: 'Min-Max Normalization',
        simpleExplanation: 'Rescaling numbers so they neatly fit into a chosen target range, such as 0 to 1, while preserving relative distances.',
        formalDefinition: 'A linear transformation mapping original value v of attribute A to v\' in range [new_min_A, new_max_A] via formula: v\' = ((v - min_A)/(max_A - min_A)) * (new_max_A - new_min_A) + new_min_A.',
        howItWorks: '1. Identify min_A and max_A in the dataset.\n2. Calculate the original range = max_A - min_A.\n3. Subtract min_A from value v, divide by range, and scale to target interval.',
        example: 'For Test Score where min = 40, max = 100, score 78 maps to: (78 - 40)/(100 - 40) = 38/60 = 0.633 in [0, 1].',
        importantToRemember: 'Values equal to min become 0.0; values equal to max become 1.0.',
        commonMistake: 'Using an individual tuple value instead of the global minimum/maximum of the attribute.',
        examConnection: 'Tested in Question 2(b).',
        relatedQuestionIds: ['Q02']
      },
      {
        id: 'c3_4',
        name: 'Handling Missing Data',
        simpleExplanation: 'Filling in missing holes in a dataset intelligently without deleting valuable records.',
        formalDefinition: 'Techniques for estimating or imputing missing attribute values: 1. Ignore tuple (only if class label is missing), 2. Manual entry, 3. Global constant, 4. Attribute mean/median, 5. Class-conditional mean (smarter), 6. Predictive inference / record linkage.',
        howItWorks: '• Check for duplicate or linked records (e.g. same employee ID, name, join date) to restore exact missing facts.\n• For numerical fields without linked records, use the mean of that attribute within the same subgroup/department.\n• For categorical fields, use the most frequent value (mode) or mark as "Unknown".',
        example: 'In employee records, if Amal Perera in Sales has Salary missing in one row, check the identical Amal Perera row where Salary is 55,000.',
        importantToRemember: 'Deleting tuples with missing values causes loss of information, especially when datasets are small.',
        commonMistake: 'Automatically discarding rows with missing values instead of applying imputation.',
        examConnection: 'Tested in Question 2(d).',
        relatedQuestionIds: ['Q02']
      }
    ]
  },
  {
    id: 'L04',
    code: 'IN 3410 - Lec 04',
    title: 'Principles of Dimensional Modeling and Physical Design',
    shortTitle: 'Dimensional Modeling & Design',
    author: 'Saminda Premaratne',
    chapterNumber: 4,
    overview: 'Explains the core principles of Ralph Kimball\'s dimensional modeling, fact tables vs dimension tables, the canonical 4-Step Design Process, comparing ER models against dimensional models, and designing date hierarchies.',
    learningObjectives: [
      'Master the four key components of dimensional models: Facts, Dimensions, Attributes, and Hierarchies.',
      'Execute Kimball\'s 4-Step Design Process: 1. Choose Business Process, 2. Declare Grain, 3. Choose Dimensions, 4. Identify Facts.',
      'Compare Entity-Relationship (ER) models (transaction processing) vs Dimensional models (analytical retrieval).',
      'Design comprehensive date dimension tables supporting calendar and fiscal reporting hierarchies.',
      'Construct a Fact-Dimension Matrix to map business processes across conformed dimensions.'
    ],
    importantPoints: [
      'ER modeling minimizes data redundancy (3NF) to optimize transactional updates; Dimensional modeling maximizes understandability and query retrieval speed.',
      'The Grain determines what each individual row in the fact table represents (e.g., an individual line item on an invoice).',
      'Facts are numeric, additive measurements; Dimensions contain descriptive, textual query constraints.',
      'Time is an imperative, mandatory dimension in every data warehouse.'
    ],
    examFocus: {
      summary: 'Directly tested in Question 1 (4-step design process, fact table, measure definition, constellation schema).',
      relatedQuestionIds: ['Q01']
    },
    concepts: [
      {
        id: 'c4_1',
        name: 'The 4-Step Dimensional Design Process',
        simpleExplanation: 'The industry-standard four steps created by Ralph Kimball to design any data warehouse.',
        formalDefinition: 'The canonical 4-step methodology for designing a dimensional model: Step 1: Choose the Business Process (or Data Mart), Step 2: Declare the Grain, Step 3: Choose the Dimensions, Step 4: Identify the Numeric Facts.',
        howItWorks: '1. Choose Business Process: Select the business activity to model (e.g. Sales, Orders, Shipments).\n2. Declare the Grain: Define exactly what one fact table row represents (e.g., individual item scanned at checkout).\n3. Choose Dimensions: Identify the "who, what, where, when, why" surrounding the event (Customer, Store, Product, Time).\n4. Identify Facts: Determine the numeric additive measures (Quantity Sold, Unit Price, Total Amount).',
        example: 'Designing an e-commerce data warehouse: Process = Internet Sales, Grain = One product in an online cart order, Dimensions = Customer, Product, Date, Currency, Facts = SalesAmount, TaxAmt, OrderQuantity.',
        importantToRemember: 'Step 1 is Choose Process/Mart; Step 2 is Declare Grain; Step 3 is Choose Dimensions; Step 4 is Identify Facts.',
        commonMistake: 'Skipping grain declaration and jumping straight to picking dimensions, which leads to inconsistent levels of detail.',
        examConnection: 'Tested in Question 1 (part l: step 1 is business process; part m: step 3 is dimensions).',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c4_2',
        name: 'Entity-Relationship (ER) vs. Dimensional Modeling',
        simpleExplanation: 'ER models are designed for data entry clerks typing into banking forms without duplicate data; Dimensional models are designed for business managers running massive analytical reports.',
        formalDefinition: '• ER Modeling: One table per entity, normalized to 3NF to eliminate redundancy and optimize transaction processing (OLTP).\n• Dimensional Modeling: Centered around fact and dimension tables, denormalized to optimize query performance and understandability (OLAP).',
        howItWorks: 'ER models feature complex webs of tables with foreign key constraints to prevent anomalies during insert/update/delete. Dimensional models use star/snowflake schemas where queries join simple dimension tables to a central fact table.',
        example: 'An ER model splits customer address, city, and zip into 3 separate tables. A dimensional model keeps them in a single DimCustomer table for instant filtering.',
        importantToRemember: 'ER = optimized for transactions & updates; Dimensional = optimized for retrieval & decision support.',
        commonMistake: 'Attempting to query a 3NF ER model directly for large-scale enterprise analytics, resulting in 20-table join bottlenecks.',
        examConnection: 'Supports Question 1 and Question 3 concepts.',
        relatedQuestionIds: ['Q01', 'Q03']
      }
    ]
  },
  {
    id: 'L05',
    code: 'IN 3410 - Lec 05',
    title: 'Data Cube Computation and Data Generalization',
    shortTitle: 'Data Cube Computation & AOI',
    author: 'Saminda Premaratne',
    chapterNumber: 5,
    overview: 'Explores efficient computation of multidimensional data cubes, Multi-Way Array Aggregation, Bottom-Up Computation (BUC), Star Attribute Reduction and Star Trees, High-D OLAP using Shell Fragments, and Attribute-Oriented Induction (AOI).',
    learningObjectives: [
      'Understand the cuboid lattice structure: Base Cuboid, Aggregate Cells, and Apex Cuboid.',
      'Explain Multi-Way Array Aggregation and its memory chunking strategy.',
      'Apply Star Attribute Reduction to eliminate low-support values and compress tables losslessly for iceberg cubing.',
      'Construct Star Trees and Star Tables.',
      'Perform Attribute-Oriented Induction (AOI) through attribute removal, generalization, and count accumulation.'
    ],
    importantPoints: [
      'A base cell belongs to a base cuboid; an aggregate cell belongs to a non-base cuboid.',
      'Star attribute reduction replaces attribute values with frequency < minsup with a star (*), collapsing identical rows.',
      'Attribute-Oriented Induction abstracts relational data from low conceptual levels to higher ones using concept hierarchies.',
      'In AOI, unique identifiers (e.g. Student ID, Name) with no concept hierarchy are removed.'
    ],
    examFocus: {
      summary: 'Directly tested in Question 2(c) (AOI, 8 marks), Question 3(a) (Star Attribute Reduction, 12 marks), and Question 3(b) (Cuboids & Multiway Array Aggregation, 18 marks).',
      relatedQuestionIds: ['Q01', 'Q02', 'Q03']
    },
    concepts: [
      {
        id: 'c5_1',
        name: 'Star Attribute Reduction & Star Trees',
        simpleExplanation: 'If certain doctor names or weekdays only appear once or twice, we do not need to track them individually in iceberg cubes; we replace them with a star (*) and merge identical rows.',
        formalDefinition: 'An iceberg cube compression method. If a single-dimensional aggregate on an attribute value p does not satisfy the iceberg condition (count < minsup), p is replaced by \'*\'. All such attributes become star attributes, creating a lossless compression of the original table for iceberg computation.',
        howItWorks: '1. Compute 1-dimensional frequency counts for all attribute values in the table.\n2. Compare each count against minimum support (minsup).\n3. Any value with count < minsup is replaced by \'*\'.\n4. Create a side lookup "Star Table" mapping replaced values to \'*\'.\n5. Rewrite the dataset with stars and collapse identical rows, accumulating their counts.',
        example: 'In hospital patient visits with minsup = 3, Dr. Fernando (count 2) and Dr. Gamage (count 1) are replaced by \'*\', and tuples with identical stars merge together.',
        importantToRemember: 'Star reduction is lossless with respect to iceberg cube computation because infrequent values can never satisfy minsup in multi-dimensional combinations.',
        commonMistake: 'Replacing values that meet or exceed minsup, or failing to combine duplicate rows after star replacement.',
        examConnection: 'Tested in Question 3(a) (12 marks).',
        relatedQuestionIds: ['Q03']
      },
      {
        id: 'c5_2',
        name: 'Data Cube Lattice & Multiway Array Aggregation',
        simpleExplanation: 'Building every possible summary combination of dimensions (all products, by region, by month) efficiently in RAM using chunks rather than slow sorting.',
        formalDefinition: 'An array-based data cube computation algorithm that partitions a multidimensional array into chunks and computes multiple cuboids simultaneously in a single pass, reusing intermediate aggregates.',
        howItWorks: '1. A dataset with n dimensions forms a lattice of 2^n cuboids.\n2. The base cuboid (n-D) is the most specialized (e.g., Product x Region x Month).\n3. The apex cuboid (0-D) is the grand total (all, all, all).\n4. Multiway array aggregation chunks the 3D array into blocks in memory.\n5. As chunks are traversed, 2D planes (AB, AC, BC) are computed simultaneously into memory buffers.\n6. 2D planes are then projected into 1D vectors and finally the 0D apex.',
        example: 'Computing grain sales across 4 products, 3 regions, and 3 months produces 1 apex, 3 1-D cuboids, 3 2-D cuboids, and 1 3-D base cuboid (8 cuboids total).',
        importantToRemember: 'Apex cuboid = 0-D (grand total); Base cuboid = n-D (atomic level). Intermediate cuboids are aggregate cells.',
        commonMistake: 'Confusing Multiway Array Aggregation (unsupervised chunking, no pruning) with BUC (Bottom-Up Computation which supports Apriori pruning).',
        examConnection: 'Tested in Question 3(b) (18 marks).',
        relatedQuestionIds: ['Q01', 'Q03']
      },
      {
        id: 'c5_3',
        name: 'Attribute-Oriented Induction (AOI)',
        simpleExplanation: 'Summarizing a detailed table of people by removing unique details (names, IDs) and replacing specific numbers/cities with broader categories (young, central province, first class).',
        formalDefinition: 'A data mining generalization method (KDD \'89) that abstracts task-relevant data in a relational database from low conceptual levels to higher ones via attribute removal or attribute generalization.',
        howItWorks: '1. InitialRel: Extract task-relevant data via query.\n2. PreGen: Analyze distinct values per attribute to create a generalization plan.\n   - If an attribute has high cardinality with no hierarchy (e.g. ID, Name), REMOVE it.\n   - If an attribute has a concept hierarchy (e.g. City -> Province, GPA -> Honors Class), GENERALIZE it to a target threshold.\n3. PrimeGen: Apply the generalization plan to produce the "prime generalized relation".\n4. Accumulate Counts: Merge identical generalized tuples and sum their counts.',
        example: 'In student records: Student ID and Name are removed; Age 21 is generalized to "Young"; City Colombo is generalized to "Western Province"; GPA 3.8 is generalized to "First Class".',
        importantToRemember: 'AOI does NOT discard rows; it replaces specific attribute values with higher-level concepts and merges resulting identical rows by summing counts.',
        commonMistake: 'Keeping unique student IDs or names, which prevents tuple merging and ruins generalization.',
        examConnection: 'Tested in Question 2(c) (8 marks).',
        relatedQuestionIds: ['Q02']
      }
    ]
  },
  {
    id: 'L06',
    code: 'IN 3410 - Lec 06',
    title: 'Mining Frequent Patterns, Association and Correlations',
    shortTitle: 'Association Rules & Apriori',
    author: 'Saminda Premaratne',
    chapterNumber: 5,
    overview: 'Explores market basket analysis, itemsets, support, confidence, the Apriori principle, candidate generation and pruning, and FP-growth tree algorithms.',
    learningObjectives: [
      'Define k-itemset, frequent itemset, support, and confidence.',
      'State and explain the Apriori Property: Any subset of a frequent itemset must be frequent.',
      'Perform candidate generation via self-joining (L_k * L_k) and pruning.',
      'Calculate Support and Confidence for multi-item association rules.',
      'Explain FP-Tree construction and why FP-Growth is faster than Apriori.'
    ],
    importantPoints: [
      'Support(A -> B) is P(A ∪ B) = count(A ∪ B) / Total_Transactions.',
      'Confidence(A -> B) is P(B | A) = count(A ∪ B) / count(A).',
      'Apriori requires multiple full database scans and generates huge candidate sets.',
      'FP-Growth constructs a compressed Frequent Pattern Tree in just two database scans with no candidate generation.'
    ],
    examFocus: {
      summary: 'Tested in Question 4(a) (10 marks) requiring exact support and confidence computations for 5 association rules.',
      relatedQuestionIds: ['Q04']
    },
    concepts: [
      {
        id: 'c6_1',
        name: 'Support and Confidence in Association Rules',
        simpleExplanation: 'Support is how popular the combo is overall; Confidence is how likely a customer is to buy item Y when they already picked up item X.',
        formalDefinition: 'For association rule X → Y:\n• Support s: The probability that a transaction contains X ∪ Y, s = count(X ∪ Y) / N.\n• Confidence c: The conditional probability that a transaction having X also contains Y, c = count(X ∪ Y) / count(X).',
        howItWorks: '1. Count the number of transactions containing the antecedent X.\n2. Count the number of transactions containing both X and Y (X ∪ Y).\n3. Support = count(X ∪ Y) / N.\n4. Confidence = count(X ∪ Y) / count(X).',
        example: 'Out of 10 transactions, 9 have RAM, and 8 have both RAM and Monitor. Support(RAM → Monitor) = 8/10 = 80%; Confidence = 8/9 = 88.89%.',
        importantToRemember: 'Support denominator is ALWAYS total transactions N; Confidence denominator is the count of the ANTECEDENT (left-hand side).',
        commonMistake: 'Using total transactions N as the denominator for confidence.',
        examConnection: 'Tested directly in Question 4(a) for 5 rules.',
        relatedQuestionIds: ['Q04']
      },
      {
        id: 'c6_2',
        name: 'The Apriori Algorithm & Pruning Principle',
        simpleExplanation: 'If an itemset like {Beer, Diaper} is infrequent, there is no point checking {Beer, Diaper, Pretzels} because any bigger group is guaranteed to be infrequent too.',
        formalDefinition: 'The Apriori principle states: Any non-empty subset of a frequent itemset must also be frequent. Conversely, if an itemset is infrequent, all its supersets are infrequent and can be pruned.',
        howItWorks: '1. Scan DB to find frequent 1-itemsets (L1).\n2. Join L_k with L_k to generate candidate (k+1)-itemsets C_{k+1}.\n3. Prune candidates that contain any infrequent k-subset.\n4. Scan DB to count candidate support and filter to form L_{k+1}.\n5. Repeat until no more candidates can be generated.',
        example: 'If {A, D} has support 1 while minsup is 2, any 3-itemset containing {A, D} like {A, B, D} is pruned before counting.',
        importantToRemember: 'Apriori candidate generation has two steps: Self-joining L_k and Pruning non-frequent subsets.',
        commonMistake: 'Forgetting the pruning step and checking all join candidates against the database.',
        examConnection: 'Tested in Question 1 and foundational for Question 4(a).',
        relatedQuestionIds: ['Q01', 'Q04']
      },
      {
        id: 'c6_3',
        name: 'FP-Growth vs. Apriori',
        simpleExplanation: 'FP-Growth compresses the database into a tree structure so you only scan the disk twice, avoiding millions of candidate combinations.',
        formalDefinition: 'A divide-and-conquer frequent pattern mining algorithm that mines frequent itemsets without candidate generation by constructing an FP-Tree and mining conditional FP-trees recursively.',
        howItWorks: '1. First scan: Count 1-itemset frequencies, discard infrequent items, and sort remaining items in descending frequency order (F-list).\n2. Second scan: Insert each transaction into a prefix tree (FP-Tree) with shared prefixes.\n3. Build conditional pattern bases by tracing item links from bottom of header table.\n4. Build conditional FP-trees recursively.',
        example: 'A dataset of 10,000 transactions collapses into an in-memory FP-tree that is orders of magnitude smaller.',
        importantToRemember: 'FP-Growth requires only 2 database passes and eliminates candidate generation.',
        commonMistake: 'Assuming FP-Tree can grow larger than the original database (it never does, as infrequent items are pruned).',
        examConnection: 'Tested in Question 1 and Question 4.',
        relatedQuestionIds: ['Q01', 'Q04']
      }
    ]
  },
  {
    id: 'L07',
    code: 'IN 3410 - Lec 07',
    title: 'Classification and Prediction',
    shortTitle: 'Classification & Decision Trees',
    author: 'Saminda Premaratne',
    chapterNumber: 6,
    overview: 'Covers supervised classification vs continuous prediction, the two-step classification process, decision tree induction (ID3 / C4.5 / CART), entropy, information gain, leaf node stopping criteria, Naive Bayes, neural networks, and model validation.',
    learningObjectives: [
      'Differentiate classification (discrete class labels) from prediction (continuous values).',
      'Explain the two-step classification process: Model Construction and Model Usage.',
      'Calculate Entropy: Entropy(t) = - sum(p * log_2(p)).',
      'Calculate Information Gain: Gain(A) = Info(D) - Info_A(D).',
      'Identify stopping conditions for decision tree induction (pure leaf nodes).',
      'Understand Naive Bayes attribute independence assumption.',
      'Explain multi-layer feed-forward neural networks and backpropagation.'
    ],
    importantPoints: [
      'In a two-class problem, a 50/50 split gives maximum entropy (1.0 bit); a pure node gives minimum entropy (0.0 bits).',
      'Information Gain measures the expected reduction in entropy caused by partitioning on an attribute.',
      'A node becomes a leaf when all instances belong to the same class (100% pure).',
      'Overfitting occurs when a tree memorizes training noise; prevented by pre-pruning or post-pruning.',
      'Evaluation requires splitting data into training, validation, and test sets.'
    ],
    examFocus: {
      summary: 'Forms 100% of Question 4(b) (15 marks) requiring entropy calculations before/after split, first split attribute selection, and leaf node identification.',
      relatedQuestionIds: ['Q04']
    },
    concepts: [
      {
        id: 'c7_1',
        name: 'Entropy & Information Gain (ID3)',
        simpleExplanation: 'Entropy measures chaos or mixedness in a group. If all records are Fraud, entropy is 0 (pure). Information gain is the reduction in chaos achieved by asking about an attribute.',
        formalDefinition: '• Entropy(D) = - sum_{i=1}^m p_i log_2(p_i), where p_i is probability of class i in D.\n• Expected information needed to classify D after splitting on attribute A with v values: Info_A(D) = sum_{j=1}^v (|D_j| / |D|) * Info(D_j).\n• Information Gain: Gain(A) = Info(D) - Info_A(D).',
        howItWorks: '1. Calculate overall initial entropy of the dataset Info(D).\n2. For candidate attribute A, partition dataset D into subsets D_1, D_2, ... D_v according to attribute values.\n3. Compute the entropy of each subset Info(D_j).\n4. Weight each subset entropy by its fraction of records (|D_j| / |D|) and sum them to get Info_A(D).\n5. Subtract Info_A(D) from Info(D) to obtain Gain(A).\n6. Select the attribute that maximizes Gain(A).',
        example: 'In the fraud dataset (15 records, 7 Genuine, 8 Fraud), initial entropy is 0.997. Splitting on Transaction Amount yields expected entropy 0.324, giving Gain = 0.673 bits.',
        importantToRemember: 'The attribute with the HIGHEST Information Gain (or lowest conditional entropy) is selected as the splitting attribute.',
        commonMistake: 'Forgetting the negative sign in the entropy formula or using log_10 / ln instead of log_2.',
        examConnection: 'Tested in Question 4(b)(i, ii, iii).',
        relatedQuestionIds: ['Q04']
      },
      {
        id: 'c7_2',
        name: 'Decision Tree Stopping Conditions & Leaf Nodes',
        simpleExplanation: 'When a branch becomes 100% pure (all records share the same outcome), stop splitting and create a leaf node with that final verdict.',
        formalDefinition: 'A recursive partitioning stopping rule in decision tree induction. If all samples at node t belong to the same class c, node t is converted into a leaf node labeled with class c (Entropy = 0).',
        howItWorks: 'During tree construction, check partitions:\n1. If all samples in a branch have Class = "Genuine", terminate as leaf "Genuine".\n2. If all samples in a branch have Class = "Fraud", terminate as leaf "Fraud".\n3. If no remaining attributes exist, apply majority voting to assign the leaf label.',
        example: 'When splitting on Transaction Amount, the "Low" branch contains 4 records which are all Genuine (Entropy = 0); it becomes a leaf node labeled "Genuine".',
        importantToRemember: 'Purity means Entropy = 0.0 bits. No further splitting is performed on that branch.',
        commonMistake: 'Continuing to split a subset that is already pure.',
        examConnection: 'Tested in Question 4(b)(iv).',
        relatedQuestionIds: ['Q04']
      },
      {
        id: 'c7_3',
        name: 'Naïve Bayes Classifier',
        simpleExplanation: 'Estimates the probability of an outcome by multiplying individual probabilities together, assuming each clue is independent of the others.',
        formalDefinition: 'A probabilistic classifier based on Bayes\' Theorem with the strong assumption of class-conditional independence between attributes: P(X | C_i) = product_{k=1}^n P(x_k | C_i).',
        howItWorks: '1. Calculate prior class probabilities P(C_i) = N_{C_i} / N.\n2. For each attribute x_k, estimate conditional probability P(x_k | C_i) from training frequencies.\n3. Multiply probabilities: P(X | C_i) * P(C_i).\n4. Assign tuple X to the class that maximizes this posterior value.',
        example: 'Predicting loan default or tax evasion based on Refund, Marital Status, and Income.',
        importantToRemember: 'If an attribute has 0 counts in a class, P(x_k | C_i) becomes 0 (requires Laplacian correction).',
        commonMistake: 'Assuming attributes are correlated; Naive Bayes strictly assumes attribute independence given the class label.',
        examConnection: 'Core classifier concept taught alongside Decision Trees in Lecture 07.',
        relatedQuestionIds: ['Q01', 'Q04']
      },
      {
        id: 'c7_4',
        name: 'Neural Networks & Backpropagation',
        simpleExplanation: 'A network of simulated brain cells (neurons) connected by adjustable weights that learns by comparing predictions to the correct answers and nudging weights backward to fix mistakes.',
        formalDefinition: 'A multi-layer feed-forward neural network consists of an input layer, one or more hidden layers, and an output layer. Backpropagation iteratively updates weights in the backwards direction to minimize mean squared error between predictions and target values.',
        howItWorks: '1. Initialize random weights and biases.\n2. Feed-forward: Inputs pass through activation functions (sigmoid/ReLU) to compute output.\n3. Calculate error difference between network prediction and known target class.\n4. Backpropagation: Propagate error backwards from output to input layer, adjusting weights via gradient descent.\n5. Repeat until convergence.',
        example: 'Classifying handwriting digits or detecting complex non-linear financial patterns.',
        importantToRemember: 'Strengths: High tolerance to noise, classifies untrained patterns, handles continuous inputs. Weaknesses: Long training time, poor interpretability (black box).',
        commonMistake: 'Claiming neural networks are easy to interpret; they have poor symbolic interpretability.',
        examConnection: 'Foundational topic in Lecture 07 syllabus.',
        relatedQuestionIds: ['Q01']
      }
    ]
  },
  {
    id: 'L08',
    code: 'IN 3410 - Lec 08',
    title: 'Cluster Analysis',
    shortTitle: 'Cluster Analysis',
    author: 'Saminda Premaratne',
    chapterNumber: 9,
    overview: 'Explains unsupervised cluster analysis, distance metrics (Manhattan, Euclidean, Minkowski), partitioning algorithms (K-means and K-medoids/PAM), and hierarchical agglomerative clustering (HAC) with single, complete, and average linkage.',
    learningObjectives: [
      'Define cluster analysis and explain the clustering quality criteria (high intra-class, low inter-class similarity).',
      'Compute distances using Manhattan (q=1), Euclidean (q=2), and Minkowski distance functions.',
      'Execute the K-means algorithm step-by-step until convergence.',
      'Explain K-medoids (PAM - Partitioning Around Medoids) and swapping cost TC_{ih}.',
      'Build hierarchical clustering dendrograms using Single Linkage, Complete Linkage, and Average Linkage.'
    ],
    importantPoints: [
      'Clustering is unsupervised: no predefined class labels exist in the data.',
      'K-means is sensitive to outliers because the mean is heavily skewed by extreme values; K-medoids or K-medians solves this.',
      'Single linkage uses the minimum pairwise distance between points (produces long, loose clusters).',
      'Complete linkage uses the maximum pairwise distance between points (produces tight clusters).',
      'Average linkage computes distance between cluster centroid mean vectors.'
    ],
    examFocus: {
      summary: 'Essential syllabus topic covering partitioning and hierarchical algorithms, distance metrics, and dendrogram construction.',
      relatedQuestionIds: ['Q01']
    },
    concepts: [
      {
        id: 'c8_1',
        name: 'K-Means Clustering',
        simpleExplanation: 'Pick K random center points, assign every data dot to its closest center, recalculate the center to the middle of its assigned dots, and repeat until the centers stop moving.',
        formalDefinition: 'A centroid-based partitioning clustering algorithm that divides n objects into K clusters where each object belongs to the cluster with the nearest mean (centroid), minimizing the sum of squared errors.',
        howItWorks: '1. Pick K initial cluster centers randomly.\n2. Assign each data point to its closest center (using Euclidean distance).\n3. Recompute each cluster center as the mean (average) of all points currently assigned to it.\n4. Repeat reassignment and mean recomputation until convergence (no points change clusters).',
        example: 'Clustering points A1(2,10), A2(2,5), A3(8,4), etc. into 3 clusters using Manhattan or Euclidean distance.',
        importantToRemember: 'K-means works with numeric data only and can get trapped in local optima depending on initial seeds.',
        commonMistake: 'Confusing K-means (uses calculated virtual mean points) with K-medoids (uses actual data objects as centers).',
        examConnection: 'Core syllabus partitioning method.',
        relatedQuestionIds: ['Q01']
      },
      {
        id: 'c8_2',
        name: 'Hierarchical Agglomerative Clustering (HAC) & Linkage',
        simpleExplanation: 'Start with every single object in its own tiny cluster, then merge the two closest clusters together step-by-step until all objects join into a single family tree (dendrogram).',
        formalDefinition: 'A bottom-up hierarchical clustering approach that starts with each object as a singleton cluster and iteratively merges the most similar pair of clusters based on a linkage metric until only one cluster remains.',
        howItWorks: '1. Construct distance matrix between all pairs of objects.\n2. Merge the two clusters with smallest distance.\n3. Update distance matrix using linkage rule:\n   - Single Linkage: min distance between any point in cluster A and any point in cluster B.\n   - Complete Linkage: max distance between any point in A and any point in B.\n   - Average Linkage: average distance between all pairs or distance between centroids.\n4. Repeat until all items are in one cluster, producing a dendrogram.',
        example: 'Clustering Italian cities (Bari, Florence, Milan, Naples, Rome, Turin) by geographic distance matrix.',
        importantToRemember: 'Single linkage tends to produce long chained clusters; complete linkage produces compact spheres.',
        commonMistake: 'Confusing agglomerative (bottom-up merge) with divisive (top-down split).',
        examConnection: 'Core hierarchical clustering topic.',
        relatedQuestionIds: ['Q01']
      }
    ]
  }
];
