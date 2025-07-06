
export default function Basic_info({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedIn,
  github,
  setGitHub
}) {
  return (
    <div className="flex flex-col align-center  justify-center ">
     
      <nav className="bg-indigo-500 text-white px-4 py-3 font-sans shadow sticky top-0 z-10 sticky ">
        <div className="w-2xl flex justify-between items-center gap-3 top-0 ">
          <h1 className="text-xl font-bold">Cv Maker</h1>
        
        <div className=" justify-between items-center text-black ">
          <a href="#" className="bg-yellow-100 text-black px-2 py-1 rounded hover:bg-yellow-200 m-3">Home</a>
        <a href="#" className="bg-yellow-100 text-black px-2 py-1 rounded hover:bg-yellow-200 m-3">About</a>
        <a href="#" className="bg-yellow-100 text-black px-2 py-1 rounded hover:bg-yellow-200 m-3">contact</a>
        </div></div>
      </nav>

     
      <form className="bg-orange-100 p-6 rounded shadow space-y-4 w-full">
        <h2 className="text-xl font-bold mb-4">Basic Info</h2>

        <div className="flex flex-col">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="px-3 py-1 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="px-3 py-1 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="px-3 py-1 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label>LinkedIn:</label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedIn(e.target.value)}
            placeholder="LinkedIn URL"
            className="px-3 py-1 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label>GitHub:</label>
          <input
            type="url"
            value={github}
            onChange={(e) => setGitHub(e.target.value)}
            placeholder="GitHub Profile"
            className="px-3 py-1 border rounded"
          />
        </div>
      </form>
      </div>
  );
}