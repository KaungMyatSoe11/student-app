import React from "react";
import { useDeleteStudentMutation } from "../services/studentServices";
import { data } from "../features/student/data";

const StudentC = ({ student }) => {
  // const dispatch=useDispatch()

  // const { deleteStudent } = useContext(StudentContext);
  const [deleteStudent, { data, isLoading }] = useDeleteStudentMutation();

  const deleteHandler = async () => {
    // deleteStudent(student._id);
    // dispatch(deleteStudent(student._id))
    await deleteStudent(student._id);
  };

  return (
    <li style={{ marginBottom: "2rem" }}>
      <span style={{ marginRight: "1rem" }}>{student.name}</span>
      <button onClick={deleteHandler} disabled={isLoading}>
        {isLoading ? "Processing" : "Delete"}
      </button>
    </li>
  );
};

export default StudentC;
