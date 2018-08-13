import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { TouchSequence } from '../../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styles: []
})
export class ChatsComponent implements OnInit {
  mensaje = '';
  elemento: any;

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = '')
      .catch((err) => console.error('Error al enviar, ', err));
  }

}
