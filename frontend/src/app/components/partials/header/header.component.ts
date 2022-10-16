import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { faBurger,faBacon,faUser,faCartShopping,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  user!:User;
  faBurger=faBurger;
  faBacon=faBacon;
  faUser=faUser;
  faCartShopping=faCartShopping;
  faRightFromBracket=faRightFromBracket;
  constructor(cartService: CartService,private userService:UserService) {
    cartService.getCartObservabale().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
    userService.userObservable.subscribe((newUser) =>{
      this.user = newUser;
    })
  }

  ngOnInit(): void {}

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
