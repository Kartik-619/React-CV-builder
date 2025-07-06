
import { useState } from 'react';

export default function Description({
  projects,
  setProjects,
  skills,
  setSkills,
  Education,
  setEducation,
  achievements,
  setAchievements,
  recommendations,
  setRecommendations
}) {
  const addProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  const handleTitleChange = (e, index) => {
    const updated = [...projects];
    updated[index].title = e.target.value;
    setProjects(updated);
  };

  const handleDescriptionChange = (e, index) => {
    const updated = [...projects];
    updated[index].description = e.target.value;
    setProjects(updated);
  };
   {/*Handle Skills*/}
  const handleSkillChange = (e, index) => {
    const updated = [...skills];
    updated[index].skill = e.target.value;
    setSkills(updated);
  };


   {/*Handle  Education*/}
  const handleInstitute=(e,index)=>{
    const updated=[...Education];
    updated[index].institute=e.target.value;
    setEducation(updated);
  }
  const handleYear=(e,index)=>{
    const updated=[...Education];
    updated[index].year=e.target.value;
    setEducation(updated);
  }
  const handleGrade=(e,index)=>{
    const updated=[...Education];
    updated[index].grade=e.target.value;
    setEducation(updated);
  }

  const addEducation= () => {
    setEducation([...Education, { institute: '', year: '',grade:'' }]);
  };
  {/*Handle Wins*/}

  const handleAchievementChange = (e, index) => {
    const updated = [...achievements];
    updated[index].win = e.target.value;
    setAchievements(updated);
  };
 {/*Recommendation*/}
  const handleRecommendationChange = (e, index) => {
    const updated = [...recommendations];
    updated[index].person = e.target.value;
    setRecommendations(updated);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: '' }]);
  };

  const addAchievement = () => {
    setAchievements([...achievements, { win: '' }]);
  };

  const addRecommendation = () => {
    setRecommendations([...recommendations, { person: '' }]);
  };

  return (
    <form className="bg-orange-100 p-6 rounded shadow space-y-6 w-full">
      {/* Projects */}
      <fieldset className="space-y-2">
        <legend className="text-xl font-semibold">Projects</legend>
        <ul className="list-disc pl-5 space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="space-y-2">
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleTitleChange(e, index)}
                placeholder="Project Title"
                className="w-full px-3 py-1 border rounded"
              />
              <textarea
                rows="3"
                value={project.description}
                onChange={(e) => handleDescriptionChange(e, index)}
                placeholder="Describe your project..."
                className="w-full px-3 py-1 border rounded"
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={addProject} className="text-blue-600 hover:underline">
          + Add Project
        </button>
      </fieldset>

      {/* Skills */}
      <fieldset className="space-y-2">
        <legend className="text-xl font-semibold">Skills</legend>
        <ul className="list-disc pl-5 space-y-2">
         
        </ul>
        {skills.map((a, index) => (
            <li key={index}>
              <input
                type="text"
                value={a.skill}
                onChange={(e) => handleSkillChange(e, index)}
                placeholder="e.g., Javascript"
                className="w-full px-3 py-1 border rounded"
              />
            </li>
          ))}
        <button type="button" onClick={addSkill} className="text-blue-600 hover:underline">
          + Add Skill
        </button>
      </fieldset>
          {/*Education*/}

          <fieldset className="space-y-2">
        <legend className="text-xl font-semibold">Education</legend>
        <table>
          <thead><tr><th>Institute</th><th>Year</th><th>Grade</th></tr></thead>
        <tbody>
          {Education.map((item,index)=>(
            <tr key={index}>
              <td><input
                  type="text"
                  placeholder='Educational institute'
                  value={item.institute}
                  onChange={(e)=>handleInstitute(e,index)}   
                  className="w-1xl px-3 py-1 border rounded"         
                    /></td>
                  <td><input
                  type="text"
                  placeholder='Year'
                  value={item.year}
                  onChange={(e)=>handleYear(e,index)}   
                  className="w-1xl px-3 py-1 border rounded"         
                    /></td>
                  <td><input
                  type="text"
                  placeholder='Grades'
                  value={item.grade}
                  onChange={(e)=>handleGrade(e,index)}   
                  className="w-1xl px-3 py-1 border rounded"         
                    /></td>
            </tr>
          ))

          }

        </tbody>
        </table>

        <button type="button" onClick={addEducation} className="text-blue-600 hover:underline">
          + Add Education
        </button>
      </fieldset>



      {/* Achievements */}
      <fieldset className="space-y-2">
        <legend className="text-xl font-semibold">Achievements</legend>
        <ul className="list-disc pl-5 space-y-2">
          {achievements.map((a, index) => (
            <li key={index}>
              <input
                type="text"
                value={a.win}
                onChange={(e) => handleAchievementChange(e, index)}
                placeholder="e.g., Best Student Award"
                className="w-full px-3 py-1 border rounded"
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={addAchievement} className="text-blue-600 hover:underline">
          + Add Achievement
        </button>
      </fieldset>

      {/* Recommendations */}
      <fieldset className="space-y-2">
        <legend className="text-xl font-semibold">Recommendations</legend>
        <ul className="list-disc pl-5 space-y-2">
          {recommendations.map((r, index) => (
            <li key={index}>
              <input
                type="text"
                value={r.person}
                onChange={(e) => handleRecommendationChange(e, index)}
                placeholder="Name-Role"
                className="w-full px-3 py-1 border rounded"
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={addRecommendation} className="text-blue-600 hover:underline">
          + Add Recommendation
        </button>
      </fieldset>
    </form>
  );
}