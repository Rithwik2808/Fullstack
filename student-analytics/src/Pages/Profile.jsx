import Layout from "../Components/StudentLayout";

export default function Profile() {
  const student = {
    name: "Rithwik",
    email: "rithwik@gmail.com",
    class: "11A",
    average: "87.5%",
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl">

        {/* TOP SECTION */}
        <div className="flex items-center gap-6 mb-6">

          {/* AVATAR */}
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
            {student.name.charAt(0)}
          </div>

          {/* NAME + EMAIL */}
          <div>
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-gray-500 text-sm">{student.email}</p>
          </div>

        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Class</p>
            <p className="font-semibold">{student.class}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Average</p>
            <p className="font-semibold">{student.average}</p>
          </div>

        </div>

      </div>
    </Layout>
  );
}