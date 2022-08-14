import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  categories: Categories[] = []

  addItem = new FormGroup({
    'item_name': new FormControl('',[Validators.required]),
    'category': new FormControl('',[Validators.required]),
    'price': new FormControl('',[Validators.required]),
    'quantity': new FormControl('',[Validators.required])
  })
  constructor(private shopListService: ShoppinglistService, private router:Router,private categoriesService: CategoriesService) { }

  getCategoriesFromList(){
    this.categoriesService.getAllCategories().subscribe(results=>{
      this.categories = results.data
    })
  }
  onSubmit() {
    console.log(this.addItem.value);
    this.shopListService.createItem(this.addItem.value).subscribe();
    alert("Iitem Successful Added");
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.getCategoriesFromList()
  }
}
