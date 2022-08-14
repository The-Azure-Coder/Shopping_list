import { Component, OnInit } from '@angular/core';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  items: Items[] = []

  constructor(private shopListService: ShoppinglistService) { }

  getItemsFromList(){
    this.shopListService.getAllItems().subscribe(results=>{
      this.items = results.data
    })

  }

  deleteItem(id:string): void{
    this.shopListService.deleteItem(id).subscribe({
      next:(res)=>{
        alert('item deleted successfully')
        this.getItemsFromList()
      },
      error:()=>{
        alert("Error while deleting the item")
      }
    })
  }

  ngOnInit(): void {
    this.getItemsFromList()
  }

}
