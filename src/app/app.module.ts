import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ROUTES } from './ROUTES/routes';
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
