import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
 

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080TI'),
  //   precio     : new FormControl(2500),
  //   existencias: new FormControl(5)

  // })

  miFormulario: FormGroup= this.fb.group({
    nombre    : [, [Validators.required, Validators.minLength(3)],],
    precio    : [, [Validators.required,Validators.min(0)]],
    existencias: [, [Validators.required,Validators.min(0)]]
  })


 constructor(private fb:FormBuilder){}

 ngOnInit(){
  this.miFormulario.reset({
    nombre: 'RTX 4080ti',
    precio: 2500,
    exitencias: 5
  })
   
 }

campoEsValido(campo: string){
 return this.miFormulario.controls[campo].errors && 
        this.miFormulario.controls[campo].touched
}

guardar(){

  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return;
  }

  console.log(this.miFormulario.value);
  this.miFormulario.reset();
  
}
}