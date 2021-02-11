class LocalStorageService {
  constructor() {
    throw new Error("Não é possível instanciar LocalStorageService");
  }

  /*
  static refreshLocalDB(taskList) {
    localStorage.setItem('tasksDB', JSON.stringify(taskList));
  }*/

  static refreshLocalDB(taskList) {
    taskList.forEach((task, index) => {
      localStorage.setItem(index, JSON.stringify(task))
    })
  }
}

export default LocalStorageService;
