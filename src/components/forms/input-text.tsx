import { forwardRef, FC } from 'react';
import styled from '@emotion/styled';

type InputTextProps = {
  id: string;
  label: string;
  type?: string;
  errorMessage?: string;
};

const InputContainer = styled.div({});

const InputText: FC<InputTextProps> = forwardRef<
  HTMLInputElement,
  InputTextProps
>(function InputTextRef(
  { id, label, type = 'text', errorMessage, ...props },
  ref
) {
  return (
    <InputContainer>
      <label id={`${id}_label`} htmlFor={`${id}_input`}>
        {label}
        <input
          ref={ref}
          id={`${id}_input`}
          aria-labelledby={`${id}_label`}
          type={type}
          {...props}
        />
        <p>{errorMessage}</p>
      </label>
    </InputContainer>
  );
});

export default InputText;
