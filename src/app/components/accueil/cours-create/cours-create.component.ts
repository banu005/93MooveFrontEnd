import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {CoursService} from '../../../services/cours.service';
@Component({
  selector: 'app-cours-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './cours-create.component.html',
  styleUrl: './cours-create.component.css'
})
export class CoursCreateComponent {
  form!: FormGroup;
  constructor(private coursService: CoursService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      style: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.coursService.addCours(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/cours']);
    })
  }
}
