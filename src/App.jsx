import { useContext } from "react";
import { StudentContext } from "./context/StudentProvider";
import StudentC from "./components/StudentC";
import StudentForm from "./components/StudentForm";
import { useSelector } from "react-redux";

function App() {
  // const { students } = useContext(StudentContext);
const {students} = useSelector((state) => state.student);

  return (
    <>
      {/* <StudentForm /> */}
      <ul>
        {students.map((st) => (
          <li key={st._id}>{st.name}</li>
          // <StudentC key={st._id} student={st} />
        ))}
      </ul>
    </>
  );
}

export default App;
