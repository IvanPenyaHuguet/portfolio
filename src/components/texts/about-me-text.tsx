import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const TextContainer = styled.article(({ theme }) => ({
  color: theme.colors.white,
  padding: theme.spacings.xxlarge
}));

const Title = styled.h2(({ theme }) => ({
  fontFamily: theme.fonts.title,
  letterSpacing: '0.05em',
  fontSize: theme.fonts.size.largest,
  lineHeight: theme.fonts.line.largest,
  fontWeight: theme.fonts.weight.bold,
  marginBottom: theme.spacings.large,
  [theme.media.xs]: {
    fontSize: theme.fonts.size.xxxlarge,
    lineHeight: theme.fonts.line.xxxlarge
  },
  [theme.media.sm]: {
    fontSize: theme.fonts.size.largest,
    lineHeight: theme.fonts.line.largest
  }
}));

const Text = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.text,
  textAlign: 'justify',
  fontSize: theme.fonts.size.xlarge,
  lineHeight: theme.fonts.line.xlarge,
  fontWeight: theme.fonts.weight.normal,
  [theme.media.xs]: {
    fontSize: theme.fonts.size.medium,
    lineHeight: theme.fonts.line.medium
  },
  [theme.media.md]: {
    fontSize: theme.fonts.size.large,
    lineHeight: theme.fonts.line.large
  }
}));

const Paragraph = styled.p(({ theme }) => ({
  textIndent: '2rem',
  marginBottom: theme.spacings.xlarge,
  [theme.media.xs]: {
    marginBottom: theme.spacings.large
  },
  [theme.media.sm]: {
    marginBottom: theme.spacings.large
  }
}));

export default function AboutMeText() {
  const { t } = useTranslation('common');
  return (
    <TextContainer>
      <Title>{t('section.aboutme.title')}</Title>
      <Text>
        <Paragraph>{t('section.aboutme.first')}</Paragraph>
        <Paragraph>{t('section.aboutme.second')}</Paragraph>
        <Paragraph>{t('section.aboutme.third')}</Paragraph>
      </Text>
    </TextContainer>
  );
}
