import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Texto y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: ' '
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro Elemento',
            icon: 'pi pi-cog'
          }
        ]
      }
    ]
  }
}
