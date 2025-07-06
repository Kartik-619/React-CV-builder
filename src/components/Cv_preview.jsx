
export default function CVPreview({ data }) {
  const { name, email, phone, linkedin, github, projects = [], skills = [], Education = [], achievements = [], recommendations = [] } = data;

  return (
    <div className="bg-white p-8 rounded shadow-lg  w-full space-y-6">

      <div className="text-center">
        <h1 className="text-3xl font-bold">{name || 'Your Name'}</h1>
        <p>{email || 'Email@example.com'} | {phone || '+91 00000 00000'}</p>
        <p>
          LinkedIn: {linkedin ? (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {linkedin}
            </a>
          ) : (
            'linkedin.com/in/your-profile'
          )}
        </p>
        <p>
          GitHub: {github ? (
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {github}
            </a>
          ) : (
            'github.com/yourusername'
          )}
        </p>
      </div>

      <hr className="my-6" />


      <section>
        <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>
        <ul className="mt-2 space-y-4">
          {projects.map((project, index) => (
            <li key={index}>
              <h3 className="font-semibold">{project.title || 'Project Title'}</h3>
              <p>{project.description || 'Describe what you did here...'}</p>
            </li>
          ))}
        </ul>
      </section>


      <section>
        <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {skills.map((s, i) =>
            s.skill ? (
              <li key={i} className="bg-gray-200 px-3 py-1 rounded">
                {s.skill}
              </li>
            ) : null
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Institute</th>
              <th className="px-4 py-2 border">Year</th>
              <th className="px-4 py-2 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {Education.map((e, i) =>
              e.institute || e.year || e.grade ? (
                <tr key={i}>
                  <td className="bg-gray-200 px-4 py-2 border rounded">
                    {e.institute || '-'}
                  </td>
                  <td className="bg-gray-200 px-4 py-2 border rounded">
                    {e.year || '-'}
                  </td>
                  <td className="bg-gray-200 px-4 py-2 border rounded">
                    {e.grade || '-'}
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b pb-2">Achievements</h2>
        <ul className="mt-2 list-disc ml-5">
          {achievements.map((a, i) =>
            a.win ? <li key={i}>{a.win}</li> : null
          )}
        </ul>
      </section>


      <section>
        <h2 className="text-xl font-semibold border-b pb-2">Recommendations</h2>
        <ul className="mt-2 list-disc ml-5">
          {recommendations.map((r, i) =>
            r.person ? <li key={i}>{r.person}</li> : null
          )}
        </ul>
      </section>
    </div>
  );
}