import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  
  addCategory = new FormGroup({
    'category_nm': new FormControl('',[Validators.required]),
 
  })
  constructor( private categoriesService: CategoriesService, private router: Router) { }


  onSubmit() {

    console.log(this.addCategory.value);
    this.categoriesService.createCategory(this.addCategory.value).subscribe();
    alert("Category Successful Added");
    this.router.navigate(['/categories']);
  }

  ngOnInit(): void {
  }

}
