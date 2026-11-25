import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Conference } from '../../models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [ConferenceDetails, FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  // Texte saisi dans la barre de recherche (two-way binding avec [(ngModel)])
  searchTerm: string = '';

  // Conférence sélectionnée : elle est envoyée au composant fils ConferenceDetails
  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      // Conférence passée : elle ne doit PAS apparaître (filtre « à venir »)
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ];

  // Conférences à venir dont le titre contient le texte recherché
  get filteredConferences(): Conference[] {
    const today = new Date();
    const term = this.searchTerm.trim().toLowerCase();

    return this.conferences.filter(conf =>
      conf.date >= today &&
      conf.title.toLowerCase().includes(term)
    );
  }

  remainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  // Classe CSS du bouton selon le nombre de places restantes
  buttonClass(conf: Conference): string {
    const remaining = this.remainingPlaces(conf);
    if (remaining <= 0) {
      return 'btn-full';      // rouge
    }
    if (remaining < 10) {
      return 'btn-low';       // orange
    }
    return 'btn-available';   // vert
  }

  // Clic sur une carte : on mémorise la conférence choisie
  // → elle est transmise au fils grâce à [conference]="selectedConference"
  selectConference(conf: Conference): void {
    this.selectedConference = conf;
  }

  // +1 participant (appelée par le bouton de la carte ET par le fils via (register))
  register(conf: Conference): void {
    if (this.remainingPlaces(conf) > 0) {
      conf.nbParticipants++;
    }
  }

  // Bouton « S'inscrire » d'une carte : stopPropagation évite de sélectionner la carte
  registerFromCard(conf: Conference, event: Event): void {
    event.stopPropagation();
    this.register(conf);
  }
}