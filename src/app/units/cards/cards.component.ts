import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
    department=[
      {
        id:1,
        Title:"bfs",
        Image:"../assets/Best-of-2016-Nasim-Mansurov-20.jpg",
        Description:"lghjytkeujgfsfgjhgf"
      },
      {
        id:2,
        Title:"hbu",
        Image:"../assets/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo (1).jpg",
        Description:"lghjytkeujgfsfgjhgf"
      },
      {
        id:3,
        Title:"dfs",
        Image:"../assets/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
        Description:"lghjytkeujgfsfgjhgf"
      }
  
    ]
  }