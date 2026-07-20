"use client";
import {
  GraduationCap, BookOpen, Users, BarChart3, Brain, Search,
  Bot, Database, FileText, MessageSquare, Clock, Shield,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "education",
  eyebrow: "Education & EdTech",
  title: "Intelligent Learning Systems That Scale.",
  description: "We engineer AI platforms that personalize learning experiences, automate administrative operations, provide instant knowledge access, and deliver actionable student analytics — helping institutions serve more learners with better outcomes.",
  heroImage: "/assets/images/education_ai.png",
  heroImage: "/assets/images/education_ai.png",

  challenges: [
    { title: "One-Size-Fits-All Learning", description: "Standardized curricula cannot adapt to individual learning speeds, styles, and knowledge gaps across diverse student populations." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Administrative Overload", description: "Enrollment processing, scheduling, grading, and compliance reporting consume faculty and staff time that should go to students." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Student Engagement Tracking", description: "Identifying at-risk students relies on late indicators (failed exams). Early intervention opportunities are missed without predictive signals." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Knowledge Fragmentation", description: "Institutional knowledge spread across LMS, email, documents, and faculty minds is inaccessible when students need it." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Assessment Scalability", description: "Meaningful feedback on written work is impossible to provide at scale with manual grading processes." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Support Availability", description: "Students need help at all hours. Limited advising staff creates bottlenecks during registration, deadlines, and exam periods." },
  heroImage: "/assets/images/education_ai.png",
  ],

  opportunities: [
    { title: "Adaptive Learning Paths", icon: Brain, description: "AI that adjusts content difficulty, sequencing, and format based on individual student performance and learning patterns." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Student Success Analytics", icon: BarChart3, description: "Predictive models identifying at-risk students early, enabling proactive intervention before academic struggles compound." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Automated Assessment", icon: FileText, description: "AI-powered evaluation of written work with detailed feedback, rubric alignment, and consistency at scale." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Knowledge Assistants", icon: Search, description: "RAG-powered bots answering student questions from course materials, policies, catalogs, and institutional knowledge." },
  heroImage: "/assets/images/education_ai.png",
    { title: "Administrative Automation", icon: Clock, description: "AI agents handling enrollment processing, scheduling optimization, credential verification, and compliance reporting." },
  heroImage: "/assets/images/education_ai.png",
    { title: "24/7 Learning Support", icon: MessageSquare, description: "Always-available AI tutors providing concept explanations, practice problems, and study guidance in any subject." },
  heroImage: "/assets/images/education_ai.png",
  ],

  solutions: [
    { title: "Adaptive Learning Platform", icon: Brain, description: "Personalized learning engine that adjusts curriculum delivery based on mastery, engagement, and learning style.", capabilities: ["Content Sequencing", "Difficulty Adaptation", "Gap Analysis", "Progress Tracking"] },
  heroImage: "/assets/images/education_ai.png",
    { title: "Student Intelligence System", icon: BarChart3, description: "Predictive analytics identifying engagement patterns, risk factors, and intervention opportunities across the student lifecycle.", capabilities: ["Risk Scoring", "Engagement Tracking", "Outcome Prediction", "Cohort Analysis"] },
  heroImage: "/assets/images/education_ai.png",
    { title: "Institutional Knowledge Base", icon: Database, description: "RAG-powered search across all institutional content — syllabi, policies, research, and operational documents.", capabilities: ["Semantic Search", "Policy Q&A", "Course Discovery", "Research Retrieval"] },
  heroImage: "/assets/images/education_ai.png",
    { title: "Campus Operations AI", icon: Bot, description: "Multi-agent system automating enrollment, scheduling, advising, and compliance workflows.", capabilities: ["Enrollment Processing", "Schedule Optimization", "Advising Agent", "Compliance Reporting"] },
  heroImage: "/assets/images/education_ai.png",
  ],

  architecture: {
    title: "Education AI Architecture",
    description: "A privacy-respecting platform connecting LMS, SIS, and institutional systems into a unified intelligence layer serving students, faculty, and administrators.",
  heroImage: "/assets/images/education_ai.png",
    layers: [
      { label: "Data Sources", items: ["LMS (Canvas/Moodle)", "SIS", "Library Systems", "Assessments", "Engagement Logs"] },
      { label: "Processing", items: ["Learning Analytics", "NLP/Assessment AI", "Recommendation Engine", "Prediction Models"] },
      { label: "Intelligence", items: ["Tutor Agent", "Advisor Agent", "Assessment Agent", "Admin Agent"] },
      { label: "Privacy", items: ["FERPA Compliance", "Data Minimization", "Consent Management", "Anonymization"] },
      { label: "Integration", items: ["LTI 1.3", "Canvas API", "SIS Adapters", "SSO/SAML", "Library APIs"] },
      { label: "Delivery", items: ["Student Portal", "Faculty Dashboard", "Mobile App", "LMS Embedded", "API"] },
    ],
  },

  workflow: {
    title: "Student Success Lifecycle",
    description: "AI supporting every phase of the student journey from enrollment through graduation and alumni engagement.",
  heroImage: "/assets/images/education_ai.png",
    steps: [
      { step: "01", title: "Enrollment & Onboarding", description: "AI-assisted application review, course recommendations, and personalized orientation based on student background." },
  heroImage: "/assets/images/education_ai.png",
      { step: "02", title: "Learning & Engagement", description: "Adaptive content delivery, AI tutoring, automated feedback, and real-time engagement monitoring." },
  heroImage: "/assets/images/education_ai.png",
      { step: "03", title: "Assessment & Intervention", description: "Automated grading with feedback, risk detection, and proactive outreach to struggling students." },
  heroImage: "/assets/images/education_ai.png",
      { step: "04", title: "Completion & Outcomes", description: "Career pathway recommendations, credential verification, alumni engagement, and institutional outcome analytics." },
  heroImage: "/assets/images/education_ai.png",
    ],
  },

  techStack: [
    { category: "AI & NLP", items: ["LLMs (GPT-4, Claude)", "Custom Tutoring Models", "Assessment NLP", "RAG"] },
    { category: "Analytics", items: ["Predictive Models", "Learning Analytics", "Engagement Scoring", "Cohort Analysis"] },
    { category: "Integration", items: ["LTI 1.3", "Canvas API", "Moodle", "Blackboard", "SIS Adapters"] },
    { category: "Privacy", items: ["FERPA Compliance", "COPPA", "Data Minimization", "Consent Tracking"] },
    { category: "Infrastructure", items: ["Cloud (AWS/Azure)", "Kubernetes", "CDN", "Multi-Tenant"] },
    { category: "Standards", items: ["xAPI", "SCORM", "Caliper", "QTI", "Open Badges"] },
  ],

  outcomes: [
    { value: "28%", label: "Better Outcomes" },
    { value: "60%", label: "Less Admin Time" },
    { value: "24/7", label: "Student Support" },
    { value: "3.5x", label: "Engagement Lift" },
  ],

  faqs: [
    { id: "edu-1", title: "How do you handle FERPA compliance?", content: "All student data is processed within compliant infrastructure with strict access controls, data minimization, audit logging, and consent management. We never expose PII to third-party AI providers without proper anonymization." },
    { id: "edu-2", title: "Can this integrate with our existing LMS?", content: "Yes. We support LTI 1.3 for deep LMS integration (Canvas, Moodle, Blackboard, D2L). AI features appear natively within the learning environment students already use." },
    { id: "edu-3", title: "How accurate is automated assessment?", content: "For structured responses: 95%+ agreement with human graders. For essays and open-ended work: we provide detailed feedback and suggest scores, but recommend human review for final grades. Rubric calibration ensures consistency." },
    { id: "edu-4", title: "Does this replace faculty?", content: "No. Our systems augment faculty by handling routine tasks (grading multiple choice, answering FAQ, administrative paperwork) so educators can focus on mentoring, discussion, and high-value instruction." },
  ],
};

export function EducationPage() {
  return <IndustryPageLayout data={data} />;
}

