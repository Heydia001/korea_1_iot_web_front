export const tmp  = '';

type Task<T> = {
  id: number;
  content: T;
  completed: boolean;
}

class TaskManager<T> {
  private tasks: Task<T>[];
  private nextId: number;

  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(content: T): void {
    this.tasks.push({ id: this.nextId, content, completed: false });
    this.nextId++;
    this.updateTaskCount();
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.renderTasks('task-list');
    this.updateTaskCount();
  }

  renderTasks(containerId: string): void {
    const container = document.getElementById(containerId) as HTMLUListElement;
    
    container.innerHTML = '';
    
    this.tasks.forEach(task => {
      const li = document.createElement('li');
      
      li.textContent = `${task.content}`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      
      deleteButton.onclick = () => {
        this.removeTask(task.id);
      }

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      
      checkbox.onchange = () => {
        task.completed = !task.completed;
        this.renderTasks(containerId);
      }

      if (task.completed) {
        li.style.textDecoration = 'line-through';
      }

      li.appendChild(deleteButton);
      li.insertBefore(checkbox, li.firstChild);
      
      container.appendChild(li);
    });
    
    this.updateTaskCount();
  }

  updateTaskCount() {
    const countElement = document.getElementById('task-count');
    if (countElement) {
      countElement.textContent = `할 일 개수: ${this.tasks.length}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const taskManager = new TaskManager<string>();
  const addButton = document.getElementById('add-button') as HTMLButtonElement;
  const newTaskInput = document.getElementById('task-input') as HTMLInputElement;

  addButton.addEventListener('click', () => {
    if (newTaskInput.value.trim() !== '') {
      taskManager.addTask(newTaskInput.value);
      taskManager.renderTasks('task-list');
      newTaskInput.value = '';
    }
  })
})