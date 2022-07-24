import {Helmet} from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function MainHead() {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t('navbar.nav.title')}</title>
      <meta
        name="description"
        content="Portfolio del desarrollador de software Iván Peña Huguet, especializado en JavaScript y Java"
      />
      <link id="favicon" rel="icon" href="favicon/favicon.gif" />
    </Helmet>
  );
}
