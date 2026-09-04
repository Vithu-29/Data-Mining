import { ExamQuestion } from '../types';

export const questionsData: ExamQuestion[] = [
  {
    id: 'Q01',
    number: 1,
    questionCode: 'Question 1',
    title: 'Fundamental Concepts Fill-in-the-Blanks',
    exactQuestionText: `Fill in the blanks. Write the question number and the answer in the answer script for the questions below. Each question is worth 1 mark.

a. A data warehouse is a ____________, integrated, time-variant, and nonvolatile collection of data in support of management's decision-making process.
b. In a star schema, the central table that contains measures and foreign keys is called the ____________ table.
c. Multiple fact tables sharing dimension tables form a schema called ____________.
d. The process of summarizing data by climbing up a hierarchy or reducing dimensions in OLAP is called ____________.
e. The OLAP operation that reorients the data cube for visualization is called ____________.
f. The OLAP operation that involves more than one fact table is called ____________.
g. In MOLAP, data is stored in a ____________ format for faster retrieval.
h. Data mining is the process of discovering ____________ patterns from large amounts of data.
i. The three main characteristics of Big Data are Volume, Variety, and ____________.
j. The process of cleaning and integrating data before mining is called ____________.
k. A data mining system may generate thousands of patterns, but not all of them are ____________.
l. In the 4-Step Design Process, the first step is to choose the ____________.
m. The third step in the 4-Step Design Process is to choose the ____________.
n. A ____________ is a numeric attribute of a fact that represents performance or behavior of the business.
o. Combining data from multiple sources into a coherent store is known as ____________.
p. The process of scaling attribute values to fall within a small, specified range is called ____________.
q. The normalization method that divides each value by a power of 10 is called ____________.
r. The process of dividing the range of a continuous attribute into intervals is called ____________.
s. A cell that belongs to a non-base cuboid is called an ____________ cell.
t. The most aggregated level in a data cube lattice is called the ____________ cuboid.`,
    marks: 20,
    topics: [
      'Data Warehouse Fundamentals',
      'Dimensional Modeling (Star & Constellation)',
      'OLAP Operations',
      'MOLAP Architecture',
      'Big Data Characteristics',
      'Data Preprocessing & Cleaning',
      'Normalization & Discretization',
      'Data Cube Terminology'
    ],
    lectureIds: ['L01', 'L02', 'L03', 'L04', 'L05'],
    difficulty: 'Easy',
    questionType: 'Fill in the Blanks',
    answer: `Complete and precise fill-in-the-blank answers based directly on lecture notes:
a. subject-oriented (W. H. Inmon definition)
b. fact
c. fact constellation (or constellation schema / galaxy schema)
d. roll up (or drill up)
e. pivot (or rotate)
f. drill across
g. multidimensional array (or array-based multidimensional)
h. interesting (or implicit, previously unknown and potentially useful)
i. Velocity
j. data preprocessing (or data preparation)
k. interesting (or novel / useful)
l. business process (or data mart)
m. dimensions
n. measure
o. data integration
p. normalization
q. decimal scaling (or normalization by decimal scaling)
r. discretization
s. aggregate
t. apex`,
    explanation: `Detailed conceptual justification from uploaded course slides:
• Part a: In Lecture 02 (Slide 6), W. H. Inmon defines a data warehouse as "a subject-oriented, integrated, time-variant, and nonvolatile collection of data in support of management's decision-making process."
• Part b: In Lecture 04 (Slide 5) & Lecture 02 (Slide 25), the central table in a star schema storing numeric additive performance measures and foreign keys to dimensions is strictly defined as the Fact Table.
• Part c: In Lecture 04 (Slide 19) & Lecture 02 (Slide 28), when multiple fact tables share dimension tables, it is known as a Constellation Schema (or Fact Constellation / Galaxy Schema).
• Part d: In Lecture 02 (Slide 40), Roll-up (drill-up) is defined as summarizing data by climbing up a hierarchy or reducing dimensions.
• Part e: In Lecture 02 (Slide 40), Pivot (rotate) is the OLAP operation that reorients the data cube for visualization (e.g., transforming 3D to a series of 2D planes).
• Part f: In Lecture 02 (Slide 40, 65), Drill-across is the OLAP operation involving more than one fact table.
• Part g: In Lecture 02 (Slide 55, 57), MOLAP (Multidimensional OLAP) utilizes array-based multidimensional storage engines (sparse matrix techniques) for fast direct access.
• Part h: In Chapter 1 (Slide 25, 39), Data Mining is the extraction of interesting (non-trivial, implicit, previously unknown, and potentially useful) patterns from data in large databases.
• Part i: In Chapter 1 (Slide 11, 14), the 3V's of Big Data are explicitly Volume, Variety, and Velocity.
• Part j: In Chapter 3 (Slide 2, 6, 8), Data Preprocessing / Data Preparation is the phase dedicated to data cleaning, integration, transformation, and reduction before mining.
• Part k: In Chapter 1 (Slide 52) and Chapter 5 (Slide 39), systems generate thousands of patterns, but only those satisfying interestingness thresholds (support, confidence, novelty) are interesting.
• Part l & m: In Lecture 04 (Slide 36), the Kimball 4-Step Design Process is: 1. Choose the Business Process (or Data Mart), 2. Declare the Grain, 3. Choose the Dimensions, 4. Choose the Facts.
• Part n: In Lecture 04 (Slide 10), a Measure is a numeric attribute of a fact representing the performance or behavior of the business relative to dimensions.
• Part o: In Chapter 3 (Slide 8, 24), Data Integration combines data from multiple heterogeneous sources into a coherent store.
• Part p: In Chapter 3 (Slide 29, 30), Normalization scales attribute values to fall within a small, specified range (e.g. [0.0, 1.0] or [-1.0, 1.0]).
• Part q: In Chapter 3 (Slide 30, 33), Normalization by Decimal Scaling divides each value by 10^j where j is the smallest integer such that Max(|v'|) < 1.
• Part r: In Chapter 3 (Slide 55), Discretization divides the range of a continuous attribute into discrete intervals.
• Part s: In Data Cube Computation (Slide 4, 6), a cell belonging to a base cuboid is a base cell, while a cell belonging to a non-base cuboid is an aggregate cell.
• Part t: In Data Cube Computation (Slide 30, 32) & Lecture 02 (Slide 23, 24), the topmost 0-D cuboid representing the concept 'all' is called the apex cuboid.`,
    stepByStepSolution: [
      'a. Match W.H. Inmon definition -> "subject-oriented"',
      'b. Identify central entity in star schema -> "fact"',
      'c. Identify multi-fact shared dimension schema -> "constellation schema" / "fact constellation"',
      'd. Hierarchy ascent in OLAP -> "roll up" / "drill up"',
      'e. Reorienting visualization plane -> "pivot" / "rotate"',
      'f. Multi-fact table querying -> "drill across"',
      'g. Storage structure of MOLAP -> "multidimensional array"',
      'h. KDD goal: extraction of non-trivial patterns -> "interesting"',
      'i. The 3Vs: Volume, Variety, and Velocity -> "Velocity"',
      'j. Step before mining -> "data preprocessing" / "data preparation"',
      'k. Pattern filtering problem -> "interesting"',
      'l. Step 1 of 4-step dimensional design -> "business process" / "data mart"',
      'm. Step 3 of 4-step dimensional design -> "dimensions"',
      'n. Numeric attribute on a fact -> "measure"',
      'o. Multi-source reconciliation -> "data integration"',
      'p. Scaling values into small interval -> "normalization"',
      'q. Division by 10^j -> "decimal scaling"',
      'r. Splitting continuous domain into intervals -> "discretization"',
      's. Non-base cuboid cell -> "aggregate"',
      't. 0-D top level cuboid -> "apex"'
    ],
    examAnswer: `Exam Answer Script Format:
a. subject-oriented
b. fact
c. fact constellation (or constellation schema)
d. roll up (or drill up)
e. pivot (or rotate)
f. drill across
g. multidimensional array
h. interesting
i. Velocity
j. data preprocessing (or data preparation)
k. interesting
l. business process (or data mart)
m. dimensions
n. measure
o. data integration
p. normalization
q. decimal scaling
r. discretization
s. aggregate
t. apex`,
    lectureReference: {
      lectureId: 'L02',
      lectureTitle: 'Data Warehousing & Data Preprocessing Core Concepts',
      conceptName: 'Definitions and Terminology across Lectures 1-5',
      specificNote: 'Lecture 02 (Slide 6, 23-28, 40, 55), Lecture 03 (Slide 8, 30, 55), Lecture 04 (Slide 5, 10, 36), Data Cube (Slide 4, 30)'
    },
    subParts: [
      { partId: 'a', label: 'Part (a)', text: 'A data warehouse is a ____________, integrated, time-variant, and nonvolatile collection of data in support of management\'s decision-making process.', marks: 1, answer: 'subject-oriented', explanation: 'Direct quote from W.H. Inmon definition.', examAnswer: 'subject-oriented' },
      { partId: 'b', label: 'Part (b)', text: 'In a star schema, the central table that contains measures and foreign keys is called the ____________ table.', marks: 1, answer: 'fact', explanation: 'Central table in star schema contains numerical measures and foreign keys pointing to dimension tables.', examAnswer: 'fact' },
      { partId: 'c', label: 'Part (c)', text: 'Multiple fact tables sharing dimension tables form a schema called ____________.', marks: 1, answer: 'constellation schema (or fact constellation / galaxy schema)', explanation: 'A constellation schema contains multiple fact tables that share dimension tables.', examAnswer: 'constellation schema (or fact constellation)' },
      { partId: 'd', label: 'Part (d)', text: 'The process of summarizing data by climbing up a hierarchy or reducing dimensions in OLAP is called ____________.', marks: 1, answer: 'roll up (or drill up)', explanation: 'Roll up performs aggregation on a data cube either by climbing up a concept hierarchy or by dimension reduction.', examAnswer: 'roll up' },
      { partId: 'e', label: 'Part (e)', text: 'The OLAP operation that reorients the data cube for visualization is called ____________.', marks: 1, answer: 'pivot (or rotate)', explanation: 'Pivot rotates the data axes in view to provide an alternative presentation.', examAnswer: 'pivot' },
      { partId: 'f', label: 'Part (f)', text: 'The OLAP operation that involves more than one fact table is called ____________.', marks: 1, answer: 'drill across', explanation: 'Drill across executes queries across multiple fact tables.', examAnswer: 'drill across' },
      { partId: 'g', label: 'Part (g)', text: 'In MOLAP, data is stored in a ____________ format for faster retrieval.', marks: 1, answer: 'multidimensional array', explanation: 'MOLAP stores data in physical multidimensional array structures.', examAnswer: 'multidimensional array' },
      { partId: 'h', label: 'Part (h)', text: 'Data mining is the process of discovering ____________ patterns from large amounts of data.', marks: 1, answer: 'interesting (or non-trivial / implicit / previously unknown)', explanation: 'Textbook definition: discovering interesting patterns from large amounts of data.', examAnswer: 'interesting' },
      { partId: 'i', label: 'Part (i)', text: 'The three main characteristics of Big Data are Volume, Variety, and ____________.', marks: 1, answer: 'Velocity', explanation: 'The 3Vs are Volume, Variety, and Velocity.', examAnswer: 'Velocity' },
      { partId: 'j', label: 'Part (j)', text: 'The process of cleaning and integrating data before mining is called ____________.', marks: 1, answer: 'data preprocessing (or data preparation)', explanation: 'Data preprocessing cleans, transforms, and integrates data before model induction.', examAnswer: 'data preprocessing' },
      { partId: 'k', label: 'Part (k)', text: 'A data mining system may generate thousands of patterns, but not all of them are ____________.', marks: 1, answer: 'interesting (or useful)', explanation: 'A major challenge in data mining is the interestingness problem.', examAnswer: 'interesting' },
      { partId: 'l', label: 'Part (l)', text: 'In the 4-Step Design Process, the first step is to choose the ____________.', marks: 1, answer: 'business process (or data mart)', explanation: 'Kimball step 1 is to choose the business process to model.', examAnswer: 'business process (or data mart)' },
      { partId: 'm', label: 'Part (m)', text: 'The third step in the 4-Step Design Process is to choose the ____________.', marks: 1, answer: 'dimensions', explanation: 'Kimball step 3 is to choose the dimensions.', examAnswer: 'dimensions' },
      { partId: 'n', label: 'Part (n)', text: 'A ____________ is a numeric attribute of a fact that represents performance or behavior of the business.', marks: 1, answer: 'measure', explanation: 'Measures are numeric values stored in fact tables.', examAnswer: 'measure' },
      { partId: 'o', label: 'Part (o)', text: 'Combining data from multiple sources into a coherent store is known as ____________.', marks: 1, answer: 'data integration', explanation: 'Data integration merges data from multiple heterogeneous stores.', examAnswer: 'data integration' },
      { partId: 'p', label: 'Part (p)', text: 'The process of scaling attribute values to fall within a small, specified range is called ____________.', marks: 1, answer: 'normalization', explanation: 'Normalization transforms numeric values to a uniform scale like [0, 1].', examAnswer: 'normalization' },
      { partId: 'q', label: 'Part (q)', text: 'The normalization method that divides each value by a power of 10 is called ____________.', marks: 1, answer: 'decimal scaling', explanation: 'Normalization by decimal scaling normalizes by moving the decimal point.', examAnswer: 'decimal scaling' },
      { partId: 'r', label: 'Part (r)', text: 'The process of dividing the range of a continuous attribute into intervals is called ____________.', marks: 1, answer: 'discretization', explanation: 'Discretization partitions continuous attributes into categorical intervals.', examAnswer: 'discretization' },
      { partId: 's', label: 'Part (s)', text: 'A cell that belongs to a non-base cuboid is called an ____________ cell.', marks: 1, answer: 'aggregate', explanation: 'Base cuboids contain base cells; non-base cuboids contain aggregate cells.', examAnswer: 'aggregate' },
      { partId: 't', label: 'Part (t)', text: 'The most aggregated level in a data cube lattice is called the ____________ cuboid.', marks: 1, answer: 'apex', explanation: 'The 0-D cuboid representing (all, all, ...) is the apex cuboid.', examAnswer: 'apex' }
    ]
  },
  {
    id: 'Q02',
    number: 2,
    questionCode: 'Question 2',
    title: 'Data Preprocessing: Binning, Normalization, AOI & Missing Values',
    exactQuestionText: `(a) Consider a dataset given for the age attribute: 70, 38, 42, 77, 24, 47, 68, 28, 37, 40, 77, 67, 40, 27, 36, 23, 35, 32, 38, 56, 36, 28, 75, 28, 72, 54, 41, 36, 39, 51. Use the dataset to answer the following questions:
(i) Partition the age into 4 equal-width bins and smooth by bin means. [3 Marks]
(ii) Partition the age into 3 equal-depth bins and smooth by bin boundaries. [3 Marks]
(iii) Partition the age into 3 bins using the maxdiff histogram. [3 Marks]

(b) Consider the dataset given in Table Q2a and compute the Min-Max Normalized values for the attribute Test Score, using the range [0, 1].
Table Q2a:
Student ID | Age | Test Score
S001       | 19  | 40
S002       | 20  | 66
S003       | 19  | 78
S004       | 21  | 94
S005       | 20  | 100
[5 Marks]

(c) Consider the following dataset of university students stored in Table Q2b:
Table Q2b:
Student ID | Name     | Age | City    | Department | GPA
S1         | Anjali   | 21  | Colombo | IT         | 3.6
S2         | Kasun    | 23  | Kandy   | IT         | 3.8
S3         | Nadeesha | 22  | Colombo | CS         | 3.4
S4         | Supun    | 25  | Galle   | CS         | 3.1
S5         | Tharindu | 26  | Kandy   | IS         | 3.9
S6         | Malsha   | 24  | Colombo | IS         | 3.7
Perform Attribute-Oriented Induction on the above dataset to generalize the data for knowledge discovery. [8 Marks]

(d) Illustrate a method to handle each of the missing values (indicated in "???") in the dataset given below in Table Q2c (without removing the tuples with missing values).
Table Q2c:
Emp_ID | Name        | Department | Age | Salary | Join_Date  | City
E101   | Amal Perera | Sales      | 29  | 55000  | 2018/05/10 | Colombo
E102   | Nirosha     | HR         | ??? | 62000  | 2019-07-20 | Kandy
E103   | Amal Perera | Sales      | 29  | ???    | 2018/05/10 | Colombo
E104   | Sunil Silva | IT         | 27  | 67000  | 2020/01/05 | ???
[3 Marks]`,
    marks: 25,
    topics: [
      'Data Smoothing by Binning',
      'Equal-Width & Equal-Depth Partitioning',
      'MaxDiff Histograms',
      'Min-Max Normalization',
      'Attribute-Oriented Induction (AOI)',
      'Handling Missing Data'
    ],
    lectureIds: ['L03', 'L05'],
    difficulty: 'Hard',
    questionType: 'Data Preprocessing & Calculation',
    answer: `Comprehensive solutions for all 4 parts:
(a) Sorted Age Dataset (30 values):
23, 24, 27, 28, 28, 28, 32, 35, 36, 36, 36, 37, 38, 38, 39, 40, 40, 41, 42, 47, 51, 54, 56, 67, 68, 70, 72, 75, 77, 77.
Min = 23, Max = 77. Range = 77 - 23 = 54.

(i) 4 Equal-Width Bins smoothed by bin means:
Width W = (77 - 23)/4 = 13.5.
• Bin 1 [23.0, 36.5): {23, 24, 27, 28, 28, 28, 32, 35, 36, 36, 36} (11 items). Sum = 323. Mean = 323/11 = 29.36.
  Smoothed: 29.36 for all 11 entries.
• Bin 2 [36.5, 50.0): {37, 38, 38, 39, 40, 40, 41, 42, 47} (9 items). Sum = 362. Mean = 362/9 = 40.22.
  Smoothed: 40.22 for all 9 entries.
• Bin 3 [50.0, 63.5): {51, 54, 56} (3 items). Sum = 161. Mean = 161/3 = 53.67.
  Smoothed: 53.67 for all 3 entries.
• Bin 4 [63.5, 77.0]: {67, 68, 70, 72, 75, 77, 77} (7 items). Sum = 506. Mean = 506/7 = 72.29.
  Smoothed: 72.29 for all 7 entries.

(ii) 3 Equal-Depth Bins smoothed by bin boundaries:
Each bin contains N/3 = 30/3 = 10 items.
• Bin 1: 23, 24, 27, 28, 28, 28, 32, 35, 36, 36 (Min=23, Max=36).
  Smoothed to nearest boundary: 23, 23, 23, 23, 23, 23, 36, 36, 36, 36.
• Bin 2: 37, 38, 38, 39, 40, 40, 41, 42, 47, 51 (Min=37, Max=51).
  Smoothed: 37, 37, 37, 37, 37, 37, 37, 37, 51, 51.
• Bin 3: 54, 56, 67, 68, 70, 72, 75, 77, 77, (wait, 10 items: 54, 56, 67, 68, 70, 72, 75, 77, 77, 77).
  Min=54, Max=77.
  Smoothed: 54, 54, 77, 77, 77, 77, 77, 77, 77, 77.

(iii) MaxDiff Histogram (3 bins):
Identify the (B-1)=2 largest gaps between consecutive sorted values:
Gap between 56 and 67 = 11 (Largest).
Gap between 42 and 47 = 5 (2nd largest).
(Next gap is 4 between 47 and 51).
Boundaries placed at splits:
• Bucket 1: 23 to 42 (19 values: 23 through 42)
• Bucket 2: 47 to 56 (4 values: 47, 51, 54, 56)
• Bucket 3: 67 to 77 (7 values: 67 through 77)

(b) Min-Max Normalization:
Formula: v' = ((v - min)/(max - min)) * (new_max - new_min) + new_min
Here min = 40, max = 100, max - min = 60, target range [0, 1]:
• S001 (40): (40 - 40)/60 = 0.00
• S002 (66): (66 - 40)/60 = 26/60 = 0.433
• S003 (78): (78 - 40)/60 = 38/60 = 0.633
• S004 (94): (94 - 40)/60 = 54/60 = 0.900
• S005 (100): (100 - 40)/60 = 60/60 = 1.00

(c) Attribute-Oriented Induction (AOI):
1. Attribute Removal: Remove high-cardinality keys that cannot be generalized: Student ID, Name.
2. Concept Hierarchy Generalization:
   - Age: [21-23] -> "Young_Adult" (or 21-23), [24-26] -> "Mid_20s" (or 24-26)
   - City: Colombo -> "Western Province", Kandy -> "Central Province", Galle -> "Southern Province"
   - Department: IT, CS, IS -> Computing Faculty / IT Cluster (or retained as Department)
   - GPA: [3.7 - 4.0] -> "First Class", [3.3 - 3.69] -> "Second Upper", [3.0 - 3.29] -> "Second Lower"
3. Aggregate and Accumulate Counts:
   Table collapsed into generalized prime relation with accumulated tuple frequencies.

(d) Handling Missing Values in Table Q2c:
• E102 (Age): Impute using mean age of available employees (29+29+27)/3 = 28.33 years, or attribute median (29 years).
• E103 (Salary for Amal Perera): E103 has the identical Name, Department (Sales), and Join Date (2018/05/10) as E101. By deductive record linkage / functional dependency, Amal Perera's salary is 55,000. Alternatively, fill with Sales department mean (55,000).
• E104 (City): Impute using the most frequent categorical value (mode = "Colombo"), or assign a global placeholder label "Unknown".`,
    explanation: `Theoretical basis:
1. Binning (Lecture 03, Slides 19, 34-37): A smoothing technique that sorts data and partitions it into equal-width or equal-depth buckets. Equal-width divides the range into N equal spans: W = (Max - Min)/N. Equal-depth partitions data such that each bin holds an equal number of records (N/B). In bin boundary smoothing, values are replaced by the nearest boundary value.
2. MaxDiff Histogram (Lecture 03, Slide 47): A non-parametric numerosity reduction method. A histogram with B buckets sets bucket boundaries between adjacent value pairs having the (B-1) largest numerical differences.
3. Min-Max Normalization (Lecture 03, Slide 30, 31): Preserves relationships among original data values while mapping them into a fixed range [new_min, new_max].
4. Attribute-Oriented Induction (Data Cube Computation & Generalization, Slides 48-51): Eliminates unique identifiers (Student ID, Name) and replaces primitive values with higher-level concepts from concept hierarchies (city -> province, raw GPA -> grade class), followed by merging duplicate tuples and accumulating counts.
5. Missing Data Handling (Lecture 03, Slide 16): Methods include: attribute mean, class/department mean (smarter), deductive inference from duplicate/linked records, and mode/global constant.`,
    stepByStepSolution: [
      'Step 1 (Sorting): Sort all 30 age values in ascending order.',
      'Step 2 (Equal-width): Compute range = 77 - 23 = 54. Width = 54 / 4 = 13.5. Form bin ranges [23, 36.5), [36.5, 50), [50, 63.5), [63.5, 77]. Calculate bin averages.',
      'Step 3 (Equal-depth): Split 30 items into 3 bins of 10 items each. Identify min and max for each bin. Replace each number with the closer boundary.',
      'Step 4 (MaxDiff): Calculate differences between consecutive sorted numbers. Rank differences to pick top 2 (gap 11 between 56 and 67; gap 5 between 42 and 47). Establish the 3 buckets.',
      'Step 5 (Min-Max): Min test score = 40, Max = 100. Scale each value v: (v - 40)/60.',
      'Step 6 (AOI): Remove Student ID & Name. Map City to Province, GPA to Honors Class. Combine identical generalized tuples and sum their count.',
      'Step 7 (Missing values): Apply class mean for Age, record linkage for Salary (Amal Perera = 55,000), and mode/constant for City.'
    ],
    examAnswer: `EXAM READY ANSWER:

(a) (i) Equal-Width Binning (Width = (77-23)/4 = 13.5):
• Bin 1 [23, 36.5): {23, 24, 27, 28, 28, 28, 32, 35, 36, 36, 36} -> Mean = 323/11 = 29.36
  Smoothed Bin 1 = {29.36, 29.36, 29.36, 29.36, 29.36, 29.36, 29.36, 29.36, 29.36, 29.36, 29.36}
• Bin 2 [36.5, 50): {37, 38, 38, 39, 40, 40, 41, 42, 47} -> Mean = 362/9 = 40.22
  Smoothed Bin 2 = {40.22, 40.22, 40.22, 40.22, 40.22, 40.22, 40.22, 40.22, 40.22}
• Bin 3 [50, 63.5): {51, 54, 56} -> Mean = 161/3 = 53.67
  Smoothed Bin 3 = {53.67, 53.67, 53.67}
• Bin 4 [63.5, 77]: {67, 68, 70, 72, 75, 77, 77} -> Mean = 506/7 = 72.29
  Smoothed Bin 4 = {72.29, 72.29, 72.29, 72.29, 72.29, 72.29, 72.29}

(a) (ii) Equal-Depth Binning by Boundaries (10 values per bin):
• Bin 1: Min=23, Max=36 -> Smoothed: {23, 23, 23, 23, 23, 23, 36, 36, 36, 36}
• Bin 2: Min=37, Max=51 -> Smoothed: {37, 37, 37, 37, 37, 37, 37, 37, 51, 51}
• Bin 3: Min=54, Max=77 -> Smoothed: {54, 54, 77, 77, 77, 77, 77, 77, 77, 77}

(a) (iii) MaxDiff Histogram (3 bins, 2 largest differences):
• Largest diff = 11 (between 56 and 67)
• Second largest diff = 5 (between 42 and 47)
• Bucket 1: [23, 42] -> 19 items
• Bucket 2: [47, 56] -> 4 items
• Bucket 3: [67, 77] -> 7 items

(b) Min-Max Normalization to [0, 1]:
Formula: v' = (v - 40)/(100 - 40)
• S001: (40 - 40)/60 = 0.00
• S002: (66 - 40)/60 = 26/60 = 0.433
• S003: (78 - 40)/60 = 38/60 = 0.633
• S004: (94 - 40)/60 = 54/60 = 0.900
• S005: (100 - 40)/60 = 60/60 = 1.00

(c) Attribute-Oriented Induction:
1. Attribute Removal: Remove 'Student ID' and 'Name' (high cardinality, non-generalizable keys).
2. Concept Hierarchy Generalization:
   - City: Colombo -> Western; Kandy -> Central; Galle -> Southern
   - GPA: >=3.7 -> First Class; 3.3-3.69 -> Second Upper; 3.0-3.29 -> Second Lower
   - Age: 21-23 -> Young; 24-26 -> Mature
3. Prime Generalized Relation:
   | Age_Group | Province | Department | Class        | Count |
   | Young     | Western  | IT         | Second Upper | 1     |
   | Young     | Central  | IT         | First Class  | 1     |
   | Young     | Western  | CS         | Second Upper | 1     |
   | Mature    | Southern | CS         | Second Lower | 1     |
   | Mature    | Central  | IS         | First Class  | 1     |
   | Mature    | Western  | IS         | First Class  | 1     |

(d) Handling Missing Values:
1. E102 Age (???): Impute with overall mean age of employees = (29+29+27)/3 = 28.33 years (or HR department average).
2. E103 Salary (???): Amal Perera has an identical record in E101 with Join Date 2018/05/10 and Sales Department; by record linkage / deduplication, Salary = 55,000.
3. E104 City (???): Impute with mode of the City attribute ('Colombo'), or assign a global constant 'Unknown'.`,
    lectureReference: {
      lectureId: 'L03',
      lectureTitle: 'Data Preprocessing',
      conceptName: 'Binning, Histograms, Normalization, Missing Values, and AOI',
      specificNote: 'Chapter 3 (Slide 16, 19, 30, 34-37, 47) and Data Generalization (Slide 48-51)'
    },
    subParts: [
      { partId: '2a_i', label: '2(a)(i)', text: 'Partition the age into 4 equal-width bins and smooth by bin means.', marks: 3, answer: 'Bin width 13.5. Smoothed bins: Bin 1 = 29.36, Bin 2 = 40.22, Bin 3 = 53.67, Bin 4 = 72.29', explanation: 'Equal-width divides total range by 4, then averages the entries inside each interval.', examAnswer: 'Bin 1: 29.36 (11 values), Bin 2: 40.22 (9 values), Bin 3: 53.67 (3 values), Bin 4: 72.29 (7 values)' },
      { partId: '2a_ii', label: '2(a)(ii)', text: 'Partition the age into 3 equal-depth bins and smooth by bin boundaries.', marks: 3, answer: '3 bins of 10 items each. Replaced with closest min/max boundary.', explanation: 'Equal-depth distributes 10 elements per bucket; each number is smoothed to the closer bucket limit.', examAnswer: 'Bin 1: {23, 23, 23, 23, 23, 23, 36, 36, 36, 36}; Bin 2: {37, 37, 37, 37, 37, 37, 37, 37, 51, 51}; Bin 3: {54, 54, 77, 77, 77, 77, 77, 77, 77, 77}' },
      { partId: '2a_iii', label: '2(a)(iii)', text: 'Partition the age into 3 bins using the maxdiff histogram.', marks: 3, answer: 'Top 2 gaps are 11 (between 56 and 67) and 5 (between 42 and 47). Bins are [23, 42], [47, 56], and [67, 77].', explanation: 'MaxDiff sets bucket boundaries at the beta - 1 largest differences between adjacent sorted values.', examAnswer: 'Bucket 1: [23, 42], Bucket 2: [47, 56], Bucket 3: [67, 77]' },
      { partId: '2b', label: '2(b)', text: 'Compute Min-Max Normalized values for Test Score using range [0, 1].', marks: 5, answer: 'S001=0.00, S002=0.433, S003=0.633, S004=0.900, S005=1.00', explanation: 'Apply formula v\' = (v - 40)/60.', examAnswer: 'S001: 0.00, S002: 0.433, S003: 0.633, S004: 0.900, S005: 1.00' },
      { partId: '2c', label: '2(c)', text: 'Perform Attribute-Oriented Induction on the university students dataset.', marks: 8, answer: 'Remove Student ID & Name; generalize City, Department, and GPA to higher conceptual levels; accumulate counts.', explanation: 'Follows PreGen, PrimeGen, and tuple merging from lecture slides.', examAnswer: 'Full prime generalized relation with generalized concept levels and accumulated frequencies.' },
      { partId: '2d', label: '2(d)', text: 'Illustrate a method to handle each missing value in Table Q2c.', marks: 3, answer: 'E102 Age: mean imputation (28.33); E103 Salary: deductive duplicate lookup (55,000); E104 City: mode imputation (Colombo).', explanation: 'Employs attribute mean, record deduplication, and mode.', examAnswer: 'E102 Age: Mean=28.33; E103 Salary: Inferred from E101=55,000; E104 City: Mode=Colombo' }
    ]
  },
  {
    id: 'Q03',
    number: 3,
    questionCode: 'Question 3',
    title: 'Star Attribute Reduction & Data Cube Aggregation',
    exactQuestionText: `(a) A hospital maintains detailed records of patient visits for multiple departments. The following dataset contains information on Department, Doctor, Day, and Diagnosis Type for each visit.
Table Q3a:
Visit ID | Department  | Doctor       | Day       | Diagnosis Type
V001     | Cardiology  | Dr. Silva    | Monday    | Critical
V002     | Cardiology  | Dr. Silva    | Tuesday   | Normal
V003     | Cardiology  | Dr. Fernando | Monday    | Critical
V004     | Neurology   | Dr. Perera   | Monday    | Normal
V005     | Neurology   | Dr. Perera   | Tuesday   | Normal
V006     | Neurology   | Dr. Perera   | Wednesday | Critical
V007     | Orthopedic  | Dr. Gamage   | Wednesday | Normal
V008     | Orthopedic  | Dr. Fernando | Thursday  | Critical
V009     | Orthopedic  | Dr. Kumara   | Friday    | Normal
V010     | Cardiology  | Dr. Kumara   | Monday    | Critical
V011     | Cardiology  | Dr. Silva    | Friday    | Normal
V012     | Cardiology  | Dr. Silva    | Friday    | Critical

Illustrate the star attribute reduction technique to reduce the above dataset with a minimum support = 3. Show the steps clearly. [12 Marks]

(b) The following dataset shows the sales (in kilograms) of four grain products: Rice, Wheat, Maize, and Barley across different regions and months:
(rice, central, January, 450), (rice, north, February, 300), (wheat, south, January, 520), (wheat, central, March, 410), (maize, south, February, 280), (maize, central, January, 390), (barley, north, March, 250), (rice, south, February, 480), (wheat, north, February, 330), (barley, central, January, 220), (maize, south, March, 500), (barley, south, February, 320), (rice, central, March, 470), (wheat, north, March, 310), (maize, north, February, 270), (barley, south, March, 410).

(i) Calculate all the necessary aggregated cuboids and clearly show how the data cube could be constructed. [10 Marks]
(ii) Illustrate the multiway array aggregation by using sample data from the given dataset. [8 Marks]`,
    marks: 30,
    topics: [
      'Star Attribute Reduction',
      'Star Tree & Star Table Construction',
      'Data Cube Aggregation (Cuboids)',
      'Multi-Way Array Aggregation'
    ],
    lectureIds: ['L02', 'L05'],
    difficulty: 'Hard',
    questionType: 'Data Cube & Star Reduction',
    answer: `(a) Star Attribute Reduction (minsup = 3):
Total tuples = 12.
Step 1: Compute 1-D Frequencies for each attribute:
• Department:
  - Cardiology: V001, V002, V003, V010, V011, V012 -> 6 (>= 3 -> Keep)
  - Neurology: V004, V005, V006 -> 3 (>= 3 -> Keep)
  - Orthopedic: V007, V008, V009 -> 3 (>= 3 -> Keep)
• Doctor:
  - Dr. Silva: V001, V002, V011, V012 -> 4 (>= 3 -> Keep)
  - Dr. Fernando: V003, V008 -> 2 (< 3 -> Star '*')
  - Dr. Perera: V004, V005, V006 -> 3 (>= 3 -> Keep)
  - Dr. Gamage: V007 -> 1 (< 3 -> Star '*')
  - Dr. Kumara: V009, V010 -> 2 (< 3 -> Star '*')
• Day:
  - Monday: V001, V003, V004, V010 -> 4 (>= 3 -> Keep)
  - Tuesday: V002, V005 -> 2 (< 3 -> Star '*')
  - Wednesday: V006, V007 -> 2 (< 3 -> Star '*')
  - Thursday: V008 -> 1 (< 3 -> Star '*')
  - Friday: V009, V011, V012 -> 3 (>= 3 -> Keep)
• Diagnosis Type:
  - Critical: V001, V003, V006, V008, V010, V012 -> 6 (>= 3 -> Keep)
  - Normal: V002, V004, V005, V007, V009, V011 -> 6 (>= 3 -> Keep)

Step 2: Replace values with count < 3 with '*':
Star Table mapping: {Dr. Fernando -> *, Dr. Gamage -> *, Dr. Kumara -> *, Tuesday -> *, Wednesday -> *, Thursday -> *}.

Step 3: Transformed Compressed Table & Collapse Identical Tuples:
V001: (Cardiology, Dr. Silva, Monday, Critical) [count 1]
V002: (Cardiology, Dr. Silva, *, Normal) [count 1]
V003: (Cardiology, *, Monday, Critical) [merged with V010: count 2]
V004: (Neurology, Dr. Perera, Monday, Normal) [count 1]
V005: (Neurology, Dr. Perera, *, Normal) [count 1]
V006: (Neurology, Dr. Perera, *, Critical) [count 1]
V007: (Orthopedic, *, *, Normal) [merged with V009: count 2]
V008: (Orthopedic, *, *, Critical) [count 1]
V010: (Cardiology, *, Monday, Critical) [merged above]
V011: (Cardiology, Dr. Silva, Friday, Normal) [count 1]
V012: (Cardiology, Dr. Silva, Friday, Critical) [count 1]
Total count = 12 tuples compressed losslessly into 9 distinct star records!

(b) (i) Data Cube Construction & Cuboids:
Dimensions: Product (4: Rice, Wheat, Maize, Barley), Region (3: Central, North, South), Month (3: January, February, March).
Total 3-D base tuples = 16 records.
Total Sales = 450+300+520+410+280+390+250+480+330+220+500+320+470+310+270+410 = 5,710 kg.
Cuboid Hierarchy:
• 0-D Apex Cuboid (all, all, all) = 5,710 kg
• 1-D Cuboids:
  - Product Cuboid: Rice=1,700, Wheat=1,570, Maize=1,440, Barley=1,200 (Total=5,710)
  - Region Cuboid: Central=1,940, North=1,460, South=2,310 (Total=5,710)
  - Month Cuboid: January=1,580, February=1,980, March=2,150 (Total=5,710)
• 2-D Cuboids:
  - (Product, Region): (Rice, Central)=920, (Rice, North)=300, (Rice, South)=480, (Wheat, Central)=410, (Wheat, North)=640, (Wheat, South)=520, (Maize, Central)=390, (Maize, North)=270, (Maize, South)=780, (Barley, Central)=220, (Barley, North)=250, (Barley, South)=730
  - (Product, Month): (Rice, Jan)=450, (Rice, Feb)=780, (Rice, Mar)=470; (Wheat, Jan)=520, (Wheat, Feb)=330, (Wheat, Mar)=720; (Maize, Jan)=390, (Maize, Feb)=550, (Maize, Mar)=500; (Barley, Jan)=220, (Barley, Feb)=320, (Barley, Mar)=660
  - (Region, Month): (Central, Jan)=1,060, (Central, Feb)=0, (Central, Mar)=880; (North, Jan)=0, (North, Feb)=900, (North, Mar)=560; (South, Jan)=520, (South, Feb)=1,080, (South, Mar)=910
• 3-D Base Cuboid: 16 atomic grain cells.

(ii) Multiway Array Aggregation:
In multiway array aggregation (Data Cube Computation slide 30-31), data is arranged in a 3D array (Product × Region × Month).
Instead of sorting and scanning the entire database repeatedly, the multidimensional space is partitioned into chunks.
Intermediate 2D planes and 1D lines are computed simultaneously in a single pass over memory chunks, allowing parent and ancestor cuboids (e.g., AB, AC, BC, and A, B, C) to be accumulated directly into memory buffers without candidate generation.`,
    explanation: `Conceptual background:
• Star Attribute Reduction (Data Cube Computation, Slides 34-36): If a single-dimensional aggregate on an attribute value does not satisfy the iceberg condition (count < minsup), distinguishing that individual value is useless during iceberg computation. Replacing them with '*' yields a lossless compression of the original table for iceberg computation.
• Cuboid Lattice (Lecture 02, Slide 24, 38): An n-dimensional cube consists of 2^n cuboids arranged as a lattice, ranging from the 0-D apex (all, all, all) to the n-D base cuboid.
• Multiway Array Aggregation (Data Cube Computation, Slide 30-31): Operates on chunked array structures. By ordering dimension traversal (e.g. A -> B -> C), intermediate 2D aggregations are held in small memory buffers and collapsed into 1D and 0D cuboids, minimizing memory footprint and eliminating costly relational joins.`,
    stepByStepSolution: [
      'Step 1: Perform 1-dimensional frequency count on each attribute in Table Q3a.',
      'Step 2: Identify values with count < 3 (Dr. Fernando, Dr. Gamage, Dr. Kumara, Tuesday, Wednesday, Thursday).',
      'Step 3: Substitute star symbol (*) for sub-threshold values.',
      'Step 4: Collapse identical tuples (V003 & V010 combine into count 2; V007 & V009 combine into count 2). Display compressed Star Table.',
      'Step 5: For part (b), identify dimensions: Product (4), Region (3), Month (3).',
      'Step 6: Calculate apex (0-D), 1-D margins (Product, Region, Month), and 2-D cross-tabs.',
      'Step 7: Illustrate Multiway Array Aggregation chunking mechanism and memory reuse.'
    ],
    examAnswer: `EXAM READY ANSWER:

(a) Star Attribute Reduction (minsup = 3):

1. Single-Dimensional Counts:
• Department: Cardiology (6), Neurology (3), Orthopedic (3) -> All >= 3 (No reduction).
• Doctor: Dr. Silva (4), Dr. Perera (3) >= 3; Dr. Fernando (2), Dr. Kumara (2), Dr. Gamage (1) < 3 -> Replaced by '*'.
• Day: Monday (4), Friday (3) >= 3; Tuesday (2), Wednesday (2), Thursday (1) < 3 -> Replaced by '*'.
• Diagnosis: Critical (6), Normal (6) >= 3 (No reduction).

2. Reduced Star Table (Compressed Table):
| Department  | Doctor     | Day     | Diagnosis Type | Count |
|-------------|------------|---------|----------------|-------|
| Cardiology  | Dr. Silva  | Monday  | Critical       | 1     |
| Cardiology  | Dr. Silva  | *       | Normal         | 1     |
| Cardiology  | *          | Monday  | Critical       | 2     |
| Cardiology  | Dr. Silva  | Friday  | Normal         | 1     |
| Cardiology  | Dr. Silva  | Friday  | Critical       | 1     |
| Neurology   | Dr. Perera | Monday  | Normal         | 1     |
| Neurology   | Dr. Perera | *       | Normal         | 1     |
| Neurology   | Dr. Perera | *       | Critical       | 1     |
| Orthopedic  | *          | *       | Normal         | 2     |
| Orthopedic  | *          | *       | Critical       | 1     |
Total = 12 patient visits compressed into 10 star tuples.

(b) (i) Data Cube Aggregation:
Total Sales = 5,710 kg
• 0-D Apex Cuboid:
  all = 5,710 kg
• 1-D Cuboids:
  Product: Rice=1,700, Wheat=1,570, Maize=1,440, Barley=1,200
  Region: Central=1,940, North=1,460, South=2,310
  Month: January=1,580, February=1,980, March=2,150
• 2-D Cuboids:
  (Product, Region):
    Rice: Central=920, North=300, South=480
    Wheat: Central=410, North=640, South=520
    Maize: Central=390, North=270, South=780
    Barley: Central=220, North=250, South=730
  (Product, Month):
    Rice: Jan=450, Feb=780, Mar=470
    Wheat: Jan=520, Feb=330, Mar=720
    Maize: Jan=390, Feb=550, Mar=500
    Barley: Jan=220, Feb=320, Mar=660
  (Region, Month):
    Central: Jan=1,060, Feb=0, Mar=880
    North: Jan=0, Feb=900, Mar=560
    South: Jan=520, Feb=1,080, Mar=910

(b) (ii) Multiway Array Aggregation:
1. Divide the 3-D array (4 Products × 3 Regions × 3 Months) into multidimensional chunks.
2. In a single linear scan along the chunk order, compute the base cuboid cells and simultaneously project the sums onto the 2-D planes: (Product, Region), (Product, Month), and (Region, Month).
3. The 2-D sums held in memory buffers are further aggregated into 1-D arrays (Product, Region, Month) and finally into the 0-D Apex, completely avoiding disk spilling and repeated candidate scans.`,
    lectureReference: {
      lectureId: 'L05',
      lectureTitle: 'Data Cube Computation and Data Generalization',
      conceptName: 'Star Reduction, Star Trees, and Multiway Array Aggregation',
      specificNote: 'Data Cube Computation (Slides 30-36)'
    },
    subParts: [
      { partId: '3a', label: '3(a)', text: 'Illustrate star attribute reduction technique on Table Q3a with minimum support = 3.', marks: 12, answer: 'Compute 1D counts, map sub-threshold items to *, merge rows (V003+V010 and V007+V009).', explanation: 'Compresses dataset losslessly for iceberg cubing.', examAnswer: 'Full 1D frequency breakdown, star table mapping, and 10-row compressed table with count column.' },
      { partId: '3b_i', label: '3(b)(i)', text: 'Calculate all necessary aggregated cuboids and show how the data cube could be constructed.', marks: 10, answer: 'Apex = 5,710 kg. 1D cuboids for Product, Region, Month. 2D cuboids for each dimension pair. 3D base cuboid.', explanation: 'Generates 2^3 = 8 cuboids representing complete lattice.', examAnswer: 'Complete numerical breakdown of 0D, 1D, 2D, and 3D cuboid totals.' },
      { partId: '3b_ii', label: '3(b)(ii)', text: 'Illustrate multiway array aggregation by using sample data from the given dataset.', marks: 8, answer: 'Chunk 3D array into blocks, project to 2D buffers simultaneously, cascade to 1D and 0D.', explanation: 'Array-based cubing with no candidate generation.', examAnswer: 'Step-by-step chunking and memory plane projection explanation with sample grain calculations.' }
    ]
  },
  {
    id: 'Q04',
    number: 4,
    questionCode: 'Question 4',
    title: 'Association Rule Mining & Decision Tree Induction',
    exactQuestionText: `(a) Consider the transaction data for Computer Purchases in Table Q4a:
Table Q4a:
Transaction ID | Products
1              | Processor, RAM, SSD, Motherboard, Cooling Fan, Monitor, Keyboard
2              | Network Card, Monitor, Processor, Graphic Card, RAM, SSD
3              | RAM, SSD, Motherboard, Monitor, Scanner, Printer, Cooling Fan, Keyboard, UPS
4              | Monitor, RAM, Mouse, Processor
5              | Cooling Fan, Monitor, RAM, SSD, Processor, Keyboard, Scanner, Printer
6              | RAM, SSD, Processor, Monitor, Power Supply, Printer, Cooling Fan
7              | Digital Mixer, RAM, Monitor
8              | Projector, Speakers
9              | RAM, Microphone
10             | Scanner, Printer, SSD, Processor, Cooling Fan, Monitor, RAM, Motherboard

Using the information in Table Q4a, compute the support and confidence for the following association rules:
1. RAM → Monitor
2. RAM, Processor → SSD
3. Scanner → Processor, Monitor
4. RAM, SSD, Processor → Monitor, Printer
5. SSD → Processor, Cooling Fan, Monitor
[2x5 Marks = 10 Marks]

(b) You have been appointed as a data analyst to study the characteristics of financial transactions to identify patterns that lead to fraudulent activity.
Table Q4b below shows a sample of transaction records collected for analysis:
Table Q4b:
Transaction Amount | Transaction Time | Customer History | Device Used | Fraud Status (Class Label)
low                | Morning          | Good             | mobile      | Genuine
medium             | Evening          | Good             | desktop     | Genuine
high               | Morning          | Bad              | mobile      | Fraud
high               | Afternoon        | Bad              | desktop     | Fraud
medium             | Morning          | Average          | mobile      | Genuine
low                | Evening          | Good             | desktop     | Genuine
high               | Evening          | Average          | mobile      | Fraud
medium             | Afternoon        | bad              | desktop     | Fraud
low                | Morning          | Good             | mobile      | Genuine
medium             | Afternoon        | Bad              | mobile      | Fraud
high               | Afternoon        | Bad              | desktop     | Fraud
high               | Evening          | Good             | mobile      | Fraud
low                | Morning          | average          | desktop     | Genuine
medium             | Evening          | average          | mobile      | Genuine
high               | Morning          | average          | desktop     | Fraud

Suppose a decision tree is to be created based on this dataset and let p(c|t) denote the probability of Class c at Node t of the decision tree.
The Entropy at node t for a two-class problem is defined as:
Entropy(t) = - sum_{c=1}^2 p(c|t) log_2 p(c|t)

(i) Calculate the overall Entropy before splitting. [2 Marks]
(ii) Calculate the overall Entropy after splitting for each attribute. [8 Marks]
(iii) At which attribute should the decision tree split first? Give reasons. [2 Marks]
(iv) Identify a point that may be converted to a leaf node. Give reasons. [3 Marks]
Note: Use the log table given at the end of the paper for your calculations.`,
    marks: 25,
    topics: [
      'Association Rules (Support & Confidence)',
      'Decision Tree Induction',
      'Entropy & Information Gain',
      'Attribute Selection',
      'Pure Leaf Node Identification'
    ],
    lectureIds: ['L06', 'L07'],
    difficulty: 'Hard',
    questionType: 'Decision Tree & Information Gain',
    answer: `(a) Association Rules Support and Confidence (Total Transactions N = 10):
1. Rule 1: RAM → Monitor
   - Transactions containing RAM: {1, 2, 3, 4, 5, 6, 7, 9, 10} -> Count = 9
   - Transactions containing Monitor: {1, 2, 3, 4, 5, 6, 7, 10} -> Count = 8
   - Transactions containing {RAM, Monitor}: {1, 2, 3, 4, 5, 6, 7, 10} -> Count = 8
   • Support = 8 / 10 = 80% (0.80)
   • Confidence = 8 / 9 = 88.89% (0.889)

2. Rule 2: RAM, Processor → SSD
   - Transactions containing {RAM, Processor}: {1, 2, 4, 5, 6, 10} -> Count = 6
   - Transactions containing {RAM, Processor, SSD}: {1, 2, 5, 6, 10} -> Count = 5
   • Support = 5 / 10 = 50% (0.50)
   • Confidence = 5 / 6 = 83.33% (0.833)

3. Rule 3: Scanner → Processor, Monitor
   - Transactions containing Scanner: {3, 5, 10} -> Count = 3
   - Transactions containing {Scanner, Processor, Monitor}: {5, 10} -> Count = 2
   • Support = 2 / 10 = 20% (0.20)
   • Confidence = 2 / 3 = 66.67% (0.667)

4. Rule 4: RAM, SSD, Processor → Monitor, Printer
   - Transactions containing {RAM, SSD, Processor}: {1, 2, 5, 6, 10} -> Count = 5
   - Transactions containing {RAM, SSD, Processor, Monitor, Printer}: {5, 6, 10} -> Count = 3
   • Support = 3 / 10 = 30% (0.30)
   • Confidence = 3 / 5 = 60.00% (0.60)

5. Rule 5: SSD → Processor, Cooling Fan, Monitor
   - Transactions containing SSD: {1, 2, 3, 5, 6, 10} -> Count = 6
   - Transactions containing {SSD, Processor, Cooling Fan, Monitor}: {1, 5, 6, 10} -> Count = 4
   • Support = 4 / 10 = 40% (0.40)
   • Confidence = 4 / 6 = 66.67% (0.667)

--------------------------------------------------
(b) Decision Tree Calculations (Table Q4b, N = 15):
Fraud Status distribution:
• Genuine (Class 1): Records 1, 2, 5, 6, 9, 13, 14 -> 7 transactions.
• Fraud (Class 2): Records 3, 4, 7, 8, 10, 11, 12, 15 -> 8 transactions.

(i) Overall Entropy before splitting:
P(Genuine) = 7/15 ≈ 0.47, P(Fraud) = 8/15 ≈ 0.53
Using log table: log2(0.47) = -1.09, log2(0.53) = -0.92 (or direct logs)
Entropy(D) = - [0.47 * (-1.09) + 0.53 * (-0.92)] = 0.512 + 0.488 = 0.997 bits (approx 0.996-0.997).

(ii) Entropy after splitting for each attribute:
1. Customer History:
   - Bad (5 records: 3, 4, 8, 10, 11): 0 Genuine, 5 Fraud -> P(Fraud)=1.0, Entropy = 0.
   - Good (5 records: 1, 2, 6, 9, 12): 4 Genuine, 1 Fraud -> P(G)=4/5=0.8, P(F)=1/5=0.2.
     Entropy = - [0.8*log2(0.8) + 0.2*log2(0.2)] = - [0.8*(-0.32) + 0.2*(-2.32)] = 0.256 + 0.464 = 0.72 bits.
   - Average (5 records: 5, 7, 13, 14, 15): 3 Genuine, 2 Fraud -> P(G)=0.6, P(F)=0.4.
     Entropy = - [0.6*(-0.74) + 0.4*(-1.32)] = 0.444 + 0.528 = 0.97 bits.
   • Weighted Entropy(Customer History) = (5/15)*0 + (5/15)*0.72 + (5/15)*0.97 = (1/3)*(1.69) = 0.563 bits.
   • Information Gain = 0.997 - 0.563 = 0.434 bits.

2. Transaction Amount:
   - Low (4 records: 1, 6, 9, 13): 4 Genuine, 0 Fraud -> Entropy = 0.
   - Medium (5 records: 2, 5, 8, 10, 14): 3 Genuine, 2 Fraud -> Entropy = 0.97 bits.
   - High (6 records: 3, 4, 7, 11, 12, 15): 0 Genuine, 6 Fraud -> Entropy = 0.
   • Weighted Entropy(Amount) = (4/15)*0 + (5/15)*0.97 + (6/15)*0 = 5/15 * 0.97 = 0.323 bits.
   • Information Gain = 0.997 - 0.323 = 0.674 bits!

3. Transaction Time:
   - Morning (6 records: 1, 3, 5, 9, 13, 15): 4 Genuine, 2 Fraud -> P(G)=4/6=0.67, P(F)=2/6=0.33 -> Entropy = 0.92 bits.
   - Afternoon (4 records: 4, 8, 10, 11): 0 Genuine, 4 Fraud -> Entropy = 0.
   - Evening (5 records: 2, 6, 7, 12, 14): 3 Genuine, 2 Fraud -> Entropy = 0.97 bits.
   • Weighted Entropy(Time) = (6/15)*0.92 + (4/15)*0 + (5/15)*0.97 = 0.368 + 0.323 = 0.691 bits.
   • Information Gain = 0.997 - 0.691 = 0.306 bits.

4. Device Used:
   - Mobile (8 records: 1, 3, 5, 7, 9, 10, 12, 14): 4 Genuine, 4 Fraud -> Entropy = 1.0 bits.
   - Desktop (7 records: 2, 4, 6, 8, 11, 13, 15): 3 Genuine, 4 Fraud -> Entropy ≈ 0.985 bits.
   • Weighted Entropy(Device) = (8/15)*1.0 + (7/15)*0.985 = 0.533 + 0.460 = 0.993 bits.
   • Information Gain = 0.997 - 0.993 = 0.004 bits.

(iii) First Split Attribute:
The decision tree should split first on "Transaction Amount" because it yields the lowest expected entropy (0.323 bits) and therefore the highest Information Gain (0.674 bits).

(iv) Conversion to Leaf Node:
Two distinct pure points can be directly converted into leaf nodes at this step:
1. Transaction Amount = "Low": All 4 records (1, 6, 9, 13) have class "Genuine". Because entropy = 0 (100% pure), this branch immediately terminates as a leaf node predicting "Genuine".
2. Transaction Amount = "High": All 6 records (3, 4, 7, 11, 12, 15) have class "Fraud". Because entropy = 0, this branch terminates as a leaf node predicting "Fraud".
Alternatively, if splitting on Customer History: Customer History = "Bad" contains 5 records, all of which are "Fraud" (pure leaf node).`,
    explanation: `Detailed concepts from Lecture 06 and Lecture 07:
• Support and Confidence (Lecture 06, Slide 5-7):
  - Support(A → B) = P(A ∪ B) = count(A ∪ B) / Total_Transactions
  - Confidence(A → B) = P(B | A) = count(A ∪ B) / count(A)
• Decision Tree Attribute Selection Measure (ID3 / C4.5, Lecture 07, Slide 11):
  Selects the attribute with highest Information Gain: Gain(A) = Info(D) - Info_A(D).
• Leaf Node Criterion (Lecture 07, Slide 10):
  A node stops partitioning and becomes a leaf when all samples at the node belong to the exact same class (Entropy = 0, completely pure).`,
    stepByStepSolution: [
      'Step 1 (Rules 1-5): For each rule X -> Y, count how many transactions contain X, and how many contain both X and Y. Divide by 10 for support, and divide by count(X) for confidence.',
      'Step 2 (Base Entropy): Count total records N = 15. Genuine = 7, Fraud = 8. Calculate - (7/15)log2(7/15) - (8/15)log2(8/15) = 0.997.',
      'Step 3 (Attribute Entropies): Group records by each attribute value and compute class distribution.',
      'Step 4 (Info Gain Ranking): Compare Gain(Transaction Amount) = 0.674 vs Gain(Customer History) = 0.434 vs Gain(Time) = 0.306 vs Gain(Device) = 0.004.',
      'Step 5 (Leaf identification): Identify subsets with 100% purity (Entropy = 0).'
    ],
    examAnswer: `EXAM READY ANSWER:

(a) Association Rules:
1. RAM → Monitor:
   Support = 8/10 = 80%
   Confidence = 8/9 = 88.89%

2. RAM, Processor → SSD:
   Support = 5/10 = 50%
   Confidence = 5/6 = 83.33%

3. Scanner → Processor, Monitor:
   Support = 2/10 = 20%
   Confidence = 2/3 = 66.67%

4. RAM, SSD, Processor → Monitor, Printer:
   Support = 3/10 = 30%
   Confidence = 3/5 = 60.00%

5. SSD → Processor, Cooling Fan, Monitor:
   Support = 4/10 = 40%
   Confidence = 4/6 = 66.67%

(b) Decision Tree:
(i) Overall Entropy before splitting:
P(Genuine) = 7/15 = 0.467, P(Fraud) = 8/15 = 0.533
Entropy(Node) = - [ (7/15) log2(7/15) + (8/15) log2(8/15) ]
= - [ 0.467 * (-1.09) + 0.533 * (-0.92) ] = 0.509 + 0.490 = 0.997 bits

(ii) Overall Entropy after splitting for each attribute:
• Transaction Amount:
  - Low (4 records: 4 Genuine, 0 Fraud) -> Entropy = 0
  - Medium (5 records: 3 Genuine, 2 Fraud) -> Entropy = 0.971 bits
  - High (6 records: 0 Genuine, 6 Fraud) -> Entropy = 0
  Info_Amount(D) = (4/15)*0 + (5/15)*0.971 + (6/15)*0 = 0.324 bits
  Gain(Amount) = 0.997 - 0.324 = 0.673 bits

• Customer History:
  - Bad (5 records: 0 Genuine, 5 Fraud) -> Entropy = 0
  - Good (5 records: 4 Genuine, 1 Fraud) -> Entropy = 0.722 bits
  - Average (5 records: 3 Genuine, 2 Fraud) -> Entropy = 0.971 bits
  Info_History(D) = (5/15)*0 + (5/15)*0.722 + (5/15)*0.971 = 0.564 bits
  Gain(History) = 0.997 - 0.564 = 0.433 bits

• Transaction Time:
  - Morning (6 records: 4 Genuine, 2 Fraud) -> Entropy = 0.918 bits
  - Afternoon (4 records: 0 Genuine, 4 Fraud) -> Entropy = 0
  - Evening (5 records: 3 Genuine, 2 Fraud) -> Entropy = 0.971 bits
  Info_Time(D) = (6/15)*0.918 + (4/15)*0 + (5/15)*0.971 = 0.691 bits
  Gain(Time) = 0.997 - 0.691 = 0.306 bits

• Device Used:
  - Mobile (8 records: 4 Genuine, 4 Fraud) -> Entropy = 1.000 bits
  - Desktop (7 records: 3 Genuine, 4 Fraud) -> Entropy = 0.985 bits
  Info_Device(D) = (8/15)*1.000 + (7/15)*0.985 = 0.993 bits
  Gain(Device) = 0.997 - 0.993 = 0.004 bits

(iii) First Split Attribute:
The decision tree should split first on "Transaction Amount" because it gives the highest Information Gain (0.673 bits) and the lowest expected entropy (0.324 bits).

(iv) Leaf Node Identification:
Under Transaction Amount:
1. Transaction Amount = "Low": All 4 tuples are Genuine (Entropy = 0). This branch becomes a pure leaf node predicting "Genuine".
2. Transaction Amount = "High": All 6 tuples are Fraud (Entropy = 0). This branch becomes a pure leaf node predicting "Fraud".
Reason: All samples at this node belong to the exact same class, meeting the stopping condition for recursive partitioning.`,
    lectureReference: {
      lectureId: 'L07',
      lectureTitle: 'Classification and Prediction',
      conceptName: 'Decision Tree Induction & Attribute Selection via Information Gain',
      specificNote: 'Lecture 06 (Slide 5-7) and Lecture 07 (Slide 10-13, 20-22)'
    },
    subParts: [
      { partId: '4a_1', label: '4(a)(1)', text: 'Compute support and confidence for RAM → Monitor', marks: 2, answer: 'Support = 80%, Confidence = 88.89%', explanation: '8/10 transactions contain both; 9 contain RAM.', examAnswer: 'Support = 80%, Confidence = 88.89%' },
      { partId: '4a_2', label: '4(a)(2)', text: 'Compute support and confidence for RAM, Processor → SSD', marks: 2, answer: 'Support = 50%, Confidence = 83.33%', explanation: '5/10 contain all 3; 6 contain RAM and Processor.', examAnswer: 'Support = 50%, Confidence = 83.33%' },
      { partId: '4a_3', label: '4(a)(3)', text: 'Compute support and confidence for Scanner → Processor, Monitor', marks: 2, answer: 'Support = 20%, Confidence = 66.67%', explanation: '2/10 contain all 3; 3 contain Scanner.', examAnswer: 'Support = 20%, Confidence = 66.67%' },
      { partId: '4a_4', label: '4(a)(4)', text: 'Compute support and confidence for RAM, SSD, Processor → Monitor, Printer', marks: 2, answer: 'Support = 30%, Confidence = 60.00%', explanation: '3/10 contain all 5 items; 5 contain LHS.', examAnswer: 'Support = 30%, Confidence = 60.00%' },
      { partId: '4a_5', label: '4(a)(5)', text: 'Compute support and confidence for SSD → Processor, Cooling Fan, Monitor', marks: 2, answer: 'Support = 40%, Confidence = 66.67%', explanation: '4/10 contain all 4 items; 6 contain SSD.', examAnswer: 'Support = 40%, Confidence = 66.67%' },
      { partId: '4b_i', label: '4(b)(i)', text: 'Calculate the overall Entropy before splitting.', marks: 2, answer: 'Entropy = 0.997 bits', explanation: '7 Genuine, 8 Fraud out of 15 records.', examAnswer: 'Entropy(D) = 0.997 bits' },
      { partId: '4b_ii', label: '4(b)(ii)', text: 'Calculate the overall Entropy after splitting for each attribute.', marks: 8, answer: 'Amount = 0.324 bits, History = 0.564 bits, Time = 0.691 bits, Device = 0.993 bits.', explanation: 'Compute weighted entropy across all partitions of each attribute.', examAnswer: 'Info_Amount=0.324, Info_History=0.564, Info_Time=0.691, Info_Device=0.993' },
      { partId: '4b_iii', label: '4(b)(iii)', text: 'At which attribute should the decision tree split first? Give reasons.', marks: 2, answer: 'Transaction Amount, because it maximizes information gain (0.673 bits).', explanation: 'Greedy heuristic selects maximum gain.', examAnswer: 'Split on Transaction Amount (Gain = 0.673 bits, lowest entropy = 0.324 bits).' },
      { partId: '4b_iv', label: '4(b)(iv)', text: 'Identify a point that may be converted to a leaf node. Give reasons.', marks: 3, answer: 'Transaction Amount = "Low" (100% Genuine) and "High" (100% Fraud).', explanation: 'Entropy equals 0; all samples belong to the same class.', examAnswer: 'Amount="Low" (pure Genuine) or Amount="High" (pure Fraud); entropy is 0.' }
    ]
  }
];
