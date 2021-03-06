import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';


import { DishService } from '../services/dish.service';



/*

const DISHES: Dish[] = [
          {
            name:'Uthappizza',
            image: '/assets/images/images/uthappizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
         {
            name:'Zucchipakoda',
            image: '/assets/images/images/zucchipakoda.png',
            category: 'appetizer',
            label:'',
            price:'1.99',
            description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
         {
            name:'Vadonut',
            image: '/assets/images/images/vadonut.png',
            category: 'appetizer',
            label:'New',
            price:'1.99',
            description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
         {
            name:'ElaiCheese Cake',
            image: '/assets/images/images/elaicheesecake.png',
            category: 'dessert',
            label:'',
            price:'2.99',
            description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
         ];


*/

@Component({
  selector: 'app-menu',//standard selector name that the angualr CLI gives for my components.
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  // dishes: Dish[] = DISHES;

  dishes: Dish[];

  selectedDish: Dish;
  constructor(private dishService: DishService) { }

  ngOnInit() {//one more method..use this lifecycle method to get know where we have to fetch the information
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish){
      this.selectedDish = dish;
  }  
      
}
