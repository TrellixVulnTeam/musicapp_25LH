import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicAddBandPageRoutingModule } from './music-add-band-routing.module';

import { MusicAddBandPage } from './music-add-band.page';
/* global */
import {AddBandComponent } from "../../components/headers/add-band/add-band.component";
import {BackComponent} from '../../components/global/back/back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MusicAddBandPageRoutingModule
  ],
  declarations: [MusicAddBandPage, AddBandComponent, BackComponent]
})
export class MusicAddBandPageModule {}
