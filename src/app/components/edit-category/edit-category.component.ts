import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() category!: Categories


  categorySub!: Subscription;
  categoryId!: string;
  routeSub!: Subscription;

  getCategoryFromId(id: string): void{
    this.categorySub = this.categoriesService.getCategoryById(id).subscribe(theCategory=>this.category = theCategory.data)
  }


  updateCategory(){
    this.categoriesService.updateCategory(this.category).subscribe(()=>this.router.navigate(['/categories']));
  }
  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute)  { }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.categoryId = params['id'];
      this.getCategoryFromId(this.categoryId);
  })
   
  }
}
