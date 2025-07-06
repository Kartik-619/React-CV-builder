// src/App.jsx or src/components/App.jsx

import { useState } from 'react';
import Basic_info from './components/BasicInfo.jsx';
import Description from './components/Description.jsx';
import Cv_preview from './components/Cv_preview.jsx';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [github, setGitHub] = useState('');

  const [projects, setProjects] = useState([{ title: '', description: '' }]);
  const [skills, setSkills] = useState([{ skill: '' }]);
  const [achievements, setAchievements] = useState([{ win: '' }]);
  const [recommendations, setRecommendations] = useState([{ person: '' }]);
  const [Education,setEducation]=useState([{institute:'',year:'',grade:''}]);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className=" mx-90 flex flex-col self-center align-center w-3xl item-center bg-gray-100 h-screen">
      {!showPreview ? (
        <>
          {/* Basic Info */}
          <Basic_info
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            linkedin={linkedin}
            setLinkedIn={setLinkedIn}
            github={github}
            setGitHub={setGitHub}
          />

          {/* Description Form */}
          <Description
            projects={projects}
            setProjects={setProjects}
            skills={skills}
            setSkills={setSkills}
            Education={Education}
            setEducation={setEducation}
            achievements={achievements}
            setAchievements={setAchievements}
            recommendations={recommendations}
            setRecommendations={setRecommendations}
          />

        
          <div className="text-center my-6">
            <button
              onClick={() => setShowPreview(true)}
              className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
            >
              Save & Preview CV
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Preview Mode */}
          <Cv_preview
            data={{
              name,
              email,
              phone,
              linkedin,
              github,
              projects,
              skills,
              achievements,
              recommendations
            }}
          />

          {/* Back to Edit Button */}
          <div className="text-center my-6">
            <button
              onClick={() => setShowPreview(false)}
              className="bg-blue-400 text-black px-4 py-2 rounded"
            >
              Back to Edit Mode
            </button>
          </div>
        </>
      )}
    </div>
  );
}