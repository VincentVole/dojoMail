import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails =[
  	{
  		email: 'Bill@Gates.com',
  		importance: true,
  		subject: 'New Windows',
  		content: 'Windows XI will launch in year 2100'
  	},
  	{
  		email: 'ada@LoVeLaCe.com',
  		importance: true,
  		subject: 'Programming',
  		content: 'Enchantress of Numbers'
  	},
  	{
  		email: 'john@carmac.COM',
  		importance: false,
  		subject: 'updated algo',
  		content: 'new algo for shadow volumes'
  	},
  	{
  		email: 'gabe@newel.com',
  		importance: false,
  		subject: 'hl3!',
  		content: 'jkjk'
  	}
  ]
}
