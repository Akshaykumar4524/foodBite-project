import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodservice: FoodService, route: ActivatedRoute) {
    let foodObservable:Observable<Food[]>;
    route.params.subscribe((params) => {
      if (params.searchTerm) {
        foodObservable = this.foodservice.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        foodObservable = this.foodservice.getAllFoodsByTag(params.tag);
      } else {
        foodObservable = foodservice.getAll();
      }

      foodObservable.subscribe((serverFoods)=>{
        this.foods=serverFoods;
      })
    });
  }

  ngOnInit(): void {}
}
