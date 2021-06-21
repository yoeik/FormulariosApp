import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre:string;
  favoritos:Favorito []
}
interface Favorito {
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

@ViewChild('miFormulario')miFormulario!:NgForm;

  nuevoJuego: string ='';
  persona:Persona = {
    nombre:'Joaquin',
    favoritos: [
      {id:1, nombre: 'Dota 2'},
      {id:2, nombre: 'Valorant'}
      
    ]
  }

  guardar(){
 
  }
  agregarJuego(){
    const nuevoFavorito: Favorito={
      id:this.persona.favoritos.length +1,
      nombre: this.nuevoJuego 
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego= '';
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
}
