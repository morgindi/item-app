import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/classes';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items: Item[] = [];
  item: Item;

  constructor(private data:DataService, private router: Router) { }

  async ngOnInit() {
    this.items = await this.data.getItems();
  }

  onItemClick(index: number) {
    this.router.navigate(['items', index]);
  }

}