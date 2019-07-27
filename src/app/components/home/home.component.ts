import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/classes';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Item[] = [];

  constructor(private data:DataService) { }

  async ngOnInit() {
    this.items = await this.data.getItems();
  }

}