export function getLocalAIResponse(question: string): string {
  const q = question.toLowerCase();

  /* ===== INTRO / ABOUT ===== */
  if (
    q.includes("who are you") ||
    q.includes("introduce") ||
    q.includes("introduce yourself") ||
    q.includes("tell me about yourself") ||
    q.includes("who is faizan") ||
    q.includes("about faizan")||
      q.includes("about yourself")
  ) {
    return `
Hi 👋 I’m Faizan Ahmed, a Software Engineer with 1+ year of hands-on experience.

I specialize in building modern, responsive, and high-performance web applications.
My core stack includes React, Next.js, TypeScript, Tailwind CSS, and Bootstrap.

I focus on clean code, performance, and real-world business impact.
`;
  }

  /* ===== SKILLS ===== */
  if (q.includes("skills") || q.includes("tech stack") || q.includes("technologies")) {
    return `
Faizan’s core skills include:

• Frontend: React.js, Next.js, TypeScript, JavaScript
• State Management: Redux, Context API, TanStack Query
• Styling: Tailwind CSS, Bootstrap
• Forms & Validation: React Hook Form + Zod
• API Integration: Axios, Fetch
• Mobile: React Native, Native Base
• Tools: Git, GitHub, REST APIs

He has strong experience converting Figma designs into pixel-perfect UIs.
`;
  }

  /* ===== EDUCATION ===== */
  if (q.includes("education") || q.includes("study") || q.includes("degree")) {
    return `
Faizan has a solid academic background in computer-related studies
and continuously improves his skills through hands-on projects
and modern frontend frameworks.
`;
  }

  /* ===== SERVICES ===== */
  if (q.includes("services") || q.includes("offer") || q.includes("what do you do")) {
    return `
Faizan offers:

• Frontend Web Development (React / Next.js)
• Figma to Pixel-Perfect UI Conversion
• Dashboard & Admin Panel Development
• API Integration & State Management
• Performance Optimization
• Responsive Website Development
• Bug Fixing & UI Improvements
`;
  }

  /* ===== PROJECT LIST ===== */
  if (q.includes("project") || q.includes("work")) {
    return `
Faizan has worked on multiple real-world projects:

• TruthKeep AI
• Seller Margin CRM
• Rabbit Hole Admin Panel
• Fitness Gym Website
• Lumina Xpert
• Joint Office Detector
• Image Classification using CNN
• EFAMILY Platform
• Real Estate Website
• Nexcent Onepage Website
• Foodi Onepage Website

Ask about any specific project to get details.
`;
  }

  /* ===== PROJECT DETAILS ===== */
  if (q.includes("truthkeep")) {
    return `
TruthKeep AI is an AI-powered fact verification platform.

• Uses Large Language Models (LLMs)
• Detects misinformation and trust signals
• Demonstrates AI logic + API integration
`;
  }

  if (q.includes("medimind")) {
    return `
MediMind-AI is a medical diagnosis and precautions system.

• Built using Python & Streamlit
• Uses LLM APIs for suggestions
• AI-assisted healthcare decision support
`;
  }

  if (q.includes("joint office")) {
    return `
Joint Office Detector is a coworking space discovery platform.

• Workspace search by pricing & availability
• Support ticketing & community feed
• Scalable frontend architecture
`;
  }

  if (q.includes("seller") || q.includes("crm")) {
    return `
Seller Margin CRM helps businesses manage sales and margins.

• Dashboard-based UI
• Sales & customer tracking
• Clean structured frontend
`;
  }

  if (q.includes("rabbit")) {
    return `
Rabbit Hole is an Admin Panel Dashboard.

• Data visualization focused
• Role-based UI
• Enterprise-level layout design
`;
  }

  if (q.includes("efamily")) {
    return `
EFAMILY Platform is a user-centric web solution.

• Modular UI components
• Structured data handling
• Scalable frontend design
`;
  }

  if (q.includes("cnn") || q.includes("image classification")) {
    return `
Image Classification using CNN is an AI/ML project.

• Convolutional Neural Networks
• Image recognition system
• Practical ML implementation
`;
  }

  if (q.includes("lumina")) {
    return `
Lumina Xpert is a professional business website.

• Modern UI & layout
• Built with HTML, CSS, JS & Bootstrap
• Strong frontend fundamentals
`;
  }

  if (q.includes("real estate")) {
    return `
Real Estate Website project:

• Property listing platform
• Clean & responsive UI
• Business-oriented design
`;
  }

  if (q.includes("fitness") || q.includes("gym")) {
    return `
Fitness Gym Website:

• Marketing-focused design
• Gym plans & services showcase
• Responsive & engaging UI
`;
  }

  if (q.includes("nexcent")) {
    return `
Nexcent is a one-page business website.

• Minimal landing page
• Pixel-perfect spacing
• Clean responsive layout
`;
  }

  if (q.includes("foodi")) {
    return `
Foodi is a restaurant one-page website.

• Menu & brand showcase
• Clean visuals
• UX-focused layout
`;
  }

  /* ===== EXPERIENCE ===== */
  if (q.includes("experience") || q.includes("years")) {
    return `
Faizan has 1+ year of hands-on experience
working on dashboards, admin panels,
business websites, and AI-integrated apps.
`;
  }

  /* ===== CONTACT ===== */
  if (q.includes("contact") || q.includes("hire") || q.includes("email")) {
    return `
📧 Email: khawajfaizan258@gmail.com
🔗 LinkedIn: linkedin.com/in/faizan-ahmed258
📞 Phone: +92-337-9241973

Available for full-time, remote & freelance roles.
`;
  }

  /* ===== DEFAULT ===== */
  return `
You can ask about:
• About Faizan
• Projects
• Skills
• Services
• Experience
• Education
• Contact details

I’ll respond like a real portfolio assistant 🙂
`;
}
