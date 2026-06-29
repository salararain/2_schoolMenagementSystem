 import { Routes, Route} from 'react-router';
 import { AddStudent, StudentList, AddTeacher, TeacherList, Login, SiginIn } from './pages/page';
import Layout from './components/layout';

function App() {
 

  return (
    <>
      <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path="/siginin" element={<SiginIn/>}/>
       {/* <Route path="/" element= {<Layout/>}> */}
        <Route path="/addstudent" element={<AddStudent/>}/>
        <Route path="/studentlist" element={<StudentList/>}/>
        <Route path="/addteacher" element={<AddTeacher/>}/>
        <Route path="/teacherlist" element={<TeacherList/>}/>
        {/* </Route> */}

      </Routes>
  
    </>
  )
}

export default App
