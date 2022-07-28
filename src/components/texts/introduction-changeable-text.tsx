import { useState } from 'react';
import { useInterval } from '@hooks/index';
import { TextGhostAnimation } from '@components/index';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const Wrapper = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.code,
  letterSpacing: '0.025em',
  fontSize: theme.fonts.size.largest,
  lineHeight: theme.fonts.line.largest,
  [theme.media.mobile]: {
    fontSize: theme.fonts.size.xxlarge,
    lineHeight: theme.fonts.line.xxlarge
  },
  [theme.media.smland]: {
    fontSize: theme.fonts.size.xlarge,
    lineHeight: theme.fonts.line.xlarge
  },
  [theme.media.mdland]: {
    fontSize: theme.fonts.size.xxlarge,
    lineHeight: theme.fonts.line.largest
  }
}));
const InitialWords = styled.span({});

export default function IntroductionChangeableText() {
  const { t } = useTranslation();
  const phrasesArray = [
    t('section.introduction.secondline.innovation'),
    t('section.introduction.secondline.motivation'),
    t('section.introduction.secondline.commitment'),
    t('section.introduction.secondline.overcoming'),
    t('section.introduction.secondline.cooperation')
  ];
  const [itemShowed, setItemShowed] = useState(phrasesArray[0].toUpperCase());
  const [count, setCount] = useState(1);

  useInterval(() => {
    setItemShowed(
      phrasesArray[Math.ceil(count % phrasesArray.length)].toUpperCase()
    );
    setCount(count + 1);
  }, 6000);

  return (
    <Wrapper>
      <InitialWords>
        {t('section.introduction.secondline.firstwords').toUpperCase()}
      </InitialWords>
      <TextGhostAnimation text={itemShowed} />
    </Wrapper>
  );
}
