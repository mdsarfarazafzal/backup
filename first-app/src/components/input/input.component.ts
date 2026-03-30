import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../app/services/master.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  inputValue: string = '';
  constructor(private masterService: MasterService) {}
  @Output() valueChange = new EventEmitter<string>();

  onInputChange() {
    this.valueChange.emit(this.inputValue);
    this.masterService.mySubject.next(this.inputValue);
  }
}
