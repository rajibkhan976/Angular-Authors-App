import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  
  @Input() author: any;
  @Input() favoriteAuthorsIndices: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() removeFavorite = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }

  add(idOfAuthor: string): void {
    this.addFavorite.emit(idOfAuthor);
  }

  remove(idOfAuthor: string): void {
    this.removeFavorite.emit(idOfAuthor);
  }

}
