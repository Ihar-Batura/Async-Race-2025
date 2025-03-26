import createHeader from '../components/header';
import createMain from '../components/main';
import createFooter from '../components/footer';

async function createHomePage() {
  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const footer: HTMLElement = createFooter();

  body.append(header, main, footer);
}

export default createHomePage;
