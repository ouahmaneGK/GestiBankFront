import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './User/client/client.component';
import { ConseillerComponent } from './User/conseiller/conseiller.component';
import { AdministrateurComponent } from './User/administrateur/administrateur.component';
import { CompteComponent } from './compte/compte.component';
import { ClientPotentielComponent } from './client-potentiel/client-potentiel.component';
import { RequeteComponent } from './requete/requete.component';
import { DemandeOuvertureComponent } from './demande-ouverture/demande-ouverture.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ConseillerComponent,
    AdministrateurComponent,
    CompteComponent,
    ClientPotentielComponent,
    RequeteComponent,
    DemandeOuvertureComponent,
    TransactionComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
