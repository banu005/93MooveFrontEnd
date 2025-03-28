import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CoursService} from '../../../services/cours.service';
import {Cours} from '../../../models/cours.model';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';



@Component({
  selector: 'app-cours-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './cours-edit.component.html',
  styleUrl: './cours-edit.component.css'
})

export class CoursEditComponent {
  id!:number;
  cours!:Cours;
  form!: FormGroup;
  constructor(private coursService: CoursService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['coursId'];
    this.coursService.findById(this.id).subscribe((data: Cours)=>{
      this.cours = data;
      this.form = new FormGroup({
        nom: new FormControl(this.cours.nom, [Validators.required]),
        style: new FormControl(this.cours.description, Validators.required)
      });
    });
  }
  submit(){
    this.coursService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/cours']);
    })
  }
}
