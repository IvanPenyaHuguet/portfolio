import styled from '@emotion/styled';
import { FC, forwardRef } from 'react';

type InputTextProps = {
  id: string;
  label: string;
  rows?: number;
  cols?: number;
  errorMessage?: string;
};

const InputContainer = styled.div({});

const TextArea = styled.textarea({
  resize: 'none'
});

const InputTextArea: FC<InputTextProps> = forwardRef<
  HTMLTextAreaElement,
  InputTextProps
>(function InputTextAreaRef(
  { id, label, rows, cols, errorMessage, ...props },
  ref
) {
  return (
    <InputContainer>
      <label id={`${id}_label`} htmlFor={`${id}_input`}>
        {label}
        <TextArea
          ref={ref}
          id={`${id}_input`}
          aria-labelledby={`${id}_label`}
          rows={rows}
          cols={cols}
          {...props}
        />
        <p>{errorMessage}</p>
      </label>
    </InputContainer>
  );
});

export default InputTextArea;
