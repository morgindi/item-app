import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Item } from 'src/app/models/classes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  item: Item;

  constructor(private data: DataService){}

  async getItems(){
    let res = await this.data.getItems();
    console.log(res);
  }
}
