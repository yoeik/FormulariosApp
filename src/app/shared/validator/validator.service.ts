import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public  nombreApellidoPattern: string= '([a-zA-Z]+) ([a-zA-Z]+)';
  public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";




  constructor() { }

   noPuedeSerYoeik (control: FormControl):ValidationErrors | null{
    const valor= control.value?.trim().toLowerCase(); 
    if(valor === 'yoeik'){
     return {
       noYoeik: true 
     }
    }
    return null;
    }

    camposIguales(campo1: string, campo2:string){
      return (FormGroup:AbstractControl): ValidationErrors | null => {

        const password = FormGroup.get(campo1)?.value;
        const password2 = FormGroup.get(campo2)?.value;      
        
        
        if( password !==password2){
          FormGroup.get(campo2)?.setErrors({NoIguales: true})
          return {NoIguales:true}
        }
        FormGroup.get(campo2)?.setErrors(null)
        return null;
      }
    }

}
