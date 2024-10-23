import StudentProvider from "./context/StudentProvider";

const Providers = ({ children }) => {
  return (
    <StudentProvider>
        {children}{/* <APP/> */}
    </StudentProvider>
  );
};

export default Providers;
