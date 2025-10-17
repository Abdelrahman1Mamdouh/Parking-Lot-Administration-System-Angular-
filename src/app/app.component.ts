import { Component, OnInit } from '@angular/core';
import { AppuntamentoService } from './services/appuntamento.service';
import { AutomobileService } from './services/automobile.service';
import { Appuntamento } from './models/appuntamento.model';
import { Automobile } from './models/automobile.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  appointments: Appuntamento[] = [];
  automobili: Automobile[] = [];
  formData: Appuntamento = this.emptyAppointment();
  selectedId: number | null = null;

  constructor(
    private apptService: AppuntamentoService,
    private autoService: AutomobileService
  ) {}

  ngOnInit(): void {
    this.autoService.getAutomobili().subscribe(data => this.automobili = data);
    this.apptService.load();
    this.appointments = this.apptService.getAll();
  }

  saveAppointment(form: NgForm): void {
  if (!form.valid) {
    alert('Per favore, compila tutti i campi obbligatori.');
    return;
  }

  const duplicate = this.appointments.some((appt, idx) =>
    idx !== this.selectedId &&
    appt.data === this.formData.data &&
    appt.ora === this.formData.ora &&
    appt.cliente.toLowerCase() === this.formData.cliente.toLowerCase()
  );

  if (duplicate) {
    alert('Appuntamento duplicato: stesso cliente, data e ora.');
    return;
  }

  if (this.selectedId !== null) {
    this.appointments[this.selectedId] = { ...this.formData };
  } else {
    this.appointments.push({ ...this.formData });
  }

  this.apptService.save();
  this.selectedId = null;
  this.formData = this.emptyAppointment();
  form.resetForm(); // reset after successful save
}


  editAppointment(index: number): void {
    this.selectedId = index;
    this.formData = { ...this.appointments[index] };
  }

  deleteAppointment(index: number): void {
  const rows = document.querySelectorAll('tbody tr');
  const row = rows[index];

  if (row) {
    row.classList.remove('enter-active'); 
    row.classList.add('leave-active');

    setTimeout(() => {
      this.appointments.splice(index, 1);
      this.apptService.save();
    }, 300); 
  }
}


  exportAppointments(): void {
    const data = JSON.stringify(this.appointments, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'appuntamenti.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  getAutoLabel(autoId: string): string {
    const auto = this.automobili.find(a => a.id === autoId);
    return auto ? `${auto.marca} ${auto.modello}` : '';
  }

  emptyAppointment(): Appuntamento {
    return {
      data: '', ora: '', cliente: '', indirizzoSposa: '',
      luogo: '', note: '', auto: ''
    };
  }
}
