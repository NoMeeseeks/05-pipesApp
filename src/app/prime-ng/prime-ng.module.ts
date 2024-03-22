import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,

    BrowserAnimationsModule,
  ], exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,

    BrowserAnimationsModule,
  ]
})
export class PrimeNgModule { }
