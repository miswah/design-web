import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DesignListComponent } from './components/design-list/design-list.component';
import { DesignViewComponent } from './components/design-view/design-view.component';
import { NavabarComponent } from './shared/navabar/navabar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//NPM package
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditComponent } from './components/edit/edit.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignListComponent,
    DesignViewComponent,
    NavabarComponent,
    FooterComponent,
    HomepageComponent,
    EditComponent,
    EditImageComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
