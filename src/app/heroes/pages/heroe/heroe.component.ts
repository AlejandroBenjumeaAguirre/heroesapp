import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
   img {
     width: 100%;
     border-radius: 5px;
   }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activateRoute: ActivatedRoute,
               private heroeService: HeroesService ,
               private router: Router
               ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroeService.getHeroeId(id) )
      )
      .subscribe( heroe => this.heroe = heroe );
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
