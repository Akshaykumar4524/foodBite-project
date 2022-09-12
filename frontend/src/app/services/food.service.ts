import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchterm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchterm.toLowerCase())
    );
  }

  getAllTags() {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(foodId:string):Food{
     return this.getAll().find(food =>food.id == foodId) ?? new Food();
  }
}
