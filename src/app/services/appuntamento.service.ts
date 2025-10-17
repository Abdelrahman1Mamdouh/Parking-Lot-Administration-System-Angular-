import { Injectable } from '@angular/core';
import { Appuntamento } from '../models/appuntamento.model';

@Injectable({ providedIn: 'root' })
export class AppuntamentoService {
  private appointments: Appuntamento[] = [];

  getAll(): Appuntamento[] {
    return this.appointments;
  }

  add(appt: Appuntamento): void {
    this.appointments.push(appt);
    this.save();
  }

  save(): void {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  load(): void {
    const data = localStorage.getItem('appointments');
    if (data) this.appointments = JSON.parse(data);
  }
}
