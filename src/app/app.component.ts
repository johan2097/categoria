import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoriaModel } from './models/categoria';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categoriaForm!: FormGroup;
  categoriaObj: CategoriaModel = new CategoriaModel();
  categoriaList: CategoriaModel[] = [];

  constructor() {
    this.createForm();
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const oldData = localStorage.getItem("CatData");
      if (oldData != null) {
        this.categoriaList = JSON.parse(oldData);
      }
    }
  }

  createForm() {
    this.categoriaForm = new FormGroup({
      catId: new FormControl(this.categoriaObj.catId),
      name: new FormControl(this.categoriaObj.name),
      subcat: new FormControl(this.categoriaObj.subcat)
    });
  }

  onSave() {
    if (typeof window !== 'undefined') {
      const oldData = localStorage.getItem("CatData");
      if (oldData != null) {
        const parseData = JSON.parse(oldData);
        this.categoriaForm.controls['catId'].setValue(parseData.length + 1);
      } else {
        this.categoriaForm.controls['catId'].setValue(1); 
      }

      console.log(this.categoriaList);
     localStorage.setItem("CatData", JSON.stringify(this.categoriaList));
    }
  }
}