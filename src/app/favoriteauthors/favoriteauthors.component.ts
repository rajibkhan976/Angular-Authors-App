import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favoriteauthors',
  templateUrl: './favoriteauthors.component.html',
  styleUrls: ['./favoriteauthors.component.css']
})
export class FavoriteauthorsComponent implements OnInit {

  @Input() favoriteAuthor: any;
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
