import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';


type ButtonProps = {
  error: boolean;
  placeholder: string;
  name: string;
  type: 'email' | 'text';
};

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  error = input<ButtonProps['error']>(false);
  type = input<ButtonProps['type']>('text');
  placeholder = input<ButtonProps['placeholder']>('');
  name = input<ButtonProps['name']>('');
  value: string | null = null;
  isDisabled = false;
  onChange = Function
  onTouch = Function

  onInput(value: any) {
    this.value = value.value;
    this.onTouch();
    this.onChange(this.value!);
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
