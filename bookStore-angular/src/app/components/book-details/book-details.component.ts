import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { CartItem } from 'src/app/model/cart-item';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book();

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private cartService: CartService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      () => {
        this.getBookInfo();
      }
    );
  }

  getBookInfo(){
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');

    this.bookService.get(id).subscribe(
      data => {
        this.book = data;
        console.log("this is details : ",data);
      }
    );
  }

  addToCart(){
    console.log(`book name: ${this.book.name}, and price: ${this.book.unitPrice}`);
    const cartItem = new CartItem(this.book);
    this.cartService.addToCart(cartItem);
  }

}
