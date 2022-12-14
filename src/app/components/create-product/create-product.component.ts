import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  formsField = {
    title: '',
  };
  public form = new FormGroup({
    title: new FormControl(this.formsField.title, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get title() {
    return this.form.value.title as string;
  }
  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
