import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { MenuNavigation } from './components/menu-navigation/menu-navigation';
import { ProfilUtilisateur } from './components/profil-utilisateur/profil-utilisateur';
import { ListeAmis } from './components/liste-amis/liste-amis';
import { ConferenceList } from './components/conference-list/conference-list';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    MenuNavigation,
    ProfilUtilisateur,
    ListeAmis,
    ConferenceList,
    Notifications,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TestAngular');
}