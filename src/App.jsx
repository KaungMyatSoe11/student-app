import { useEffect } from "react";
import StudentC from "./components/StudentC";
import StudentForm from "./components/StudentForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./api/student";

function App() {
  // const { students } = useContext(StudentContext);
  const { students, loading } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <>
      <StudentForm />
      {loading && <h1>loading...</h1>}
      <ul>
        {students.map((st) => (
          // <li key={st._id}>{st.name}</li>
          <StudentC key={st._id} student={st} />
        ))}
      </ul>
    </>
  );
}

export default App;
