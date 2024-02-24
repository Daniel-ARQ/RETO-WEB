@AddProduct

Feature: Añadir producto al Carrito de Compras
  Scenario: Se añaden productos de forma aleatoria al Carrito
    Given Como usuario de la pagina Exito! me encuentro en la pagina principal
    And doy click al menú desplegable de Hamburguesa donde se encuentran las categorías
    And daremos click en la categoria juguetes
    And seguido daremos click en Dinosaurios y Animales
    And nos mostrara los productos relacionados con dicha categoria
    When añadimos aleatoriamente tres productos al carrito de compras
    Then los productos elegidos anteriormente han sido añadidos correctamente


