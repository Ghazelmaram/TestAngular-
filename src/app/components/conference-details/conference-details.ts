import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {

  // ① Input : le PÈRE envoie la conférence sélectionnée au FILS
  conference = input<Conference | null>(null);

  // ② Output : le FILS prévient le PÈRE quand on clique sur « S'inscrire »
  register = output<Conference>();

  remainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  onRegister(): void {
    const conf = this.conference();
    if (conf) {
      this.register.emit(conf); // envoie la conférence au père
    }
  }
}