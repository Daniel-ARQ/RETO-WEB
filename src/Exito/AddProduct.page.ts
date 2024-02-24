import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  amburguesa: `button[aria-label='Collapse menu']`,
  categToy: `(//div[@data-link-content='true'])[12]`,
  dinoAnimals: `//a[normalize-space()='Dinosaurios y animales']`,
  dinoProducts: `//ul[@data-fs-product-grid='true']`,
  bottonAdd: `//button[@aria-label='Cart toggle button']`,
  shopingcar: `//div[@class='exito-checkout-io-0-x-listContainer']`,
  scrolling: `ul[data - fs - product - grid= 'true']`,
  productList: `//ul[@data-fs-product-grid='true']/li`,
  addToCartButton: `(//span[contains(text(),'Agregar')])[2]`
}

@PageContext({
  path: '/',
  wrapper: 'body'//Nodo Padre
})

export class AddProduct extends Page {

  clickHamburguesaMenu() {
    $(selectors.amburguesa).click();
    browser.pause(5000)
  }
  clickcategToy() {
    $(selectors.categToy).click();
    browser.pause(5000)
  }
  clickdinoAnimals() {
    $(selectors.dinoAnimals).click();
    browser.pause(5000)
  }


  selectRandomProducts() {
    const productList = $$(selectors.productList); // Obtener todos los productos
    const randomProductIndexes = this.generateRandomIndexes(productList.length, 3); // Generar 3 índices aleatorios
    browser.pause(5000)

    // Seleccionar aleatoriamente 3 productos
    for (const index of randomProductIndexes) {
      const product = productList[index];
      product.$(selectors.addToCartButton).click(); // Agregar producto al carrito
    }
    browser.pause(5000)

    // Ir al carrito de compras
    $(selectors.bottonAdd).click();
    browser.pause(5000)
  }

  // Función para generar índices aleatorios únicos
  generateRandomIndexes(max: number, count: number): number[] {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }
}




