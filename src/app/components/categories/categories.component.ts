import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[] = []

  constructor(private categoriesService: CategoriesService) { }

  getCategoriesFromList(){
    this.categoriesService.getAllCategories().subscribe(results=>{
      this.categories = results.data
    })

  }

  deleteCategory(id:string): void{
    this.categoriesService.deleteCategory(id).subscribe({
      next:(res)=>{
        alert('Category deleted successfully')
        this.getCategoriesFromList()
      },
      error:()=>{
        alert("Error while deleting the student")
      }
    })
  }

  ngOnInit(): void {
    this.getCategoriesFromList()
  }

}
