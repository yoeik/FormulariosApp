import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
 

  miFormulario:FormGroup= this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)],],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.ev]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerYoeik]],
    password: ['', [Validators.required,Validators.minLength(6) ]],
    password2: ['', [Validators.required ]],
  },
  {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  // emailErrorMsg: string = '';

  get emailErrorMsg():string {

    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El email es obligatorio'
    }else if (errors?.pattern){
      return 'El formato no es válido'
    } else if(errors?.emailTomado){
      return 'Ese correo ya está en uso'
    }
    return '';
  }

  constructor(private fb:FormBuilder,
              private validatorService: ValidatorService,
              private ev: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Joaquin Gonzalez',
      email: 'test1@test.com',
      username: 'ElRey',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo:string){
    return  this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched
  }
  


  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched
    
  }

}
