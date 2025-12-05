// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Languages from "./pages/Languages";
import Courses from "./pages/Courses";

import Java from "./pages/Java";
import JavaScript from "./pages/Javascript";

import Python from "./pages/Python";

import DailyQuiz from "./pages/DailyQuiz";
import PremiumProjects from "./pages/PremiumProjects";
import DailyQuizIDE from "./pages/DailyQuizIDE";

import Basics from "./Python/Basics";
import Intermediate from "./Python/Intermediate";
import Advanced from "./Python/Advanced";
import Practice from "./Python/Practice";
import Projects from "./Python/Projects";
import Roadmap from "./Python/Roadmap";
import Interview from "./Python/Interview";
import PracticeIDE from "./Python/PracticeIDE";
import CodeIDE from "./pages/CodeIDE";
import PracticeSolve from "./pages/PracticeSolve";

import Basics_java from "./Java/Basics_java";
import IntermediateJava from "./Java/IntermediateJava";
import AdvanceJava from "./Java/AdvanceJava";
import ProjectsJava from "./Java/ProjectsJava";
import PracticeJava from "./Java/PracticeJava";
import InterviewQ from "./Java/InterviewQ";
import LearningRoadmap from "./Java/LearningRoadmap_java";

import Basics_js from "./JavaScript/Basics_js";
import Intermediate_js from "./JavaScript/Intermediate_js";
import Advance_js from "./JavaScript/Advance_js";
import Practice_js from "./JavaScript/Practice_js";
import Projects_js from "./JavaScript/Projects_js";
import Learning_Roadmap_js from "./JavaScript/Learning_Roadmap_js";
import Interview_Questions_js from "./JavaScript/Interview_Questions_js";
import ScheduleInterview from "./pages/ScheduleInterview";

import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/courses" element={<Courses />} />

      <Route path="/languages/java" element={<Java />} />
      <Route path="/languages/javascript" element={<JavaScript />} />

      <Route path="/languages/python" element={<Python />} />

      <Route path="/python/basics" element={<Basics />} />
      <Route path="/python/intermediate" element={<Intermediate />} />
      <Route path="/python/advanced" element={<Advanced />} />
      <Route path="/python/practice" element={<Practice />} />
      <Route path="/python/projects" element={<Projects />} />
      <Route path="/python/roadmap" element={<Roadmap />} />
      <Route path="/python/interview-questions" element={<Interview />} />
      <Route path="/python/practice/:id" element={<PracticeIDE />} />
      <Route path="/python/codeide" element={<CodeIDE />} />
      <Route path="/python/practice/:id/solve" element={<PracticeSolve />} />
      <Route path="/python/practice/:id/solve" element={<CodeIDE />} />

      <Route path="/java/learningroadmapjava" element={<LearningRoadmap />} />
      <Route path="/java/basicsjava" element={<Basics_java />} />
      <Route path="/java/intermediatejava" element={<IntermediateJava />} />
      <Route path="/java/advancejava" element={<AdvanceJava />} />
      <Route path="/java/interviewQ" element={<InterviewQ />} />
      <Route path="/java/practicejava" element={<PracticeJava />} />
      <Route path="/java/projectsjava" element={<ProjectsJava />} />

      <Route path="/JavaScript/basics_js" element={<Basics_js />} />
      <Route path="/JavaScript/intermediate_js" element={<Intermediate_js />} />
      <Route path="/JavaScript/advance_js" element={<Advance_js />} />
      <Route path="/JavaScript/projects_js" element={<Projects_js />} />
      <Route path="/JavaScript/practice_js" element={<Practice_js />} />
      <Route path="/JavaScript/learningroadmap_js" element={<Learning_Roadmap_js />} />
      <Route path="/JavaScript/interviewQ_js" element={<Interview_Questions_js />} />

      <Route path="/Pages/DailyQuiz" element={<DailyQuiz />} />
      <Route path="/Pages/premium_projects" element={<PremiumProjects />} />

      <Route path="/pages/profile" element={<Profile />} />
      <Route path="/dailyquizide" element={<DailyQuizIDE />} />
      <Route path="/schedule_interview" element={<ScheduleInterview />} />

      <Route path="*" element={<Signin />} /> {/* default page */}
    </Routes>
  );
}

export default App;
