import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArmediaformComponent } from './armediaform/armediaform.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BotDetectCaptchaModule } from 'angular-captcha';


@NgModule({
  declarations: [
    AppComponent,
    ArmediaformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BotDetectCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
