import { Topic } from '../types';

export const topicsData: Topic[] = [
  {
    id: 't_schemas',
    name: 'Data Warehouse Schemas & Dimensional Modeling',
    category: 'Data Warehousing',
    summary: 'Star Schema, Snowflake Schema, and Fact Constellation (Galaxy) Schema design, Kimball 4-Step Process, and Fact vs Dimension tables.',
    explanation: `Dimensional modeling structures data around business processes for rapid analytical reporting:
• Fact Tables: Central tables containing foreign keys and additive, numeric business performance measures (e.g., dollars_sold, units_sold).
• Dimension Tables: Denormalized textual context tables representing business entities (Time, Product, Customer, Store).
• Star Schema: A central fact table surrounded by single denormalized dimension tables.
• Snowflake Schema: A normalized variant where dimension tables branch out into normalized sub-dimension hierarchies (e.g. City -> State -> Country). Saves space but adds SQL joins.
• Fact Constellation (Galaxy Schema): Multiple fact tables that share dimension tables.
• Kimball 4-Step Design Process:
  1. Choose the business process (or data mart)
  2. Declare the grain (unit of measurement per fact row)
  3. Choose the dimensions
  4. Identify the numeric facts`,
    keyPoints: [
      'Star schema features denormalized dimensions for maximum query speed.',
      'Snowflake schema normalizes dimensions to remove redundancy.',
      'Fact Constellation has multiple fact tables sharing conformed dimensions.',
      'Measures can be Distributive (sum, count), Algebraic (avg = sum/count), or Holistic (median, mode).'
    ],
    formulas: [
      {
        name: 'Measure Categorization Rule',
        formula: 'Distributive: f({S_1}) = f(f(S_1_1), f(S_1_2)) | Algebraic: f = g(d_1, d_2, ... d_m)',
        explanation: 'Distributive measures allow independent sub-computations; Algebraic uses bounded distributive components.'
      }
    ],
    examples: [
      'Sales Fact Table with foreign keys: time_key, item_key, branch_key, location_key, and measures: units_sold, dollars_sold.',
      'Afco Foods case study: Dimensions = Product, Time, Region; Measure = Units sold, Amount.'
    ],
    lectureIds: ['L02', 'L04'],
    questionIds: ['Q01']
  },
  {
    id: 't_olap',
    name: 'OLAP Operations & Architectures',
    category: 'Data Warehousing',
    summary: 'Roll-up, Drill-down, Slice, Dice, Pivot, Drill-across, ROLAP vs MOLAP vs HOLAP architectures.',
    explanation: `Online Analytical Processing (OLAP) provides fast, multidimensional queries on enterprise data warehouses:
• Roll-up (Drill-up): Summarizes data by climbing up a hierarchy or reducing dimensions.
• Drill-down (Roll-down): Steps down to detailed data or introduces new dimensions.
• Slice: Performs a selection on one dimension of the cube.
• Dice: Defines a subcube by selecting on two or more dimensions.
• Pivot (Rotate): Reorients the data axes for alternate visual presentation.
• Drill-across: Executes queries across multiple fact tables.
• Drill-through: Drills from the summary cube down to the operational backend relational tables.
• Storage architectures:
  - ROLAP: Extended relational DBMS using SQL.
  - MOLAP: Array-based multidimensional storage (sparse matrix) for fast direct indexed access.
  - HOLAP: Hybrid (relational at base level, arrays at summary level).`,
    keyPoints: [
      'Roll-up climbs hierarchies (Day -> Month -> Quarter -> Year).',
      'Drill-down reverses roll-up to examine granular data.',
      'Pivot rotates axes (e.g. transforming 3D into 2D display tables).',
      'MOLAP uses physical multidimensional array chunks.'
    ],
    examples: [
      'Viewing total annual sales of TV in USA is a roll-up along both Time and Location dimensions.',
      'Selecting Product = "Toaster" over Region and Time is a Slice operation.'
    ],
    lectureIds: ['L02', 'L04'],
    questionIds: ['Q01', 'Q03']
  },
  {
    id: 't_preprocessing',
    name: 'Data Preprocessing, Cleaning & Imputation',
    category: 'Data Preprocessing',
    summary: 'Dirty data types (incomplete, noisy, inconsistent), handling missing data without deletion, and date format unification.',
    explanation: `Real-world data is dirty due to human error, equipment malfunction, transmission loss, and system integration discrepancies:
• Incomplete Data: Missing attribute values (e.g. occupation = ""). Handled via:
  1. Attribute mean (average of all available values)
  2. Class-conditional mean (average of values belonging to the same department or class—much smarter)
  3. Deductive record linkage / duplicate lookup (e.g. identifying identical employee names and join dates to restore missing salary)
  4. Most probable value (mode or regression)
  5. Global placeholder ("Unknown")
• Noisy Data: Errors or outliers (e.g. Salary = -10). Smoothed using binning, clustering, or regression.
• Inconsistent Data: Discrepancies in formats or codes (e.g. Age = 42 but Birthday = 1997; rating 1,2,3 vs A,B,C). Resolved using metadata mapping and date unification (YYYYMMDD).`,
    keyPoints: [
      'Data preparation accounts for 70-80% of data mining project effort.',
      'Never discard tuples when working with small datasets; apply intelligent imputation.',
      'Record linkage allows exact restoration of missing fields from duplicate tuples.'
    ],
    examples: [
      'Table Q2c: Imputing employee Age using dataset mean (28.33), and restoring Amal Perera\'s salary (55,000) from duplicate record E101.'
    ],
    lectureIds: ['L01', 'L03'],
    questionIds: ['Q01', 'Q02']
  },
  {
    id: 't_binning',
    name: 'Binning Methods & MaxDiff Histograms',
    category: 'Data Preprocessing',
    summary: 'Equal-width binning, equal-depth binning, bin means/boundaries smoothing, and MaxDiff histogram partitioning.',
    explanation: `Binning discretizes continuous numerical values and removes noise:
• Equal-Width Partitioning:
  Divides the attribute range into N equal spans: Width W = (Max - Min) / N.
  Simple to implement, but vulnerable to outliers and skewed distributions.
• Equal-Depth (Equal-Frequency) Partitioning:
  Partitions the sorted dataset into N intervals each containing roughly an equal count of samples (N_samples / B).
  Provides good data scaling and resists outlier distortion.
• Smoothing Techniques:
  - Smoothing by Bin Means: Every value in the bin is replaced by the arithmetic mean of that bin.
  - Smoothing by Bin Boundaries: Every value is replaced by whichever bin boundary (minimum or maximum) is numerically closer.
• MaxDiff Histogram:
  A non-parametric numerosity reduction method. To construct B buckets, identify the (B - 1) largest numerical differences between adjacent sorted values and place the boundaries at those gaps.`,
    keyPoints: [
      'Always sort the dataset before partitioning!',
      'Equal-width calculates interval widths W = (Max - Min)/N.',
      'Equal-depth places equal counts (N/B) in each bucket.',
      'MaxDiff uses the (B - 1) largest consecutive sorted differences.'
    ],
    formulas: [
      {
        name: 'Equal-Width Interval Width',
        formula: 'W = \\frac{Max - Min}{N}',
        explanation: 'Calculates the uniform distance span for each of the N intervals.'
      },
      {
        name: 'MaxDiff Partitioning Rule',
        formula: '\\text{Split at } \\beta - 1 \\text{ largest } (x_{i+1} - x_i)',
        explanation: 'Identifies the largest gaps between adjacent sorted values to define bucket boundaries.'
      }
    ],
    examples: [
      'Question 2(a): 30 age values sorted from 23 to 77. Equal-width W = 13.5. Equal-depth 10 values per bin. MaxDiff splits at gap 11 (56 to 67) and gap 5 (42 to 47).'
    ],
    lectureIds: ['L03'],
    questionIds: ['Q02']
  },
  {
    id: 't_normalization',
    name: 'Data Transformation & Normalization',
    category: 'Data Preprocessing',
    summary: 'Min-Max normalization, Z-Score normalization, and Decimal Scaling.',
    explanation: `Transforms attribute values to fall within a small, specified target range so that attributes with large domains do not dominate those with smaller domains:
• Min-Max Normalization:
  Linearly scales original value v to v' in [new_min_A, new_max_A]:
  v' = ((v - min_A) / (max_A - min_A)) * (new_max_A - new_min_A) + new_min_A.
  When target range is [0, 1], formula simplifies to: v' = (v - min_A) / (max_A - min_A).
• Z-Score (Zero-Mean) Normalization:
  Normalizes based on mean and standard deviation:
  v' = (v - mean_A) / stand_dev_A. Useful when actual min and max are unknown or outliers exist.
• Normalization by Decimal Scaling:
  Normalizes by shifting the decimal point:
  v' = v / 10^j, where j is the smallest integer such that Max(|v'|) < 1.`,
    keyPoints: [
      'Min-Max maps exactly into [new_min, new_max], preserving original linear relationships.',
      'Z-score is robust to outliers and standardizes variance.',
      'Decimal scaling divides by 10^j where j depends on the maximum absolute value.'
    ],
    formulas: [
      {
        name: 'Min-Max Normalization',
        formula: 'v\' = \\frac{v - min_A}{max_A - min_A}(new\\_max_A - new\\_min_A) + new\\_min_A',
        explanation: 'Scales value v into the target interval [new_min_A, new_max_A].'
      },
      {
        name: 'Z-Score Normalization',
        formula: 'v\' = \\frac{v - \\bar{A}}{\\sigma_A}',
        explanation: 'Standardizes value v using sample mean and standard deviation.'
      },
      {
        name: 'Decimal Scaling Normalization',
        formula: 'v\' = \\frac{v}{10^j} \\quad \\text{where } \\max(|v\'|) < 1',
        explanation: 'Shifts decimal point by power j based on the largest absolute value.'
      }
    ],
    examples: [
      'Question 2(b): Normalizing Test Scores with min = 40 and max = 100 to [0, 1]. Score 78 transforms to (78 - 40)/60 = 0.633.'
    ],
    lectureIds: ['L03'],
    questionIds: ['Q01', 'Q02']
  },
  {
    id: 't_aoi',
    name: 'Attribute-Oriented Induction (AOI)',
    category: 'Data Mining Methods',
    summary: 'Data generalization, concept hierarchy climbing, attribute removal, and prime generalized relations.',
    explanation: `Attribute-Oriented Induction (AOI) abstracts large task-relevant relational data from low primitive levels to higher conceptual levels:
1. InitialRel: Run database query to retrieve task-relevant tuples.
2. PreGen (Generalization Plan):
   - Attribute Removal: Attributes with high cardinality and no concept hierarchy (e.g., student IDs, names, social security numbers) are eliminated.
   - Attribute Generalization: Attributes with concept hierarchies (e.g., birth_date -> age -> age_group; street -> city -> province) are generalized step-by-step to a desired threshold.
3. PrimeGen: Perform substitution of primitive values with generalized concepts.
4. Tuple Merging & Aggregation: Merge identical generalized rows and accumulate their frequency count.
5. Presentation: Output as prime generalized relation, cross-tab, or visual chart.`,
    keyPoints: [
      'Unique identifiers must be removed to allow tuples to merge.',
      'Generalization climbs concept hierarchies from specific to general.',
      'Identical generalized tuples are combined with accumulated counts.'
    ],
    examples: [
      'Question 2(c): Removing Student ID and Name, generalizing City to Province, GPA to Honors Category, and merging tuples.'
    ],
    lectureIds: ['L05'],
    questionIds: ['Q02']
  },
  {
    id: 't_star_reduction',
    name: 'Star Attribute Reduction & Star Trees',
    category: 'Data Cube & OLAP',
    summary: 'Iceberg cube optimization, replacing low-support attribute values with star (*), and constructing lossless compressed star tables.',
    explanation: `Computing full high-dimensional data cubes suffers from the "curse of dimensionality" and storage explosion.
• Iceberg Cube: Computes only those cube cells that satisfy an aggregate threshold condition (e.g., count >= minsup).
• Star Attribute Reduction:
  - If a single-dimensional aggregate on an attribute value has count < minsup, that value can NEVER satisfy minsup in any multi-dimensional combination (by the Apriori property).
  - Therefore, it is useless to distinguish that specific value during iceberg computation.
  - Solution: Replace all such low-frequency values with a wildcard star ('*').
  - Collapse all resulting identical rows together, accumulating their count.
  - This produces a lossless compression of the original table for iceberg computation!
• Star Tree: A compressed cell tree constructed from the star-reduced table, with a side Star Table for lookup.`,
    keyPoints: [
      'Values with 1D count < minsup are replaced with \'*\'.',
      'Identical tuples with stars are merged and their counts summed.',
      'Star reduction is 100% lossless for iceberg cubing.'
    ],
    examples: [
      'Question 3(a): In Table Q3a with minsup = 3, Dr. Fernando (2), Dr. Kumara (2), and Dr. Gamage (1) are replaced with \'*\', compressing 12 visits into 10 star tuples.'
    ],
    lectureIds: ['L05'],
    questionIds: ['Q03']
  },
  {
    id: 't_datacube_array',
    name: 'Data Cube Computation & Multi-Way Array Aggregation',
    category: 'Data Cube & OLAP',
    summary: 'Cuboid lattice, Base vs Apex cuboids, and single-pass Multiway Array chunking.',
    explanation: `An n-dimensional data cube contains 2^n cuboids arranged in a lattice:
• 0-D Apex Cuboid: Represents the concept 'all' (all, all, ...), containing a single aggregated grand total.
• 1-D Cuboids: Marginal aggregations along each individual dimension.
• 2-D Cuboids: Pairwise cross-tabulations.
• n-D Base Cuboid: The most detailed, atomic level of the cube.
• Multi-Way Array Aggregation:
  An array-based computation algorithm that partitions high-dimensional data arrays into small chunks.
  Computes intermediate 2-D, 1-D, and 0-D cuboids simultaneously during a single sequential pass over the chunks.
  Reuses memory buffers to compute ancestor cuboids directly without multiple disk scans or candidate generation.`,
    keyPoints: [
      'Total cuboids in an n-dimensional cube = 2^n.',
      'Apex cuboid = 0-D; Base cuboid = n-D.',
      'Multiway array aggregation uses array chunking and simultaneous multi-projection in memory.'
    ],
    examples: [
      'Question 3(b): Calculating the 8 cuboids (Apex = 5,710 kg, 3 1D cuboids, 3 2D cuboids, 1 3D base cuboid) for 4 grain products, 3 regions, and 3 months.'
    ],
    lectureIds: ['L02', 'L05'],
    questionIds: ['Q01', 'Q03']
  },
  {
    id: 't_association_rules',
    name: 'Association Rule Mining & Apriori Algorithm',
    category: 'Frequent Pattern Mining',
    summary: 'Itemsets, Support, Confidence, Apriori property, candidate generation and pruning.',
    explanation: `Market Basket Analysis discovers co-occurrence relationships between products in transaction datasets:
• k-Itemset: A collection of k distinct items.
• Frequent Itemset: An itemset whose occurrence frequency satisfies min_support.
• Association Rule X → Y:
  - Support s = P(X ∪ Y) = count(X ∪ Y) / N
  - Confidence c = P(Y | X) = count(X ∪ Y) / count(X)
• The Apriori Principle:
  Any non-empty subset of a frequent itemset must also be frequent.
  If an itemset is infrequent, all of its supersets are guaranteed to be infrequent and are pruned immediately!
• Candidate Generation & Test:
  - Step 1 (Self-joining): L_k * L_k joins itemsets that share their first (k - 1) items.
  - Step 2 (Pruning): Remove any candidate containing a (k - 1)-subset that is not in L_{k-1}.`,
    keyPoints: [
      'Support measures overall prevalence; Confidence measures conditional likelihood.',
      'Confidence denominator is count(X), not total transactions N.',
      'Apriori pruning eliminates candidates before counting against database.'
    ],
    formulas: [
      {
        name: 'Support',
        formula: 'Support(X \\to Y) = P(X \\cup Y) = \\frac{\\text{count}(X \\cup Y)}{N}',
        explanation: 'Fraction of total transactions containing both X and Y.'
      },
      {
        name: 'Confidence',
        formula: 'Confidence(X \\to Y) = P(Y \\mid X) = \\frac{\\text{count}(X \\cup Y)}{\\text{count}(X)}',
        explanation: 'Fraction of transactions containing X that also contain Y.'
      }
    ],
    examples: [
      'Question 4(a): In 10 computer transactions, Rule RAM → Monitor has Support = 8/10 = 80%, Confidence = 8/9 = 88.89%.'
    ],
    lectureIds: ['L06'],
    questionIds: ['Q04']
  },
  {
    id: 't_decision_trees',
    name: 'Decision Tree Induction & Information Gain',
    category: 'Classification',
    summary: 'ID3 algorithm, Entropy calculation, Information Gain, attribute selection, and leaf node termination criteria.',
    explanation: `Decision tree induction uses a greedy, recursive top-down divide-and-conquer strategy to classify data:
• Entropy:
  Measures the impurity or disorder of a set of examples:
  Entropy(t) = - sum_{c=1}^m p(c|t) log_2 p(c|t).
  If all examples belong to one class (100% pure), Entropy = 0.
  If examples are evenly split between 2 classes, Entropy = 1.0 bit (maximum disorder).
• Expected Information (Conditional Entropy):
  Info_A(D) = sum_{j=1}^v (|D_j| / |D|) * Entropy(D_j).
• Information Gain:
  Gain(A) = Info(D) - Info_A(D).
  The attribute that provides the MAXIMUM Information Gain is selected as the splitting node.
• Stopping Conditions:
  1. All samples at node belong to the exact same class -> Node becomes a pure leaf node!
  2. No remaining attributes for further splitting -> Apply majority voting.
  3. No samples left.`,
    keyPoints: [
      'Pure nodes have Entropy = 0.0 bits and immediately terminate as leaf nodes.',
      'ID3 selects the attribute that maximizes Gain(A).',
      'Use the provided log_2 table for base-2 logarithmic calculations.'
    ],
    formulas: [
      {
        name: 'Entropy at Node t',
        formula: 'Entropy(t) = - \\sum_{c=1}^{m} p(c \\mid t) \\log_2 p(c \\mid t)',
        explanation: 'Measures class impurity at node t in bits.'
      },
      {
        name: 'Expected Information after Splitting',
        formula: 'Info_A(D) = \\sum_{j=1}^{v} \\frac{|D_j|}{|D|} \\times Entropy(D_j)',
        explanation: 'Weighted average of entropies across all partitions formed by attribute A.'
      },
      {
        name: 'Information Gain',
        formula: 'Gain(A) = Info(D) - Info_A(D)',
        explanation: 'Reduction in entropy achieved by partitioning on attribute A.'
      }
    ],
    examples: [
      'Question 4(b): Evaluating financial fraud (15 records). Initial Entropy = 0.997 bits. Transaction Amount gives Gain = 0.673 bits and creates two pure leaf nodes (Low -> Genuine, High -> Fraud).'
    ],
    lectureIds: ['L07'],
    questionIds: ['Q04']
  }
];
