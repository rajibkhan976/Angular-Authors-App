import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  @Input() author: any;
  @Input() favoriteAuthorsIndices: any;
  @Output() addFavoriteAuthor = new EventEmitter<any>();
  @Output() removeFavoriteAuthor = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addFavorite(idOfAuthor: string): void {
    this.addFavoriteAuthor.emit(idOfAuthor);
  }

  removeFavorite(idOfAuthor: string): void {
    this.removeFavoriteAuthor.emit(idOfAuthor);
  }

}
