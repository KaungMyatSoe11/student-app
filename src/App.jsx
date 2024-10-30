import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  // const { students } = useContext(StudentContext);
  // const { students, loading } = useSelector((state) => state.student);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchStudents());
  // }, []);

  return (
    <>
      <StudentForm />
      <StudentList/>
    </>
  );
}

export default App;
