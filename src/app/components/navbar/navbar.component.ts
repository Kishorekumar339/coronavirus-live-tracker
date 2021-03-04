import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
 

  constructor() { 
    
    
  }
  

  ngOnInit(): void {

    const navSlide= () =>{
      const burger= document.querySelector('.burger');
      const nav = document.querySelector('.nav-nav');
      const navnav =document.querySelectorAll('.nav-nav li');

      burger.addEventListener('click', () =>{
        nav.classList.toggle('active');
      
     /*navnav.forEach((link, index) => {
       if (link.style.animation){
         link.style.animation = " ";
       } else{
        link.style.animation = `navnavFade 0.5s ease forwards ${ index / 7 + 0.3}s`;

       }
      });*/
      burger.classList.toggle("toggle");
      
      });
    }
    navSlide();
  }

}

