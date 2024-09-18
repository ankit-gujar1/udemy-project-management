import { useEffect, useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const loadInitialState = () => {
    const storedState = localStorage.getItem("state");
    return storedState
      ? JSON.parse(storedState)
      : {
          selectedProjectId: undefined,
          projects: [],
          tasks: [],
        };
  };
  const [projectState, setProjectState] = useState(loadInitialState)

  // useEffect(() => {
  //   const state = JSON.parse(localStorage.getItem("state"));
  //   if (state) setProjectState(state);
  //   // console.log(projectState);

  // }, [])

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(projectState));
  }, [projectState])


  //for changing rhs component
  const handleAddProjectButton = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null
      };
    });
  }

  //set project id
  const handleSelectProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id
      };
    });
  }
  //pass selectedProject const as prop in SelectedProject component
  const selectedProject = projectState.projects.find(
    (i) => i.id === projectState.selectedProjectId
  );

  //for changing rhs component
  const handleCancelProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined
      };
    });
  }

  //for saving new project
  const handleSaveProject = (projectData) => {
    const newProject = {
      id: Math.random(),
      ...projectData
    }
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject]
      };
    });
  }

  const handleDeleteProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((i) => i.id !== id),
        tasks: prev.tasks.filter((task) => task.projectId !== id), //also delete related to that project
      };
    });
  }

  const handleAddTask = (text, projectId) => {
    const newTask = {
      id: Math.random(),
      text,
      projectId
    }
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks]
      };
    });
  }

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  return (
    <main className="h-screen flex">
      <Sidebar handleAddProjectButton={handleAddProjectButton} projects={projectState.projects} handleSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId} />
      {/* <NewProject/> */}
      {projectState.selectedProjectId === undefined ? <NoProjectSelected handleAddProjectButton={handleAddProjectButton} /> : projectState.selectedProjectId === null ? <NewProject handleSaveProject={handleSaveProject} handleCancelProject={handleCancelProject} /> : <SelectedProject project={selectedProject} handleDeleteProject={handleDeleteProject} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} tasks={projectState.tasks} />}
    </main>
  );
}

export default App;
