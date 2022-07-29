import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputText, InputTextArea } from '@components/index';
import { useTranslation } from 'react-i18next';

interface IFormInputs {
  name: string;
  email: number;
  message: string;
}

const FormContainer = styled.div({});

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(ValidationSchema)
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <FormContainer>
      {/* eslint-disable-next-line */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
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
          {/* <input {...register('name')} />
          <p>{errors.name?.message}</p> */}
        </fieldset>
      </form>
    </FormContainer>
  );
}
