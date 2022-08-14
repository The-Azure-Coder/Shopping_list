import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';

const routes: Routes = [
  {path: '', component: ShoppinglistComponent},
  {path: 'add_item', component: AddItemComponent},
  {path: 'shopping_list/:id', component: EditItemComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'add_category', component: AddCategoryComponent},
  {path: 'categories/:id', component: EditCategoryComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
