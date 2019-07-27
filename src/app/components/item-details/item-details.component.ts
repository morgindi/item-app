import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/classes';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;
  subs: Subscription[] = [];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

   ngOnInit() {
    this.subs.push(this.route.params.subscribe(val => this.invalidate(val)));
  }

  ngOnDestroy(): void {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

  async invalidate(prms: Params) {
    let id = prms["index"];
    let uidNumber = Number(id);
    this.item = await this.data.getItemDetails(uidNumber);
    console.log(this.item);
  }

  goNext() {
    this.router.navigate(['items', this.item.itemNumber + 1]);
  }

  goPrev() {
    this.router.navigate(['items', this.item.itemNumber - 1]);
  }

}
