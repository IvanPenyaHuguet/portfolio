import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { IntroductionChangeableText } from '@components/index';

const Text = styled.article(({ theme }) => ({
  color: theme.colors.black,
  zIndex: 50,
  position: 'absolute',
  left: 0,
  bottom: 0,
  [theme.media.smland]: {
    position: 'static'
  },
  [theme.media.mdland]: {
    position: 'static'
  }
}));

const Paragraph = styled.h4(({ theme }) => ({
  fontFamily: theme.fonts.code,
  margin: 0,
  lineHeight: 2,
  fontSize: '4.5rem',
  fontWeight: theme.fonts.weight.extrabold,
  letterSpacing: '0.05em',
  [theme.media.xs]: {
    fontSize: theme.fonts.size.xxlarge
  },
  [theme.media.md]: {
    fontSize: theme.fonts.size.xxxlarge
  },
  [theme.media.smland]: {
    fontSize: theme.fonts.size.xxlarge
  },
  [theme.media.mdland]: {
    fontSize: theme.fonts.size.largest
  }
}));

export default function IntroductionText() {
  const { t } = useTranslation();
  return (
    <Text>
      <Paragraph>{t('section.introduction.firstintline')}</Paragraph>
      <IntroductionChangeableText />
    </Text>
  );
}
