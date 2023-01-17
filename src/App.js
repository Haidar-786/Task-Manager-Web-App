import React from 'react';
import TaskList from './components/taskList';
// import Login from './components/Login/Login';



function App() {
  return (
    // <div className="App">
    //   <TaskList/>
    //   {/* <Login/> */}
    // </div>
    <div class="h-full overflow-x-hidden">
  <div class="flex h-full">
    <div class="hidden sm:block bg-zinc-600 w-2/12"></div>
    <div class="w-10/12 flex items-center justify-center sm:justify-start">
    <TaskList/>
    </div>
  </div>
</div>
  );
}

export default App;
