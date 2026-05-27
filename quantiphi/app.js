// ============================
// CONFIGURATION
// ============================
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || ''; // ⚠️ Set your Google Gemini API key via environment variable

// ============================
// EMPLOYEE SAMPLE DATA
// ============================
let EMPLOYEE_DATA = [{"Employee_ID":"2024/Finance/0001","Department":"IT","Job_Title":"Manager","Performance_Rating":"10","Technical_Skills_Rating":"19","Communication_Skills_Rating":"4","Problem_Solving_Skills_Rating":"10","Leadership_Qualities_Rating":"14","Teamwork_Skills_Rating":"8","Initiative_Rating":"6","Adaptability_Rating":"7","Creativity_Rating":"5","Strategic_Thinking_Rating":"2","Employee_Engagement_Score":"74","Professional_Development_Hours":"38","Number_Of_Promotions":"1","Training_Program":"Basic","Mentor_Rating":"8","Mentor_Experience_Level":"Mid-Senior","Project_Complexity":"Simple","Project_Size":"Small","Project_Role":"Analyst","Project_Outcome":"Failed","Employee_Resignation_Status":"No","Annual_Salary_Increase_Percentage":"6","Performance_Bonus_Percentage":"1","Hiring_Source":"Referral","Time_to_Hire":"27","Recruitment_Cost":"4993","Employee_Job_Satisfaction_Score":"4","Employee_Work_Life_Balance_Rating":"8","Overtime_Hours_Per_Week":"12","Leadership_Potential":"High","Innovation_Contributions":"Medium","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/IT/0002","Department":"HR","Job_Title":"Consultant","Performance_Rating":"12","Technical_Skills_Rating":"5","Communication_Skills_Rating":"10","Problem_Solving_Skills_Rating":"7","Leadership_Qualities_Rating":"5","Teamwork_Skills_Rating":"7","Initiative_Rating":"6","Adaptability_Rating":"8","Creativity_Rating":"5","Strategic_Thinking_Rating":"10","Employee_Engagement_Score":"84","Professional_Development_Hours":"54","Number_Of_Promotions":"0","Training_Program":"Advanced","Mentor_Rating":"11","Mentor_Experience_Level":"Mid-Senior","Project_Complexity":"Moderate","Project_Size":"Small","Project_Role":"Developer","Project_Outcome":"In Progress","Employee_Resignation_Status":"No","Annual_Salary_Increase_Percentage":"7","Performance_Bonus_Percentage":"6","Hiring_Source":"Referral","Time_to_Hire":"28","Recruitment_Cost":"5032","Employee_Job_Satisfaction_Score":"5","Employee_Work_Life_Balance_Rating":"4","Overtime_Hours_Per_Week":"11","Leadership_Potential":"High","Innovation_Contributions":"Low","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/HR/0003","Department":"HR","Job_Title":"Analyst","Performance_Rating":"11","Technical_Skills_Rating":"4","Communication_Skills_Rating":"8","Problem_Solving_Skills_Rating":"9","Leadership_Qualities_Rating":"7","Teamwork_Skills_Rating":"8","Initiative_Rating":"7","Adaptability_Rating":"5","Creativity_Rating":"6","Strategic_Thinking_Rating":"9","Employee_Engagement_Score":"71","Professional_Development_Hours":"57","Number_Of_Promotions":"2","Training_Program":"None","Mentor_Rating":"10","Mentor_Experience_Level":"Mid-Senior","Project_Complexity":"Moderate","Project_Size":"Medium","Project_Role":"Developer","Project_Outcome":"Failed","Employee_Resignation_Status":"Yes","Annual_Salary_Increase_Percentage":"3","Performance_Bonus_Percentage":"6","Hiring_Source":"Agency","Time_to_Hire":"24","Recruitment_Cost":"4841","Employee_Job_Satisfaction_Score":"10","Employee_Work_Life_Balance_Rating":"14","Overtime_Hours_Per_Week":"5","Leadership_Potential":"Low","Innovation_Contributions":"Medium","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/Sales/0004","Department":"Sales","Job_Title":"Manager","Performance_Rating":"14","Technical_Skills_Rating":"4","Communication_Skills_Rating":"8","Problem_Solving_Skills_Rating":"9","Leadership_Qualities_Rating":"6","Teamwork_Skills_Rating":"6","Initiative_Rating":"12","Adaptability_Rating":"6","Creativity_Rating":"4","Strategic_Thinking_Rating":"7","Employee_Engagement_Score":"84","Professional_Development_Hours":"54","Number_Of_Promotions":"2","Training_Program":"Advanced","Mentor_Rating":"15","Mentor_Experience_Level":"Senior","Project_Complexity":"Moderate","Project_Size":"Small","Project_Role":"Developer","Project_Outcome":"In Progress","Employee_Resignation_Status":"Yes","Annual_Salary_Increase_Percentage":"11","Performance_Bonus_Percentage":"2","Hiring_Source":"Job Board","Time_to_Hire":"29","Recruitment_Cost":"5044","Employee_Job_Satisfaction_Score":"6","Employee_Work_Life_Balance_Rating":"5","Overtime_Hours_Per_Week":"13","Leadership_Potential":"High","Innovation_Contributions":"High","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/HR/0005","Department":"HR","Job_Title":"Analyst","Performance_Rating":"4","Technical_Skills_Rating":"7","Communication_Skills_Rating":"6","Problem_Solving_Skills_Rating":"6","Leadership_Qualities_Rating":"6","Teamwork_Skills_Rating":"11","Initiative_Rating":"10","Adaptability_Rating":"6","Creativity_Rating":"10","Strategic_Thinking_Rating":"8","Employee_Engagement_Score":"67","Professional_Development_Hours":"49","Number_Of_Promotions":"1","Training_Program":"Advanced","Mentor_Rating":"9","Mentor_Experience_Level":"Senior","Project_Complexity":"Simple","Project_Size":"Medium","Project_Role":"Manager","Project_Outcome":"In Progress","Employee_Resignation_Status":"Yes","Annual_Salary_Increase_Percentage":"9","Performance_Bonus_Percentage":"2","Hiring_Source":"Referral","Time_to_Hire":"29","Recruitment_Cost":"5011","Employee_Job_Satisfaction_Score":"10","Employee_Work_Life_Balance_Rating":"6","Overtime_Hours_Per_Week":"3","Leadership_Potential":"High","Innovation_Contributions":"Low","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/HR/0006","Department":"Marketing","Job_Title":"Developer","Performance_Rating":"10","Technical_Skills_Rating":"14","Communication_Skills_Rating":"8","Problem_Solving_Skills_Rating":"8","Leadership_Qualities_Rating":"14","Teamwork_Skills_Rating":"6","Initiative_Rating":"4","Adaptability_Rating":"5","Creativity_Rating":"13","Strategic_Thinking_Rating":"6","Employee_Engagement_Score":"77","Professional_Development_Hours":"46","Number_Of_Promotions":"0","Training_Program":"Basic","Mentor_Rating":"2","Mentor_Experience_Level":"Junior","Project_Complexity":"Simple","Project_Size":"Small","Project_Role":"Developer","Project_Outcome":"In Progress","Employee_Resignation_Status":"Yes","Annual_Salary_Increase_Percentage":"4","Performance_Bonus_Percentage":"3","Hiring_Source":"Internal","Time_to_Hire":"28","Recruitment_Cost":"5058","Employee_Job_Satisfaction_Score":"1","Employee_Work_Life_Balance_Rating":"4","Overtime_Hours_Per_Week":"6","Leadership_Potential":"High","Innovation_Contributions":"High","Internship_Conversion_Status":"Not Converted"},{"Employee_ID":"2024/Marketing/0007","Department":"Marketing","Job_Title":"Manager","Performance_Rating":"6","Technical_Skills_Rating":"7","Communication_Skills_Rating":"9","Problem_Solving_Skills_Rating":"8","Leadership_Qualities_Rating":"9","Teamwork_Skills_Rating":"7","Initiative_Rating":"3","Adaptability_Rating":"11","Creativity_Rating":"8","Strategic_Thinking_Rating":"8","Employee_Engagement_Score":"82","Professional_Development_Hours":"54","Number_Of_Promotions":"0","Training_Program":"Advanced","Mentor_Rating":"10","Mentor_Experience_Level":"Associate","Project_Complexity":"Complex","Project_Size":"Small","Project_Role":"Analyst","Project_Outcome":"In Progress","Employee_Resignation_Status":"No","Annual_Salary_Increase_Percentage":"4","Performance_Bonus_Percentage":"3","Hiring_Source":"Job Board","Time_to_Hire":"24","Recruitment_Cost":"4907","Employee_Job_Satisfaction_Score":"8","Employee_Work_Life_Balance_Rating":"9","Overtime_Hours_Per_Week":"7","Leadership_Potential":"Low","Innovation_Contributions":"Low","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/Marketing/0008","Department":"HR","Job_Title":"Manager","Performance_Rating":"8","Technical_Skills_Rating":"11","Communication_Skills_Rating":"11","Problem_Solving_Skills_Rating":"9","Leadership_Qualities_Rating":"9","Teamwork_Skills_Rating":"10","Initiative_Rating":"13","Adaptability_Rating":"12","Creativity_Rating":"8","Strategic_Thinking_Rating":"10","Employee_Engagement_Score":"69","Professional_Development_Hours":"42","Number_Of_Promotions":"2","Training_Program":"Advanced","Mentor_Rating":"13","Mentor_Experience_Level":"Associate","Project_Complexity":"Simple","Project_Size":"Large","Project_Role":"Developer","Project_Outcome":"In Progress","Employee_Resignation_Status":"No","Annual_Salary_Increase_Percentage":"4","Performance_Bonus_Percentage":"4","Hiring_Source":"Agency","Time_to_Hire":"34","Recruitment_Cost":"4983","Employee_Job_Satisfaction_Score":"9","Employee_Work_Life_Balance_Rating":"6","Overtime_Hours_Per_Week":"5","Leadership_Potential":"Medium","Innovation_Contributions":"Medium","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/Marketing/0009","Department":"Finance","Job_Title":"Analyst","Performance_Rating":"13","Technical_Skills_Rating":"11","Communication_Skills_Rating":"7","Problem_Solving_Skills_Rating":"11","Leadership_Qualities_Rating":"10","Teamwork_Skills_Rating":"8","Initiative_Rating":"12","Adaptability_Rating":"9","Creativity_Rating":"6","Strategic_Thinking_Rating":"15","Employee_Engagement_Score":"83","Professional_Development_Hours":"55","Number_Of_Promotions":"0","Training_Program":"Basic","Mentor_Rating":"7","Mentor_Experience_Level":"Senior","Project_Complexity":"Simple","Project_Size":"Medium","Project_Role":"Developer","Project_Outcome":"Successful","Employee_Resignation_Status":"Yes","Annual_Salary_Increase_Percentage":"4","Performance_Bonus_Percentage":"3","Hiring_Source":"Internal","Time_to_Hire":"36","Recruitment_Cost":"5128","Employee_Job_Satisfaction_Score":"7","Employee_Work_Life_Balance_Rating":"11","Overtime_Hours_Per_Week":"10","Leadership_Potential":"Low","Innovation_Contributions":"Medium","Internship_Conversion_Status":"Converted"},{"Employee_ID":"2024/HR/0010","Department":"Marketing","Job_Title":"Analyst","Performance_Rating":"6","Technical_Skills_Rating":"4","Communication_Skills_Rating":"11","Problem_Solving_Skills_Rating":"9","Leadership_Qualities_Rating":"6","Teamwork_Skills_Rating":"6","Initiative_Rating":"11","Adaptability_Rating":"3","Creativity_Rating":"7","Strategic_Thinking_Rating":"11","Employee_Engagement_Score":"89","Professional_Development_Hours":"52","Number_Of_Promotions":"1","Training_Program":"Advanced","Mentor_Rating":"9","Mentor_Experience_Level":"Senior","Project_Complexity":"Complex","Project_Size":"Small","Project_Role":"Manager","Project_Outcome":"Successful","Employee_Resignation_Status":"No","Annual_Salary_Increase_Percentage":"4","Performance_Bonus_Percentage":"1","Hiring_Source":"Agency","Time_to_Hire":"30","Recruitment_Cost":"4913","Employee_Job_Satisfaction_Score":"9","Employee_Work_Life_Balance_Rating":"7","Overtime_Hours_Per_Week":"5","Leadership_Potential":"High","Innovation_Contributions":"Low","Internship_Conversion_Status":"Converted"}];

// ============================
// PROMPT DEFINITIONS
// ============================

// ============================
// FILE UPLOAD & CSV PARSER
// ============================
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    let parsedData = parseCSV(text);
    if (parsedData.length > 0) {
      const totalRecords = parsedData.length;
      
      // Calculate dashboard stats based on the FULL parsed data
      let totalPerf = 0;
      let resignedCount = 0;
      const departments = new Set();
      
      parsedData.forEach(emp => {
        totalPerf += parseFloat(emp.Performance_Rating || 0);
        if (emp.Employee_Resignation_Status === 'Yes') resignedCount++;
        if (emp.Department) departments.add(emp.Department);
      });
      
      const avgPerf = (totalPerf / totalRecords).toFixed(1);
      const resRate = Math.round((resignedCount / totalRecords) * 100);
      
      document.getElementById('dash-total-emp').textContent = totalRecords.toLocaleString();
      document.getElementById('dash-total-dept').textContent = `Across ${departments.size} departments`;
      document.getElementById('dash-avg-perf').textContent = avgPerf;
      document.getElementById('dash-resignation').textContent = `${resRate}%`;
      
      // Extract a random representative sample of 20 records to prevent API quota limits
      if (parsedData.length > 20) {
        // Shuffle array using Fisher-Yates
        for (let i = parsedData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [parsedData[i], parsedData[j]] = [parsedData[j], parsedData[i]];
        }
        parsedData = parsedData.slice(0, 20);
      }
      
      EMPLOYEE_DATA = parsedData;
      document.getElementById('dataset-stats').textContent = `${totalRecords} uploaded (${parsedData.length} sampled)`;
      document.getElementById('chat-dataset-stats').textContent = `${totalRecords} uploaded (${parsedData.length} sampled)`;
      document.getElementById('chat-welcome-msg').textContent = `Hello! I'm your GenAI HR Analyst powered by Gemini. You uploaded ${totalRecords} records, and I have extracted a highly representative random sample of ${parsedData.length} employees to analyze so that we stay within your free tier speed limits.`;
      
      alert(`Successfully loaded ${totalRecords} records! A representative sample of ${parsedData.length} records has been randomly selected to ensure lightning-fast analysis without hitting Google's rate limits.`);
    } else {
      alert("Error: Could not parse CSV or the file is empty.");
    }
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    let inQuotes = false;
    let currentVal = '';
    let values = [];
    
    for (let j = 0; j < row.length; j++) {
      const char = row[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(currentVal.trim().replace(/^"|"$/g, ''));
        currentVal = '';
      } else {
        currentVal += char;
      }
    }
    values.push(currentVal.trim().replace(/^"|"$/g, ''));

    if (values.length === headers.length) {
      let obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }
      result.push(obj);
    }
  }
  return result;
}

// ============================
// NAVIGATION
// ============================
const pageTitles = {
  dashboard: 'Dashboard',
  chat: 'AI Chat Analyst',
  performance: 'Section 1: Performance & Skill Analytics',
  training: 'Section 2: Training & Mentorship',
  softskills: 'Section 3: Behavioral Intelligence',
  projects: 'Section 4: Project Analysis',
  attrition: 'Section 5: Attrition & Retention',
  compensation: 'Section 6: Compensation',
  recruitment: 'Section 7: Recruitment'
};

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('topbar-title').textContent = pageTitles[id] || id;
  const navItem = Array.from(document.querySelectorAll('.nav-item')).find(n => n.getAttribute('onclick') && n.getAttribute('onclick').includes("'"+id+"'"));
  if (navItem) navItem.classList.add('active');
}

// ============================
// RUN QUERY
// ============================
async function runQuery(btn, queryId) {
  const respEl = document.getElementById('resp-' + queryId);
  btn.disabled = true;
  btn.innerHTML = '<div class="loading-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
  respEl.classList.add('show');
  respEl.innerHTML = 'Analyzing with Gemini AI...';

  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    respEl.innerHTML = 'Error: Please add your Gemini API Key at the top of the script code.';
    btn.disabled = false;
    btn.innerHTML = '▶ Run Analysis';
    return;
  }

  let prompt = PROMPTS[queryId];
  if (!prompt) {
    respEl.innerHTML = 'Error: Query not found.';
    btn.disabled = false;
    btn.innerHTML = '▶ Run Analysis';
    return;
  }
  
  // Dynamically inject the live dataset, replacing the initial hardcoded JSON array
  prompt = prompt.replace(/\[[\s\S]*\]/, JSON.stringify(EMPLOYEE_DATA, null, 1));

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      // Basic markdown to HTML formatting for response
      let text = data.candidates[0].content.parts[0].text;
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      respEl.innerHTML = text;
    } else if (data.error && data.error.code === 429) {
      respEl.innerHTML = '<strong style="color:#ef4444">⏳ Please wait 1 minute.</strong> You are clicking a bit too fast and hitting Google Gemini\'s free tier speed limit. Please pause for 60 seconds before running the next analysis.';
    } else {
      respEl.innerHTML = 'Error: ' + JSON.stringify(data);
    }
  } catch (err) {
    respEl.innerHTML = 'Error calling AI: ' + err.message;
  }

  btn.disabled = false;
  btn.innerHTML = '▶ Run Again';
}

// ============================
// CHAT
// ============================
let chatHistory = [];

function fillChat(text) {
  document.getElementById('chat-input').value = text;
  showPage('chat');
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  const sendBtn = document.getElementById('send-btn');
  sendBtn.disabled = true;

  // Add user message
  addMessage('user', msg);
  
  // Format for Gemini
  chatHistory.push({ role: 'user', parts: [{ text: msg }] });

  // Add thinking indicator
  const thinkId = 'think-' + Date.now();
  addMessage('ai', '<div class="loading-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>', thinkId);

  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    const thinkEl = document.getElementById(thinkId);
    if (thinkEl) {
      const bubble = thinkEl.querySelector('.msg-bubble');
      if (bubble) bubble.innerHTML = '<strong>Error:</strong> Please add your Gemini API Key at the top of the script code to use the AI Chat.';
      thinkEl.id = '';
    }
    sendBtn.disabled = false;
    scrollChat();
    return;
  }

  const systemPrompt = `You are an expert HR Data Analyst with access to an employee dataset. You are provided with a highly representative random sample of ${EMPLOYEE_DATA.length} employees from the user's full dataset:

DATASET DATA:
${JSON.stringify(EMPLOYEE_DATA, null, 1)}

DATASET CONTEXT:
- Sample size: ${EMPLOYEE_DATA.length} employees (sampled randomly from a much larger dataset)
- Departments: IT, HR, Finance, Marketing, Sales
- Answer the user's question by analyzing the data with specific numbers, employee IDs where relevant, and actionable HR insights. Please make your insights generalized so they apply to the entire company. Be concise but data-driven.`;

  try {
    const messages = chatHistory.slice(-8); // Keep last 8 for context window
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: messages
      })
    });

    const data = await response.json();
    let reply = 'Sorry, I encountered an error.';
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      reply = data.candidates[0].content.parts[0].text;
    } else if (data.error && data.error.code === 429) {
      reply = '⏳ **Please wait 1 minute.** You are sending messages a bit too fast and hitting Google Gemini\'s free tier speed limit. Please pause for 60 seconds before sending your next message!';
    } else {
      reply = 'Error: ' + JSON.stringify(data);
    }

    // Replace thinking indicator
    const thinkEl = document.getElementById(thinkId);
    if (thinkEl) {
      const bubble = thinkEl.querySelector('.msg-bubble');
      if (bubble) bubble.innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      if (thinkEl) thinkEl.id = '';
    }

    chatHistory.push({ role: 'model', parts: [{ text: reply }] });
  } catch (err) {
    const thinkEl = document.getElementById(thinkId);
    if (thinkEl) {
      const bubble = thinkEl.querySelector('.msg-bubble');
      if (bubble) bubble.textContent = 'Error: ' + err.message;
    }
  }

  sendBtn.disabled = false;
  scrollChat();
}

function addMessage(type, text, id) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg' + (type === 'user' ? ' user' : '');
  if (id) div.id = id;
  div.innerHTML = `
    <div class="msg-avatar">${type === 'user' ? '👤' : '🤖'}</div>
    <div class="msg-bubble">${text}</div>
  `;
  container.appendChild(div);
  scrollChat();
}

function scrollChat() {
  const c = document.getElementById('chat-messages');
  c.scrollTop = c.scrollHeight;
}