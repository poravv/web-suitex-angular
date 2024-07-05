import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  searchText = '';
  datos = [
    { image: "assets/images/suitex/uniformes-corp-blusa-blanca-clasica.png", name: "Camisa Dama", size: 230, href: 'https://wa.me/595993645127', detail: ['-Oxford Oriente', '-Oxford Premium', '-T.C Premium'] },
    { image: "assets/images/suitex/CAMISA-BIG.png", name: "Camisa Dama", size: 200, href: 'https://wa.me/595993645127', detail: ['-Oxford Oriente', '-Oxford Premium', '-T.C Premium'] },
    { image: "assets/images/suitex/camisa-roja.png", name: "Camisa Caballero", size: 200, href: 'https://wa.me/595993645127', detail: ['-Oxford Oriente', '-Oxford Premium', '-T.C Premium'] },
    { image: "assets/images/suitex/camisa1.webp", name: "Camisa Caballero", size: 300, href: 'https://wa.me/595993645127', detail: ['-Oxford Oriente', '-Oxford Premium', '-T.C Premium'] },

    { image: "assets/images/suitex/pantaloncaballero1.webp", name: "Pantalon de vestir caballero", size: 300, href: 'https://wa.me/595993645127', detail: ['-CN'] },
    { image: "assets/images/suitex/pantaloncaballero2.webp", name: "Pantalon de vestir caballero", size: 320, href: 'https://wa.me/595993645127', detail: ['-CN'] },
    { image: "assets/images/suitex/pantalonmujer1.png", name: "Pantalon de vestir dama", size: 200, href: 'https://wa.me/595993645127', detail: ['-CN'] },
    { image: "assets/images/suitex/pantalonmujer2.png", name: "Pantalon de vestir dama", size: 200, href: 'https://wa.me/595993645127', detail: ['-CN'] },

    { image: "assets/images/suitex/remerapolo2.jpg", name: "Remera tipo polo", size: 250, href: 'https://wa.me/595993645127', detail: ['-Pique Brasilero', '-Pique Peruano'] },
    { image: "assets/images/suitex/remera2.png", name: "Remera tipo polo", size: 250, href: 'https://wa.me/595993645127', detail: ['-Pique Brasilero', '-Pique Peruano'] },
    { image: "assets/images/suitex/remera3.png", name: "Remera tipo polo", size: 250, href: 'https://wa.me/595993645127', detail: ['-Pique Brasilero', '-Pique Peruano'] },
    { image: "assets/images/suitex/remeradama1.png", name: "Remera tipo polo", size: 250, href: 'https://wa.me/595993645127', detail: ['-Pique Brasilero', '-Pique Peruano'] },

    { image: "assets/images/suitex/pantaloncarp1.png", name: "Pantalon carpintero", size: 300, href: 'https://wa.me/595993645127', detail: ['-Sarga media', '-Sarga pesada'] },
    { image: "assets/images/suitex/pantaloncarp2.png", name: "Pantalon carpintero", size: 300, href: 'https://wa.me/595993645127', detail: ['-Sarga media', '-Sarga pesada'] },
    { image: "assets/images/suitex/pantaloncarp3.png", name: "Pantalon carpintero", size: 150, href: 'https://wa.me/595993645127', detail: ['-Sarga media', '-Sarga pesada'] },
    { image: "assets/images/suitex/pantaloncarp4.png", name: "Pantalon carpintero", size: 250, href: 'https://wa.me/595993645127', detail: ['-Sarga media', '-Sarga pesada'] },

    { image: "assets/images/suitex/campind4.png", name: "Campera", size: 250, href: 'https://wa.me/595993645127', detail: ['-Nylon Impermeable', '-Nylon Impermeable fino sin ruido'] },
    { image: "assets/images/suitex/campind1.png", name: "Campera", size: 400, href: 'https://wa.me/595993645127', detail: ['-Nylon Impermeable', '-Nylon Impermeable fino sin ruido'] },
    { image: "assets/images/suitex/campind2.png", name: "Campera", size: 300, href: 'https://wa.me/595993645127', detail: ['-Nylon Impermeable', '-Nylon Impermeable fino sin ruido'] },
    { image: "assets/images/suitex/campind3.png", name: "Campera", size: 250, href: 'https://wa.me/595993645127', detail: ['-Nylon Impermeable', '-Nylon Impermeable fino sin ruido'] },

  ];

  datosBuscados=this.datos;

  filteredItems() {
    console.log("Entra en ")
    this.datosBuscados = this.datos.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
