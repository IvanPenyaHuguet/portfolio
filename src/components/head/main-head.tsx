import {Helmet} from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function MainHead() {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t('head.title')}</title>
      <meta name='description' content={t('head.description')} />
      <link
        id='favicon'
        rel='icon'
        href='favicon/favicon.gif'
        type='image/gif'
      />
    </Helmet>
  );
}
