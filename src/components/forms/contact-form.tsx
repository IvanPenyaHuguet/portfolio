import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormspark } from '@formspark/use-formspark';
import Botpoison from '@botpoison/browser';
import * as yup from 'yup';
import { InputText, InputTextArea, Button } from '@components/index';
import { useTranslation } from 'react-i18next';

const FORMSPARK_FORM_ID = import.meta.env.VITE_FORMSPARK_FORM_ID;
const botpoison = new Botpoison({
  publicKey: import.meta.env.VITE_BOTPOISON_PUBLIC_KEY
});

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const FormContainer = styled.div({});

const Formfieldset = styled.fieldset(({ theme }) => ({
  backgroundColor: theme.colors.white,
  border: 'none',
  boxShadow: theme.shadows.normal
}));

const ValidationSchema = yup
  .object({
    email: yup.string().required().email(),
    name: yup
      .string()
      .required()
      .min(2, 'Minimum 3 letters')
      .max(30, 'Maximum 30 digits'),
    message: yup.string().required()
  })
  .required();

export default function ContactForm() {
  const { t } = useTranslation();
  const [submit] = useFormspark({
    formId: FORMSPARK_FORM_ID
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(ValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: IFormInputs) => {
    const { solution } = await botpoison.challenge();
    await submit({
      email: data.email,
      name: data.name,
      message: data.message,
      _email: {
        from: data.name,
        subject: 'New Message Portfolio Contact Form from ' + data.email
      },
      _botpoison: solution
    });
  };

  return (
    <FormContainer>
      {/* eslint-disable-next-line */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Formfieldset>
          <legend className='sr-only'>{t('contact.legend')}</legend>
          <InputText
            type='email'
            id='email'
            label={t('contact.labels.email')}
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          <InputText
            id='name'
            label={t('contact.labels.name')}
            errorMessage={errors.name?.message}
            {...register('name')}
          />
          <InputTextArea
            id='message'
            label={t('contact.labels.message')}
            errorMessage={errors.message?.message}
            {...register('message')}
          />
          <Button type='submit'>{'Submit'}</Button>
        </Formfieldset>
      </form>
    </FormContainer>
  );
}
