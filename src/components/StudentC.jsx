import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../features/student/StudentSlice";

const StudentC = ({ student }) => {
  const dispatch=useDispatch()

  // const { deleteStudent } = useContext(StudentContext);

  const deleteHandler = () => {
    // deleteStudent(student._id);
    dispatch(deleteStudent(student._id))
  };

  return (
    <li style={{ marginBottom: "2rem" }}>
      <span style={{ marginRight: "1rem" }}>{student.name}</span>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default StudentC;
