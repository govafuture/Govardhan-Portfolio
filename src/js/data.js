// // ─── PERSONAL INFO ───────────────────────────────────────────────
// const personal = {
//   name: "Your Name",
//   tagline: "CS Student | ML Enthusiast | Builder",
//   email: "you@email.com",
//   github: "https://github.com/yourhandle",
//   linkedin: "https://linkedin.com/in/yourhandle",
//   location: "City, Country",
//   resume: "assets/docs/resume.pdf",
//   avatar: "assets/images/profile/profile.jpg",
// };

// // ─── UNIVERSITY ──────────────────────────────────────────────────
// const university = {
//   name: "Jain University, Bangalore",
//   degree: "B.Tech in Information Science Engineering",
//   year: "2021 – 2025",
//   gpa: "9.4 / 10",
//   rank: "3rd Rank in Department",
//   logo: "assets/images/university/logos/uni-logo.png",
//   graduationPhoto: "assets/images/profile/IMG_2513.jpeg",
//   skills: [
//     "Data Structures & Algorithms", "OOP", "Operating Systems",
//     "Computer Networks", "DBMS", "Java", "Python", "SQL",
//     "HTML/CSS", "JavaScript", "Machine Learning", "Cloud Computing",
//     "Git", "Linux",
//   ],
//   projects: [
//     {
//       name: "Social Media Login & Registration System",
//       description: "Secure authentication system using Django with session-based login management and MySQL database integration.",
//       tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JS"],
//       github: "#", // ← replace with your GitHub link
//     },
//     {
//       name: "Automated Attendance Tracker",
//       description: "A face recognition-based attendance system using OpenCV and Python that automated the attendance process for university lectures with 95% accuracy.",
//       tech: ["Python", "OpenCV", "ML", "Flask"],
//       github: "#", // ← replace with your GitHub link
//     },
//     {
//       name: "Student Performance Analytics",
//       description: "A machine learning pipeline that predicts student performance based on historical data, helping faculty identify at-risk students early in the semester.",
//       tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
//       github: "#", // ← replace with your GitHub link
//     },
//     {
//       name: "Smart Campus Navigation System",
//       description: "An IoT-based indoor navigation system using BLE beacons and a mobile app to help students navigate the campus efficiently.",
//       tech: ["React Native", "Firebase", "IoT", "BLE"],
//       github: "#", // ← replace with your GitHub link
//     },
//   ],
//   achievements: [
//     "CGPA 9.4 / 10 - B.Tech Information Science Engineering",
//     "3rd Rank in Department - Jain University",
//     "Infosphere Club Coordinator - Led UX Blitz, Power BI & Figma workshops",
//   ],
//   club: {
//     name: "Infosphere Club - Coordinator",
//     image: "assets/images/university/events/pic1.jpg",
//     description: "As Infosphere Club Coordinator, I spearheaded the coordination of impactful technical events during the university fest, including \"UX BLITZ\" - a highly successful UI/UX design competition that received widespread appreciation. I organised two sessions for our WhatsApp community: a brainstorming session and a workshop on UI/UX by an industry expert from Blue Learn.",
//     highlights: [
//       "Organized 5+ technical workshops on Java, Python, and Web Development",
//       "Led a team of 15+ members in planning and executing campus-wide hackathons",
//       "Mentored junior students in competitive programming and open-source contributions",
//       "Coordinated with industry professionals for guest lectures and tech talks",
//     ],
//   },
//   certificates: [
//     { name: "Frontend Development - VthreeSoft Technologies", image: "assets/certificates/university/frontend.JPG" },
//     { name: "Python & Django - VthreeSoft Technologies", image: "assets/certificates/university/py_django.JPG" },
//     { name: "Data Science & Machine Learning - Capable", image: "assets/certificates/university/capabl.jpg" },
//     { name: "Machine Learning & Data Science - YBI Foundation", image: "assets/certificates/university/ybi.jpg" },
//   ],
// };

// // ─── WORK EXPERIENCE ─────────────────────────────────────────────
// const work = {
//   experiences: [
//     {
//       company: "Oracle",
//       role: "Associate Consultant",
//       duration: "Aug 2025 – Apr 2026",
//       logo: "https://cdn.simpleicons.org/oracle/ff0000",
//       image: "assets/images/work/company-logos/IMG_1028.jpeg",
//       description: "As an Associate Consultant, I split my work between <span class=\"hi\">backend development</span> and <span class=\"hi\">automation-driven deployment</span>, while partnering with infrastructure teams to maintain environment availability and application uptime.",
//       points: [
//         "Built Java/Spring Boot microservices with Kafka-based integration for resilient backend workflows.",
//         "Designed, developed, tested and deployed services to dev Linux Kubernetes clusters, with TA-led promotion to higher environments.",
//         "Owned deployment automation and troubleshooting for downtime using Helm, Docker, and Python.",
//         "Partnered with infrastructure teams on networking, monitoring, and environment stability.",
//       ],
//       tech: ["Java", "Spring Boot", "Kafka", "Kubernetes", "Docker", "Helm", "Python", "OCI", "Linux", "Networking", "Automation", "Prometheus", "CI/CD"],
//     },
//     {
//       company: "Oracle",
//       role: "Project Intern",
//       duration: "Jan 2025 – Jul 2025",
//       logo: "https://cdn.simpleicons.org/oracle/ff0000",
//       image: "assets/images/work/company-logos/IMG_3302.jpeg",
//       description: "Built internal automation and deployment solutions while gaining hands-on experience with Linux, Kubernetes, and cloud-native architecture.",
//       points: [
//         "Built Oracle APEX applications to automate workflows and improve operational efficiency.",
//         "Designed MySQL schemas and backend data flows for email and CRM applications.",
//         "Deployed enterprise applications on Kubernetes as part of cloud-native proof of concepts.",
//         "Grew Linux and automation skills through Kubernetes operations and internal tooling.",
//       ],
//       tech: ["Oracle APEX", "MySQL", "Kubernetes", "Linux", "CI/CD", "Python"],
//     },
//   ],
//   skills: [
//     "Java",
//     "Spring Boot",
//     "Apache Kafka",
//     "Kubernetes",
//     "Docker",
//     "Helm",
//     "Python",
//     "OCI",
//     "Linux",
//     "Networking",
//     "Automation",
//     "Prometheus",
//     "CI/CD",
//     "Oracle APEX",
//     "Oracle Database",
//   ],
//   projects: [
//     {
//       name: "Kafka Event Processing Microservice",
//       description: "Built a distributed service using Apache Kafka to route notifications across brand-specific topics with ordering guarantees.",
//       tech: ["Java", "Spring Boot", "Kafka", "Kubernetes"],
//       github: "https://github.com/GovardhanGova7277/kafka-brandsplitter",
      
//     },
//     {
//       name: "Social Media Login System",
//       description: "Built a secure Django authentication system with session management and MySQL database integration.",
//       tech: ["Python", "Django", "MySQL", "HTML/CSS"],
//     },
//     {
//       name: "API Token Management Service",
//       description: "Implemented token caching and expiration logic with Spring Cache to reduce repeated authentication requests.",
//       tech: ["Java", "Spring Boot", "Spring Cache"],
//     }
//   ],
//   certs: [
//     { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", image: "assets/certificates/work/OCI Foundation_page-0001.jpg" },
//     { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations", image: "assets/certificates/work/AI CERT (1)_page-0001.jpg" },
//     { title: "Oracle Fusion AI Agent Studio 2025 Certified Foundations Associate", image: "assets/certificates/work/AI_AGENT_STUDIO_CERTIFICATEeCertificate_page-0001.jpg" },
//     { title: "Docker and Kubernetes Certification", image: "assets/certificates/work/k8s.jpg" },
//     { title: "Apache Kafka Fundamentals", image: "assets/certificates/work/kafka.png" },
//     { title: "Unix and Linux Certification", image: "assets/certificates/work/linux.jpg" },
//     { title: "Oracle Cloud Technology Certification", image: "assets/certificates/work/ociworkshop.jpg" },
//   ],
//   // certs: [
//   //   {
//   //     name: "Oracle Cloud Infrastructure Foundations",
//   //     image: "assets/certificates/work/OCI Foundation_page-0001.jpg",
//   //     type: "Oracle PDF Certificate",
//   //     summary: "Hands-on OCI foundation training covering compute, networking, and security.",
//   //     file: "assets/certificates/work/OCI Foundation.pdf",
//   //   },
//   //   {
//   //     name: "Oracle AI Automation Certification",
//   //     image: "assets/certificates/work/certificate (1)_page-0001.jpg",
//   //     type: "Oracle PDF Certificate",
//   //     summary: "Applied AI automation concepts to cloud-native workflows and monitoring.",
//   //     file: "assets/certificates/work/certificate (1).pdf",
//   //   },
//   //   {
//   //     name: "Oracle Enterprise Applications Training",
//   //     image: "assets/certificates/work/certificate (2)_page-0001.jpg",
//   //     type: "Oracle PDF Certificate",
//   //     summary: "Training on enterprise app deployment, integration, and operational support.",
//   //     file: "assets/certificates/work/certificate (2).pdf",
//   //   },
//   //   {
//   //     name: "Oracle AI Agent Studio Certification",
//   //     image: "assets/certificates/work/AI_AGENT_STUDIO_CERTIFICATEeCertificate_page-0001.jpg",
//   //     type: "Oracle PDF Certificate",
//   //     summary: "Certification in Oracle AI Agent Studio for building intelligent agents.",
//   //     file: "assets/certificates/work/AI_AGENT_STUDIO_CERTIFICATEeCertificate.pdf",
//   //   },
//   //   {
//   //     name: "Oracle Cloud Infrastructure 2025 AI Certified Foundations Associate",
//   //     image: "assets/certificates/work/OCI25AICFA.jpeg",
//   //     type: "Oracle Certificate",
//   //     summary: "2025 AI Certified Foundations Associate certification for OCI.",
//   //     file: "assets/certificates/work/OCI25AICFA.jpeg",
//   //   },
//   // ],
// };

// // ─── PERSONAL LEARNING ───────────────────────────────────────────
// const learning = {
//   currentlyLearning: [
//     "Python",
//     "NumPy",
//     "Pandas",
//     "Matplotlib",
//     "Seaborn",
//     "Math",
//     "Calculus",
//     "Linear Algebra",
//     "Probability",
//     "Statistics",
//     "EDA",
//     "Supervised Learning",
//     "Unsupervised Learning",
//     "Deep Learning",
//     "Perceptron",
//     "Multi-Layer Perceptrons",
//     "PyTorch",
//     "Gradient Descent"
//   ],
//   skills: ["PyTorch", "Scikit-learn", "HuggingFace", "FastAPI"],
//   projects: [
//     {
//       name: "Traditional RAG System",
//       description: "A retrieval-augmented generation system built with an AI-first architecture and linked GitHub integration.",
//       tech: ["Python", "RAG", "AI", "Vector Search"],
//       github: "https://github.com/GovardhanGova7277/TRADITIONAL_RAG_SYSTEM",
//       demo: "assets/images/personal/videos/RAG_PROJECT.mp4",
//     },
//     {
//       name: "InvestPro AI Demo",
//       description: "A current AI investment video project with a live demo showing how models analyze investment decisions.",
//       tech: ["Python", "AI Agents", "Finance"],
//       github: "#",
//       demo: "assets/images/personal/videos/investment_video_demo.mp4",
//     },
//   ],
//   certificates: [
//     {
//       name: "AI / ML Learning Program",
//       image: "assets/certificates/personal/IMG_2513.jpeg",
//     },
//   ],
//   youtube: {
//     channelUrl: "https://youtube.com/@gova",
//     videos: [
//       {
//         title: "AI generated video short 1",
//         thumbnail: "assets/images/personal/images/video1_image.jpg",
//         url: "https://youtube.com/shorts/8IGC74f4WoY?si=hbN0z6RelD1wJ9dA",
//       },
//       {
//         title: "AI generated video short 2",
//         thumbnail: "assets/images/personal/images/image.png",
//         url: "https://youtube.com/shorts/9KHiJdLnpnw?si=wQJsyjSuHSV0q-sG",
//       },
//     ],
//   },
//   blogs: [
//     {
//       title: "Nikhil Kamath × Ram Gopal Varma: Two Minds, One Philosophy That’s Changed my mindset or How India Thinks",
//       summary: "Notes on how two very different voices shaped my thinking about ambition, culture, and the Indian mind.",
//       url: "https://substack.com/@gova/note/c-182649675?r=2j47z2&utm_source=notes-share-action&utm_medium=web",
//       date: "Blog 1",
//       image: "assets/images/personal/images/Blog1.webp",
//     },
//     {
//       title: "The 3 Friends Coffee Night",
//       summary: "A candid reflection on friendship, ideas, and the work behind late-night conversations.",
//       url: "https://substack.com/@gova/note/p-131248481?utm_source=notes-share-action&r=2j47z2",
//       date: "Blog 2",
//       image: "assets/images/personal/images/blog2.webp",
//     },
//     {
//       title: "Blog on the movie Pachuvum Athbutha Vilakkum.",
//       summary: "My take on storytelling, character choices, and the cinematic impact of Pachuvum Athbutha Vilakkum.",
//       url: "https://substack.com/@gova/note/p-130267068?r=2j47z2&utm_source=notes-share-action&utm_medium=web",
//       date: "Blog 3",
//       image: "assets/images/personal/images/blog3.webp",
//     },
//   ],
// };


// ─── WORK EXPERIENCE ─────────────────────────────────────────────
const work = {
  experiences: [
    {
      company: "Oracle",
      role: "Associate Consultant",
      duration: "Aug 2025 – Present",
      logo: "https://cdn.simpleicons.org/oracle/ff0000",
      image: "assets/images/work/company-logos/IMG_1028.jpeg",
      description: "Worked as a backend software engineer building scalable microservices with Java Spring Boot and Apache Kafka for real-time data processing. Gained strong hands-on experience in <span class=\"hi\">Oracle Cloud environments</span>, from deployment and configuration to monitoring and operations.",
      points: [
        "Built and optimized event-driven microservices using Java Spring Boot and Apache Kafka, handling high-throughput data streams across distributed architectures.",
        "Designed systems with efficient message routing, partitioning, and ordering guarantees to maintain data integrity at scale.",
        "Improved backend performance through API optimization and caching strategies, while ensuring reliability by monitoring and debugging distributed systems.",
        "Worked in Oracle Cloud environments managing cloud-native deployments on Kubernetes, ensuring environment availability and application uptime.",
        "Partnered with infrastructure teams on networking, monitoring, and maintaining cloud-native deployments for production reliability.",
      ],
      tech: ["Java", "Spring Boot", "Apache Kafka", "Kubernetes", "Docker", "Helm", "Python", "OCI", "Linux", "Networking", "Automation", "Prometheus", "CI/CD"],
    },
    {
      company: "Oracle",
      role: "Project Intern",
      duration: "Jan 2025 – Jul 2025",
      logo: "https://cdn.simpleicons.org/oracle/ff0000",
      image: "assets/images/work/company-logos/IMG_3302.jpeg",
      description: "Built a strong foundation in <span class=\"hi\">cloud-native technologies</span> by setting up and managing multi-node Kubernetes clusters across Linux environments. Contributed to workflow-driven development and explored AI-driven solutions.",
      points: [
        "Set up and managed multi-node Kubernetes clusters across Linux environments, building a solid foundation in cloud-native infrastructure.",
        "Contributed to workflow-driven features using Oracle APEX, including bulk operations, approvals, and notification systems that improved process efficiency.",
        "Assisted in deploying enterprise-grade microservices (Siebel CRM) on Kubernetes and worked within Oracle Cloud environments.",
        "Explored AI-driven solutions by developing a RAG-based prototype during an internal hackathon, deepening my understanding of real-world system architecture and deployment.",
        "Gained practical experience in Oracle Cloud environments, deployment automation, and workflow automation practices.",
      ],
      tech: ["Oracle APEX", "MySQL", "Kubernetes", "Linux", "OCI", "CI/CD", "Python", "Docker"],
    },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Kubernetes",
    "Docker",
    "Helm",
    "Python",
    "OCI",
    "Linux",
    "Networking",
    "Automation",
    "Prometheus",
    "CI/CD",
    "Oracle APEX",
    "Oracle Database",
  ],
  certs: [
    { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", image: "assets/certificates/work/OCI Foundation_page-0001.jpg" },
    { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations", image: "assets/certificates/work/AI CERT (1)_page-0001.jpg" },
    { title: "Oracle Fusion AI Agent Studio 2025 Certified Foundations Associate", image: "assets/certificates/work/AI_AGENT_STUDIO_CERTIFICATEeCertificate_page-0001.jpg" },
    { title: "Docker and Kubernetes Certification", image: "assets/certificates/work/k8s.jpg" },
    { title: "Apache Kafka Fundamentals", image: "assets/certificates/work/kafka.png" },
    { title: "Unix and Linux Certification", image: "assets/certificates/work/linux.jpg" },
    { title: "Oracle Cloud Technology Certification", image: "assets/certificates/work/ociworkshop.jpg" },
  ],
};

// ─── UNIVERSITY ──────────────────────────────────────────────────
const university = {
  name: "Jain University, Bangalore",
  degree: "B.Tech in Information Science Engineering",
  year: "2021 – 2025",
  gpa: "9.4 / 10",
  rank: "3rd Rank in Department",
  logo: "assets/images/university/logos/uni-logo.png",
  graduationPhoto: "assets/images/profile/IMG_2513.jpeg",
  skills: [
    "Data Structures & Algorithms", "OOP", "Operating Systems",
    "Computer Networks", "DBMS", "Java", "Python", "SQL",
    "HTML/CSS", "JavaScript", "Machine Learning", "Cloud Computing",
    "Git", "Linux",
  ],
  projects: [
    {
      name: "Social Media Login & Registration System",
      description: "Engineered a secure registration/login system prioritizing user privacy and experience for a social media platform with Django. Demonstrated expertise inDjango web development principles, ensuring top-tier code quality and project efficiency, showcasing a commitmentto excellence. Employed Django's Object Relational Mapping principles and Template Language for scalable database interactions and dynamic page creation, optimizing performance",
      tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JS"],
      github: "#",
    },
    {
      name: "House Price Prediction using Machine Learning Models",
      description: " Built a regression model using 79+ features with extensive exploratory data analysis, preprocessing, and feature engineering. Trained and evaluated multiple models including Random Forest and XGBoost, achieving best performance with tuned XGBoost (RMSE ∼ 24K). Improved model performance through feature engineering and hyperparameter tuning, and analyzed feature importance for interpretability.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Machine Learning Models"],
      github: "#",
    },
    // {
    //   name: "Student Performance Analytics",
    //   description: "A machine learning pipeline predicting student performance from historical data, enabling faculty to identify at-risk students early in the semester.",
    //   tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    //   github: "#",
    // },
    {
      name: "Real-Time Comment Toxicity Detection System",
      description: "Developed a Django-based backend integrating an LSTM model for real-time toxicity classification across multiple categories.Built NLP pipelines for preprocessing, tokenization, and model inference to enable accurate multi-class predictions. Implemented an end-to-end prediction workflow using API-based integration from user input to classification output.",
      tech: ["Python", "Django", "TensorFlow", "Keras", "LSTM", "NLP"],
      github: "#",
    },
  ],
  achievements: [
    "CGPA 9.4 / 10 — B.Tech Information Science Engineering",
    "3rd Rank in Department — Jain University",
    "Infosphere Club Coordinator — Led UX Blitz, Power BI & Figma workshops",
  ],
  club: {
    name: "Infosphere Club — Coordinator",
    image: "assets/images/university/events/pic1.jpg",
    description: "As Infosphere Club Coordinator, I organized impactful technical events during the university fest — including \"UX BLITZ,\" a UI/UX design competition that earned wide appreciation across departments. I facilitated workshops on UI/UX and Power BI, and brought in an industry expert from Blue Learn for a hands-on session with our WhatsApp community.",
    highlights: [
      "Organized 5+ technical workshops on Java, Python, and Web Development",
      "Led a team of 15+ members in planning and executing campus-wide hackathons",
      "Mentored junior students in competitive programming and open-source contributions",
      "Coordinated with industry professionals for guest lectures and tech talks",
    ],
  },
  certificates: [
    { name: "Frontend Development - VthreeSoft Technologies", image: "assets/certificates/university/frontend.JPG" },
    { name: "Python & Django - VthreeSoft Technologies", image: "assets/certificates/university/py_django.JPG" },
    { name: "Data Science & Machine Learning - Capable", image: "assets/certificates/university/capabl.jpg" },
    { name: "Machine Learning & Data Science - YBI Foundation", image: "assets/certificates/university/ybi.jpg" },
  ],
};

// ─── PERSONAL LEARNING ───────────────────────────────────────────
const learning = {
  currentlyLearning: [
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Calculus",
    "Linear Algebra",
    "Probability",
    "Statistics",
    "EDA",
    "Supervised Learning",
    "Unsupervised Learning",
    "Deep Learning",
    "PyTorch",
    "Gradient Descent",
    "CNN",
    "Transfer Learning",
    "RAG",
  ],
  skills: ["PyTorch", "Scikit-learn", "HuggingFace", "FastAPI"],
  projects: [
    {
      name: "Traditional RAG System",
      description: "A retrieval-augmented generation system built with an AI-first architecture and linked GitHub integration.",
      tech: ["Python", "RAG", "AI", "Vector Search"],
      github: "https://github.com/GovardhanGova7277/TRADITIONAL_RAG_SYSTEM",
      demo: "assets/images/personal/videos/RAG_PROJECT.mp4",
    },
    {
      name: "InvestPro AI Demo",
      description: "A current AI investment video project with a live demo showing how models analyze investment decisions.",
      tech: ["Python", "AI Agents", "Finance"],
      github: "#",
      demo: "assets/images/personal/videos/investment_video_demo.mp4",
    },
  ],
  certificates: [
    {
      name: "AI / ML Learning Program",
      image: "assets/certificates/personal/IMG_2513.jpeg",
    },
  ],
  youtube: {
    channelUrl: "https://youtube.com/@gova",
    videos: [
      {
        title: "AI-Generated Video Short",
        thumbnail: "assets/images/personal/images/video1_image.jpg",
        url: "https://youtube.com/shorts/8IGC74f4WoY?si=hbN0z6RelD1wJ9dA",
      },
      {
        title: "AI-Generated Video Short 2",
        thumbnail: "assets/images/personal/images/image.png",
        url: "https://youtube.com/shorts/9KHiJdLnpnw?si=wQJsyjSuHSV0q-sG",
      },
    ],
  },
  blogs: [
    {
      title: "Nikhil Kamath × Ram Gopal Varma: Two Minds, One Philosophy That Changed My Mindset",
      summary: "How two very different voices reshaped my thinking about ambition, culture, and the way India approaches opportunity.",
      url: "https://substack.com/@gova/note/c-182649675?r=2j47z2&utm_source=notes-share-action&utm_medium=web",
      date: "Blog 1",
      image: "assets/images/personal/images/Blog1.webp",
    },
    {
      title: "The 3 Friends Coffee Night",
      summary: "A candid reflection on friendship, the ideas that surface over late-night conversations, and the quiet work that sustains them.",
      url: "https://substack.com/@gova/note/p-131248481?utm_source=notes-share-action&r=2j47z2",
      date: "Blog 2",
      image: "assets/images/personal/images/blog2.webp",
    },
    {
      title: "Pachuvum Athbutha Vilakkum — A Blog on the Film",
      summary: "My take on the storytelling, character choices, and cinematic impact of Pachuvum Athbutha Vilakkum.",
      url: "https://substack.com/@gova/note/p-130267068?r=2j47z2&utm_source=notes-share-action&utm_medium=web",
      date: "Blog 3",
      image: "assets/images/personal/images/blog3.webp",
    },
  ],
};