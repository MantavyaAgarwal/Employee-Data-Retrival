const PROMPTS = {
  weighted_scoring: `You are an HR analytics AI. Analyze this employee dataset sample and answer:

"How do Technical_Skills_Rating, Communication_Skills_Rating, and Problem_Solving_Skills_Rating collectively influence Performance_Rating? Generate a weighted scoring model."

Dataset (first 10 employees shown as example, full dataset has 150 employees):
${JSON.stringify(EMPLOYEE_DATA.slice(0,10), null, 1)}

Provide:
1. A weighted scoring model formula with estimated weights for each skill
2. Which skill has the strongest influence on performance
3. Employees where the formula predicts well vs poorly
4. Actionable insights for HR

Be specific, data-driven, and concise. Use actual numbers from the data.`,

  high_perf_low_lead: `You are an HR analytics AI. Analyze this employee dataset and answer:

"Identify employees with high Performance_Rating (≥12) but Low or Medium Leadership_Potential. Suggest possible reasons using other contextual attributes."

Dataset sample (150 employees):
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Identify specific employee IDs, describe the patterns you see, and provide 3-4 hypotheses with supporting evidence from the data.`,

  perf_clustering: `You are an HR analytics AI. Analyze this employee dataset and answer:

"Compare employees with Performance_Rating ≥ 10 vs ≤ 5. Generate behavioral patterns for each cluster."

Dataset sample:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Provide:
- Count and avg key metrics for each group
- Distinct behavioral patterns per cluster
- Key differentiators (skills, training, engagement, etc.)
- HR recommendations`,

  anomaly_detection: `You are an HR analytics AI. Analyze this employee dataset and answer:

"Detect inconsistencies where high ratings (skills) do not align with project outcomes and explain anomalies."

Dataset sample:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Find specific employees where:
- High technical/problem-solving skills + Failed projects
- Low skills + Successful projects
Explain each anomaly with hypotheses. Be specific with employee IDs.`,

  ideal_employee: `You are an HR analytics AI. Analyze this employee dataset and answer:

"Generate a profile of an 'ideal employee' using the top 10% performers across all rating columns."

Dataset sample (150 employees):
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Provide:
- Numerical thresholds for each key metric
- Department/role trends of top performers
- A descriptive narrative of the ideal employee
- Training and hiring recommendations to cultivate this profile`,

  dev_hours_correlation: `You are an HR analytics AI. Analyze this employee dataset:

"Evaluate whether Professional_Development_Hours correlate with Performance_Rating and Promotions using inference."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Calculate rough correlations, identify high-dev-low-perf and low-dev-high-perf anomalies, and provide nuanced LLM-driven inference on whether investment in development hours pays off.`,

  mentor_impact: `You are an HR analytics AI. Analyze this employee dataset:

"Analyze the impact of Mentor_Rating and Mentor_Experience_Level on Internship_Conversion_Status and Employee Performance."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Break down conversion rates by mentor level (Junior/Associate/Mid-Senior/Senior), identify the optimal mentoring conditions, and provide recommendations.`,

  training_low_perf: `You are an HR analytics AI. Analyze this employee dataset:

"Identify employees who received training (Basic or Advanced) but show low performance (≤7). Generate hypotheses for why training didn't help."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

List specific employee IDs, their training type, performance, and contextual factors. Generate 4-5 hypotheses with data support.`,

  training_comparison: `You are an HR analytics AI. Analyze this employee dataset:

"Compare Training_Program types (None vs Basic vs Advanced) and their effect on performance and career growth (Number_Of_Promotions)."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Provide avg performance and promotions per training type, statistical observations, and recommendations on which training program yields the best ROI.`,

  training_benefit_pred: `You are an HR analytics AI. Analyze this employee dataset:

"Predict which employees are likely to benefit most from advanced training programs."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Use reasoning to identify the profile of employees who would benefit most (current training level, performance gap, skills profile, engagement). List 5-7 specific employee IDs with justification.`,

  soft_skill_cluster: `You are an HR analytics AI. Analyze this employee dataset:

"Cluster employees based on Leadership_Qualities_Rating, Teamwork_Skills_Rating, Adaptability_Rating, and Creativity_Rating. Describe each cluster."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Create 3-4 distinct clusters (e.g., by scoring these on a composite scale), give each a descriptive name, explain their characteristics, and suggest tailored management approaches.`,

  conflict_contradiction: `You are an HR analytics AI. Analyze this employee dataset:

"Identify employees who appear in contexts with high Conflict_Resolution_Cases but low Teamwork_Skills_Rating, and explain the contradictions."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Note: Use proxy signals. Identify employees with low Teamwork but high Initiative/Leadership which may indicate conflict-prone independence. Explain the psychological/organizational dynamics.`,

  engagement_impact: `You are an HR analytics AI. Analyze this employee dataset:

"Generate insights on how Employee_Engagement_Score impacts Job Satisfaction and Retention (Resignation Status)."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Segment by engagement tiers (low <70, medium 70-85, high >85). Compare job satisfaction scores and resignation rates per tier. Provide actionable retention recommendations.`,

  initiative_vs_innovation: `You are an HR analytics AI. Analyze this employee dataset:

"Detect employees with high Initiative_Rating but Low Innovation_Contributions and explain possible blockers."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Find specific cases, analyze contextual factors (role, project type, management), and generate 4-5 hypotheses about organizational or individual blockers. Suggest interventions.`,

  project_complexity_outcome: `You are an HR analytics AI. Analyze this employee dataset:

"Analyze how Project_Complexity (Simple/Moderate/Complex) and Project_Size (Small/Medium/Large) influence Project_Outcome (Successful/Failed/In Progress)."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Build a cross-tabulation analysis, identify which combinations have the highest failure rates, and recommend resource allocation strategies.`,

  success_vs_failed: `You are an HR analytics AI. Analyze this employee dataset:

"Identify patterns among employees involved in successful vs failed projects — focusing on skills, roles, engagement, and training."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Compare avg skill ratings, engagement scores, training programs, and roles between successful vs failed project employees. Extract actionable team composition insights.`,

  project_success_model: `You are an HR analytics AI. Analyze this employee dataset:

"Generate a predictive reasoning model: What combination of skills and ratings leads to successful project outcomes?"

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Create a conceptual scoring model (e.g., Success Score = weighted combination of skills). Identify the top 5 predictors of project success. Show example employees who fit the model well.`,

  role_comparison: `You are an HR analytics AI. Analyze this employee dataset:

"Compare performance of employees across different Project_Roles (Manager vs Developer vs Analyst)."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Calculate avg performance rating, skill ratings, engagement, and project success rates per role. Identify which role is over/under performing and why. Suggest role-specific development actions.`,

  resignation_factors: `You are an HR analytics AI. Analyze this employee dataset:

"Identify factors contributing to Employee_Resignation_Status = Yes using multi-variable reasoning."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Compare resigned vs retained employees across: salary increase, bonus, work-life balance, overtime, engagement, job satisfaction, leadership potential, training. Rank the top 5 resignation predictors with evidence.`,

  risk_profile: `You are an HR analytics AI. Analyze this employee dataset:

"Generate a risk profile of employees likely to resign using behavioral and compensation features."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Define a resignation risk profile (the typical attributes of someone about to leave). List 8-10 specific high-risk employee IDs with their risk score justification. Suggest immediate HR interventions.`,

  resigned_vs_retained: `You are an HR analytics AI. Analyze this employee dataset:

"Compare work-life balance, overtime hours, and engagement scores between resigned (Employee_Resignation_Status=Yes) vs retained (No) employees."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Calculate avg values per group, identify the starkest differences, and provide a narrative explanation of the retention dynamics. What should HR do differently?`,

  salary_bonus_perf: `You are an HR analytics AI. Analyze this employee dataset:

"Analyze the relationship between Annual_Salary_Increase_Percentage, Performance_Bonus_Percentage, and Performance_Rating. Are top performers rewarded fairly?"

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Identify high performers (rating ≥14) with low salary increases, calculate fairness ratios, and flag pay equity concerns. Provide compensation optimization recommendations.`,

  underpaid_employees: `You are an HR analytics AI. Analyze this employee dataset:

"Identify employees who are underpaid relative to their performance and skills."

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Define underpayment as: high performance + high skill ratings + low salary increase + low bonus. List specific employee IDs meeting this criteria, quantify the gap, and recommend corrective actions.`,

  benefits_retention: `You are an HR analytics AI. Analyze this employee dataset:

"Evaluate whether compensation benefits influence retention and satisfaction."

Note: Use salary_increase, bonus_percentage, and Job_Satisfaction_Score as proxies. Analyze the relationship between total comp signals and resignation rates.

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Find patterns, calculate retention rates by compensation tier, and provide strategic benefits recommendations.`,

  recruitment_effectiveness: `You are an HR analytics AI. Analyze this employee dataset:

"Analyze how Hiring_Source, Time_to_Hire, and Recruitment_Cost impact employee performance, retention, and job satisfaction. Which channel gives the best ROI?"

Dataset:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

Compare all hiring sources (Referral, Agency, Job Board, Internal, Direct Visit) on: avg performance, resignation rate, job satisfaction, and cost. Calculate a ROI score per channel. Recommend the optimal hiring strategy.`
};