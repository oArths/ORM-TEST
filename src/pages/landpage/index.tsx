import * as S from "./styles.tsx";
import Header from "src/template/header/index.tsx";
import { Contact } from "src/template/contact/index.tsx";
import { Footer } from "src/template/footer/index.tsx";
import { Home } from "src/template/home/index.tsx";
import { Community } from "src/template/community/index.tsx";
import { AboutUs } from "src/template/aboutUs/index.tsx";
import { Services } from "src/template/services/index.tsx";
import { Ecosystem } from "src/template/ecosystem/index.tsx";

function LandPage() {
  return (
    <S.Main>
      <S.Section id='inicio'>
      <Header />
      <Home />
      </S.Section>
      <Community  />
      <AboutUs />
      <Services />
      <Ecosystem />
      <Contact />
      <Footer />
    </S.Main>
  );
}

export default LandPage;
