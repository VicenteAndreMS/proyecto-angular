import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { ItemsComponent } from './layout/items/items.component';
import { ItemComponent } from './layout/item/item.component';
import { TotalComponent } from './layout/total/total.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
