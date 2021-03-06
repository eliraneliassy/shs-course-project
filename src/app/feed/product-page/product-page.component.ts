import { Component, OnInit, Inject } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Item } from '../../item';
import { ActivatedRoute, Params } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  item: Item;

  constructor(private feedService: FeedService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    // this.route.data.subscribe(data => this.item = data.item)
    this.item = this.data.item;

    // const productId = this.route.snapshot.params['id'];
    // this.route.params.subscribe((params: Params) => 
    // {
    //   this.feedService.getFeed(0).subscribe((res: Item[]) =>
    //   this.item = res.find(x => x._id === params['id']))
    // })

    // this.route.queryParams.subscribe((params: Params) => 
    // {
    //   this.feedService.getFeed(0).subscribe((res: Item[]) =>
    //   this.item = res.find(x => x._id === params['id']))
    // })


  }

}
