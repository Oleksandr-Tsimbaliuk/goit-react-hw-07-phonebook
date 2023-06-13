import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 20px auto 25px;
  gap: 16px;
  border: 1px solid;
  border-radius: 15px;

  .form-label {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-btn {
    border: none;
    background: #000;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
