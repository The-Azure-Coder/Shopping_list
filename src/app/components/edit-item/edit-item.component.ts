import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Items } from 'src/app/models/items';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input() item!: Items


  itemSub!: Subscription;
  itemId!: string;
  routeSub!: Subscription;

  
  constructor(private shopListService: ShoppinglistService, private router: Router,private route: ActivatedRoute,private location: Location ) { }

  getItemFromId(id: string): void{
    this.itemSub = this.shopListService.getItemById(id).subscribe(theitem=>this.item = theitem.data)
  }


  updateItem(){
    this.shopListService.updateItem(this.item).subscribe(()=>this.router.navigate(['/']));
  }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.itemId = params['id'];
      this.getItemFromId(this.itemId);
  })

}
}
