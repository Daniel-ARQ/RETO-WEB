import { pageProvider } from "@testing/wdio-page-objects";
import { AddProduct } from "./AddProduct.page";
import { dashboardPage } from "./dashboard.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class AddProductStep {
  private AddProduct: AddProduct;
  private dashboardPage: dashboardPage;

  constructor() {
    this.AddProduct = new AddProduct();
    this.dashboardPage = new dashboardPage();
  }

  @Given(/^Como usuario de la pagina Exito! me encuentro en la pagina principal$/)
  navigateToLoginPage() {
    pageProvider.go(AddProduct);
  }

  @When(/^doy click al menú desplegable de Hamburguesa donde se encuentran las categorías$/)
  clickHamburguesaMenu() {
    this.AddProduct.clickHamburguesaMenu();
  }

  @When(/^daremos click en la categoria juguetes$/)
  clickcategToy() {
    this.AddProduct.clickcategToy();
  }

  @When(/^seguido daremos click en Dinosaurios y Animales$/)
  clickdinoAnimals() {
    this.AddProduct.clickdinoAnimals();
  }

  @When(/^nos mostrara los productos relacionados con dicha categoria$/)
  verifylistProducts() {
    expect(this.dashboardPage.obtainText()).to.be.true;
  }

  @When(/^añadimos aleatoriamente tres productos al carrito de compras$/)
  verifySuccessfulAdd() {
    this.AddProduct.selectRandomProducts()
  }

  @Then(/^los productos elegidos anteriormente han sido añadidos correctamente$/)
  verifySuccessAddcart() {
    expect(this.dashboardPage.obtainCartText()).to.be.true;
  }


}
