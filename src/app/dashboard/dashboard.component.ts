import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  authors: any;
  navigateFavorite: boolean = false;
  favoriteAuthors: any = [];
  favoriteAuthorsIndices: any = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  showFavorite(): void {
    this.navigateFavorite = true;
  }

  showAuthors(): void {
    this.navigateFavorite = false;
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe((data: any) => {
      if (data) {
        this.authors = data.results;
      }
    })
  }

  addFavoriteAuthor(idOfAuthor: string): void {
    if (this.authors && 
        Array.isArray(this.authors) && 
        this.authors.length !== 0 && 
        idOfAuthor
      ) {
      this.favoriteAuthorsIndices.push(idOfAuthor);
      this.authors.forEach((element, index) => {
        if (idOfAuthor === element._id) {
          this.favoriteAuthors.push(element);
        }
      });
    }
  }

  removeFavoriteAuthor(idOfAuthor: string): void {
    if (this.favoriteAuthors && 
        this.favoriteAuthorsIndices.length !== 0 && 
        this.favoriteAuthors.length !== 0 && 
        idOfAuthor
      ) {
      this.favoriteAuthorsIndices = this.favoriteAuthorsIndices.filter((element: any, index: any) => {
        return (idOfAuthor !== element)
      });
      this.favoriteAuthors = this.favoriteAuthors.filter((element: any, index: any) => {
        return (idOfAuthor !== element._id)
      });
    }
  }

}
