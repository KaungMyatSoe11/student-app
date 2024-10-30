import StudentC from "./StudentC";
import { useGetAllStudentQuery } from "../services/studentServices";

const StudentList = () => {
  const { data, isLoading, isError,isFetching } = useGetAllStudentQuery();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error </div>;
  return (
    <ul>
      {isFetching && "isFetching..."}
      {data &&
        data.students.map((st) => <StudentC key={st._id} student={st} />)}
    </ul>
  );
};

export default StudentList;
