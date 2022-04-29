import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {id: 0,
      title: 'Procesador i5',
      price: 5000,
      quantity: 1,
      completed: false
      },
      {id: 1,
        title: 'Procesador i9',
        price: 9500,
        quantity: 1,
        completed: false
        },
      {id: 2,
        title: 'Gabinete Kediers',
        price: 5000,
        quantity: 1,
        completed: false
        },      
      {id: 3,
        title: 'Gabinete Xtreme',
        price: 1200,
        quantity: 1,
        completed: false
      },
      {id: 4,
        title: 'Teclado Mecanico',
        price: 800,
        quantity: 1,
        completed: false
        },      
      {id: 5,
        title: 'Teclado Inalambrico',
        price: 1200,
        quantity: 1,
        completed: false
        }
    ];
    this.getTotal();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item:Item){
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
                .filter( item => item.completed)
                .map(item => item.quantity * item.price)
                .reduce((acc,item) => acc += item,0);

  }
}
