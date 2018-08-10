import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header.component";
import { AppRoutingModule } from "../app-routing.module";
@NgModule({
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    declarations:[
        LayoutComponent,
        HeaderComponent,
        
    ],
    exports:[
        LayoutComponent,
        HeaderComponent,
        
    ],

})

export class LayoutModule{
    
}