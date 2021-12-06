import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  toDos: Todo[];
  constructor() { 
    this.toDos=[
      {
        sno:1,
        title:"This is Title",
        desc:"Description",
        active:true
      },
      {
        sno:2,
        title:"This is Title 2 ",
        desc:"Description",
        active:true
      },
      {
        sno:3,
        title:"This is Title 3",
        desc:"Description",
        active:true
      }
    ]

    }
    
  

  ngOnInit(): void {

  }
  deleteTodo(todo: Todo){
    console.log(todo);
    const index=this.toDos.indexOf(todo);
    this.toDos.splice(index,1);
  }

}
