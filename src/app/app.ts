import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Portofolio } from './portofolio/portofolio';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero,About,Skills,Portofolio,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
