import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogicModule} from "./logic/logic.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LogicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
