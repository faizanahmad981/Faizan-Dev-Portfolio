// aiChatData.ts

// 1️⃣ Intent types
type Intent =
  | "greeting"
  | "about"
  | "projects"
  | "skills"
  | "services"
  | "experience"
  | "education"
  | "contact"
  | "unknown";

// 2️⃣ Text normalization
const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(
      /\b(is|are|the|of|have|has|in|this|that|about|me|tell|please|can|you|your)\b/g,
      ""
    )
    .replace(/\s+/g, " ")
    .trim();

// 3️⃣ Keywords for each intent
const intentKeywords: Record<Intent, string[]> = {
  greeting: ["hi", "hello", "hey", "assalam", "aoa"],

  about: [
    "faizan",
    "who",
    "yourself",
    "intro",
    "profile",
    "truth keep",
    "truthkeep",
  ],

  projects: [
    "project",
    "projects",
    "work",
    "portfolio",
    "apps",
    "applications",
    "websites",
    "built",
    "created",
  ],

  skills: [
    "skill",
    "skills",
    "tech",
    "technology",
    "stack",
    "tools",
    "framework",
    "expertise",
  ],

  services: [
    "service",
    "services",
    "offer",
    "freelance",
    "hire",
    "provide",
    "help",
  ],

  experience: [
    "experience",
    "background",
    "career",
    "worked",
    "working",
    "industry",
    "field",
  ],

  education: [
    "education",
    "study",
    "degree",
    "university",
    "college",
    "learning",
  ],

  contact: [
    "contact",
    "email",
    "reach",
    "linkedin",
    "phone",
    "whatsapp",
    "message",
  ],

  unknown: [],
};

// 4️⃣ Responses
const responses: Record<Intent, string> = {
  greeting:
    "👋 Hi! I’m Faizan’s AI Portfolio Assistant.\n\n" +
    "You can ask me about:\n" +
    "• About Faizan\n" +
    "• Projects\n" +
    "• Skills\n" +
    "• Services\n" +
    "• Experience\n" +
    "• Education\n" +
    "• Contact details\n\n" +
    "I’ll respond like a real portfolio assistant 🙂",

  about:
    "Faizan Ahmed Tanoli is a Frontend & AI-focused Web Developer who builds modern, scalable, and pixel-perfect web applications using Next.js, React, TypeScript, and Tailwind CSS.",

 projects:
    "🚀 Faizan has worked on multiple real-world projects including:\n" +
    "• TruthKeep AI – AI-based platform\n" +
    "• Seller Margin CRM Website\n" +
    "• Rabbit Hole – Admin Panel Dashboard\n" +
    "• Fitness Gym Website\n" +
    "• Lumina Xpert\n" +
    "• Joint Office Detector\n" +
    "• Image Classification using CNN\n" +
    "• EFAMILY Platform\n" +
    "• Real Estate Website\n" +
    "• Nexcent Onepage Website\n" +
    "• Foodi Onepage Website\n\n" +
    "Ask me about any specific project to get detailed information.",

  skills:
    "🛠 Faizan’s skills include:\n" +
    "• Next.js & React\n" +
    "• TypeScript & JavaScript\n" +
    "• Tailwind CSS & Bootstrap\n" +
    "• AI Chatbot Integration\n" +
    "• Redux & Firebase\n" +
    "• Clean & Modern UI/UX Development",

  services:
    "💼 Services offered by Faizan:\n" +
    "• Frontend Development\n" +
    "• AI Chatbot Integration\n" +
    "• Portfolio & SaaS Websites\n" +
    "• UI/UX Implementation\n" +
    "• Freelance & Remote Work",

  experience:
    "📌 Faizan has strong hands-on experience in frontend and AI-integrated web development.\n\n" +
    "He has worked on real-world projects using Next.js, React, TypeScript, and Tailwind CSS, " +
    "building scalable, production-ready applications with clean UI and smart AI features.",

  education:
    "🎓 Faizan Ahmed Tanoli completed a Bachelor’s in Computer Science from [University Name], " +
    "where he gained solid foundations in software development, algorithms, and modern web technologies.\n\n" +
    "He also continuously enhances his skills through hands-on projects, online courses, and AI/Frontend development challenges.",

  contact:
    "📧 You can contact Faizan via:\n" +
    "• Email: khawajfaizan258@gmail.com\n" +
    "• LinkedIn: https://www.linkedin.com/in/faizan-ahmed258/\n" +
    "• Phone / WhatsApp: +92 3337 9241973\n\n" +
    "I usually respond within 24 hours 🙂",

  unknown:
    "🤔 I didn’t fully understand that.\n\nTry asking about:\n• About Faizan\n• Projects\n• Skills\n• Experience\n• Services\n• Education\n• Contact details",
};

// 5️⃣ Main AI function
const specificProjectResponses: Record<string, string> = {
  truthkeep: `TruthKeep AI is an AI-powered fact verification platform developed by Faizan Ahmed.

• Uses Large Language Models (LLMs) to analyze and verify information
• Focuses on misinformation detection and trust-based insights
• Demonstrates API integration, AI logic, and clean UI design`,

  medimind: `MediMind-AI is a medical diagnosis and precautions web application.

• Built using Python, Streamlit, and LLM APIs
• Analyzes medical inputs and suggests follow-up tests
• Focuses on AI-assisted healthcare decision support`,

  "joint office": `Joint Office Detector is a coworking space discovery platform.

• Allows users to find workspaces based on pricing and availability
• Includes support ticketing, community feed, and event modules
• Designed with scalable frontend architecture and user roles`,

  seller: `Seller Margin CRM Website is designed for business management.

• Helps track sales, margins, and customer data
• Focuses on dashboard-based UI and usability
• Demonstrates structured frontend development`,

  rabbit: `Rabbit Hole is an Admin Panel Dashboard project.

• Built with focus on data visualization and admin workflows
• Includes role-based UI and clean layout structure
• Demonstrates dashboard and enterprise UI experience`,

  efamily: `EFAMILY Platform is a web-based solution focused on user management and interaction.

• Designed for structured information handling
• Emphasizes usability and modular frontend design
• Shows experience with scalable UI components`,

  cnn: `Image Classification using CNN is an AI/ML project.

• Uses Convolutional Neural Networks for image recognition
• Demonstrates understanding of machine learning fundamentals
• Shows practical implementation of AI concepts`,

  lumina: `Lumina Xpert is a professional business website.

• Focuses on clean UI and modern web layout
• Built using HTML, CSS, JavaScript, and Bootstrap
• Demonstrates strong frontend fundamentals`,

  "real estate": `Real Estate Website project focuses on property listing platforms.

• Designed to showcase properties and services
• Clean layout and responsive design
• Demonstrates business-oriented UI development`,

  fitness: `Fitness Gym Website is a marketing-focused web project.

• Showcases gym services, plans, and trainers
• Responsive and visually engaging UI
• Built using modern frontend practices`,

  nexcent: `Nexcent Onepage Website is a clean and minimal business landing page.

• Focus on layout, spacing, and responsiveness
• Demonstrates attention to UI detail
• Built for modern web experience`,

  foodi: `Foodi Onepage Website is a restaurant landing page.

• Showcases menu, brand identity, and responsive layout
• Clean visuals and smooth UX
• Highlights frontend styling and user interaction`,
};

// 6️⃣ Main AI function
export function getLocalAIResponse(userInput: string): string {
  const input = normalize(userInput);

  // Greeting check
  if (intentKeywords.greeting.some(word => input.includes(word))) {
    return responses.greeting;
  }

  // Specific project check first
  for (const key in specificProjectResponses) {
    if (input.includes(key)) {
      return specificProjectResponses[key];
    }
  }

  // Determine intent
  let bestIntent: Intent = "unknown";
  let highestScore = 0;

  for (const intent in intentKeywords) {
    const keywords = intentKeywords[intent as Intent];
    let score = 0;

    keywords.forEach(keyword => {
      if (input.includes(keyword)) score += keyword.length > 4 ? 3 : 2;
    });

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intent as Intent;
    }
  }

  if (highestScore < 2) return responses.unknown;

  return responses[bestIntent];
}
