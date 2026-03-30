import { Component, inject } from '@angular/core';
import { Task } from '../../models/interfaces/Task';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  newTaskText: string = '';

  editText: string = '';

  router: Router = inject(Router);
  todoService = inject(TodosService);

  currentUser = JSON.parse(
    localStorage.getItem('user') || '{"email":"","todos":[]}',
  );

  tasks: Task[] = this.currentUser.todos;

  addTask(): void {
    if (this.newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: this.newTaskText,
        completed: false,
        isEditing: false,
        createdAt: new Date(),
      };
      this.tasks.unshift(newTask);
      this.save();
      this.newTaskText = '';
    }
  }

  toggleTask(id: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    this.save();
  }
  toggleEdit(id: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task,
    );
  }

  saveEdit(id: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? { ...task, isEditing: !task.isEditing, text: this.editText }
        : task,
    );
    this.editText = '';
    this.save();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    this.save();
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.save();
  }

  onLogout(): void {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }

  pendingTasks(): number {
    return this.tasks.filter((task) => !task.completed).length;
  }

  save(): void {
    localStorage.setItem(
      'user',
      JSON.stringify({ ...this.currentUser, todos: this.tasks }),
    );
    this.todoService
      .synctodos(
        JSON.parse(localStorage.getItem('user') || '{"email":"","todos":[]}'),
      )
      .pipe(
        map((data) => ({
          message: data.message,
          success: data.success,
          statusCode: data.statusCode,
        })),
      )
      .subscribe(
        (res: any) => {
          if (res.success) {
            console.table(res);
          }
        },
        () => {
          console.error('Syncing todos failed');
        },
      );
  }
}
