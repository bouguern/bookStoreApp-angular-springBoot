import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listBookCategories();
  }

  listBookCategories(){
    this.bookService.getBookCategories().subscribe(
      data => {
        this.categories = data;
        console.log(data);
      }
    );
  }



}
