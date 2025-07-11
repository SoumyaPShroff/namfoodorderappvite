import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Aboutus from './components/Aboutus';
import './App.css';
import DataGridView from './components/DataGridView';
import { Rows, Columns } from "./utils/data.json";      // Adjust the path as necessary

document.addEventListener("contextmenu", function (e) {
  console.log("🧪 Global contextmenu event at:", e.target);
}, true);

const App = () => {

  return (
    <div className="App">
      <Header />

      {/* <ShimmerCircular />  */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>
      {/*  we can also use OutLet component to render the child components , children inside the parent component 
       <Outlet />
     */}
        <DataGridView
        dataRows={Rows}
        dataColumns={Columns}
        // pageSize={5}
        // rowsPerPageOptions={[5, 10]}
        // checkboxSelection={true}
        height={500}
        width={800}
      />  
    </div>
  );
};

export default App;