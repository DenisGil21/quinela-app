import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  public apuestaForm = this.fb.group({
    equipo1: ['', Validators.required],
    equipo2: ['', Validators.required],
    ganador: ['Empate', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  apostar(): void {
    console.log(this.apuestaForm.value);
    
  }

}
