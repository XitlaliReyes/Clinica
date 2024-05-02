import { Component } from '@angular/core';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  buscarUnDoctor(nombre: string){
    this.router.navigate(['/buscador',nombre]);
  }

}