import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    MenubarModule,

    BrowserAnimationsModule,
  ], exports: [
    MenuModule,
    MenubarModule,

    BrowserAnimationsModule,
  ]
})
export class PrimeNgModule { }
