import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  nft = {
    name: 'Equilibrium #3429',
    image: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719236688/image-equilibrium_zjh0g8.jpg',
    description: 'Our Equilibrium collection promotes balance and calm.',
    price: '0.041 ETH',
    time: '3 days left'
  };

  creator = {
    image:'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719236688/image-avatar_zdv1ox.png',
    name: 'Jules Wyvern',
    link: 'https://www.frontendmentor.io/learning-paths/advanced-css-techniques-vdOtKjIC4V/steps/66783bc4983369c5331b994a/challenge/start'
  }

  constructor() { } 
}
