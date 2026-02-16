# Bootstrap

## Qué es Bootstrap.
Bootstrap es un framework de desarrollo web diseñado para permitir a los desarrolladores iniciar proyectos de manera rápida utilizando una colección de herramientas, componentes y diseños predefinidos. Es un potente conjunto de herramientas frontend repleto de funciones. Crea cualquier proyecto, desde el prototipo hasta la producción, en minutos.

1. Columnas de Ancho Automático (Equitativas) solo usas la clase .col, Bootstrap dividirá el espacio de forma equitativa entre todas las columnas que pongas dentro de la fila.
````html
<div class="container border p-3">
  <div class="row">
    <div class="col bg-primary text-white p-3 border">Columna 1 de 3</div>
    <div class="col bg-primary text-white p-3 border">Columna 2 de 3</div>
    <div class="col bg-primary text-white p-3 border">Columna 3 de 3</div>
  </div>
</div>
````

2. Columnas con Ancho Específico (Suma de 12)

Puedes definir qué tan ancha es cada columna usando números del 1 al 12. Esto es útil para diseños tipo "Barra lateral y contenido principal".

````html
<div class="container border p-3 mt-3">
  <div class="row">
    <div class="col-4 bg-secondary text-white p-3">Sidebar (col-4)</div>
    <div class="col-8 bg-light border p-3">Contenido Principal (col-8)</div>
  </div>
</div>
````
3. Grilla Responsiva (Uso de Breakpoints)
Esta es la configuración más importante. Le dice a Bootstrap: "En pantallas pequeñas ocupa todo el ancho, pero en pantallas grandes divídete".

**col-12:** Ocupa todo el ancho en móviles.
**col-md-6**: Se pone a la mitad en tablets.
**col-lg-3:** Se divide en 4 columnas en computadoras.

````html
<div class="container border p-3 mt-3">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3 bg-info p-3 border">Caja 1</div>
    <div class="col-12 col-md-6 col-lg-3 bg-info p-3 border">Caja 2</div>
    <div class="col-12 col-md-6 col-lg-3 bg-info p-3 border">Caja 3</div>
    <div class="col-12 col-md-6 col-lg-3 bg-info p-3 border">Caja 4</div>
  </div>
</div>      </div>
    </div>
  </div>
</div>
````