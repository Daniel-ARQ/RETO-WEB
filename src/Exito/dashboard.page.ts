import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
  categoryTextField: `h1[data-fs-title-seo='true']`,
  CartBuild: `.exito-checkout-io-0-x-pageTitle`
};

@PageContext({
  path: '/',
  wrapper: `body`, //Padre  o nodo principal
})

export class dashboardPage extends Page {



  obtainText() {
    $(selectors.categoryTextField).waitForDisplayed(10000)
    $(selectors.categoryTextField).scrollIntoView();
    return $(selectors.categoryTextField).isExisting();
  }

  obtainCartText() {
    $(selectors.CartBuild).waitForDisplayed(10000)
    $(selectors.CartBuild).scrollIntoView();
    return $(selectors.CartBuild).isExisting();
  }
}



