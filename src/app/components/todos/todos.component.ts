import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:string|null;
  todos:Todo[];

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos=[];
    }else{
      this.todos=JSON.parse(this.localItem)
    }
    //this.todos=[
      // {
      // sno:1,
      // title:"title 1",
      // desc:"description",
      // active:true
      // },
      // {
      //   sno:2,
      //   title:"title 2",
      //   desc:"description",
      //   active:true
      //   },
      //   {
      //     sno:3,
      //     title:"title 3",
      //     desc:"description",
      //     active:true
      //     },
      //     {
      //       sno:4,
      //       title:"title 4",
      //       desc:"description",
      //       active:true
      //       },
 // ]
  }

  deleteTodo(todo:Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index,1);
      localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
}

toggleToDo(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos[index].active=!this.todos[index].active;
  localStorage.setItem("todos",JSON.stringify(this.todos))
}
}
