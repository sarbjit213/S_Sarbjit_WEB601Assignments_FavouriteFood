import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Butter Chicken",
      description:" Indulge in the rich and creamy flavors of Butter Chicken, a classic North Indian dish made with tender chicken cooked in a tomato-based sauce with aromatic spices and finished with a touch of butter and cream.",
      creator:"Traditional Indian Dish",
      imgURL:"https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27.jpg",
      type:"Main Course"
    });
    this.contentList.addContent({
      id: 1,
      title: "Samosa",
      description:"Crispy and savory, samosas are a beloved Indian snack. These triangular pastries are typically filled with a spiced mixture of potatoes, peas, and sometimes meat. They are then deep-fried to golden perfection.",
      creator:"Traditional Indian Snack",
      imgURL:"https://www.kitchensanctuary.com/wp-content/uploads/2023/10/Samosa-tall-FS-1025x1536.jpg",
      type:"Snack"
    });
    this.contentList.addContent({
      id: 2,
      title: "Paneer Tikka",
      description:" Tikka is a popular vegetarian appetizer made with chunks of paneer (Indian cottage cheese) marinated in a spiced yogurt mixture and grilled or baked to perfection. It's a flavorful and satisfying dish that's loved by both vegetarians and non-vegetarians.",
      creator:"Traditional Indian Dish",
      imgURL:"https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-1152x1536.jpg",
      type:"Appetizer"
    });
  }
}