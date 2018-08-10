import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
 imports:[
     FormsModule,
     ReactiveFormsModule,
     CommonModule,
     MatButtonModule,
     MatListModule,
     MatMenuModule,
     MatCardModule,
     MatInputModule,
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule
 ],
 exports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
 ]
})

export class SharedModule{

}