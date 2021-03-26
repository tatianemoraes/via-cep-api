import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
  align-items: center; 
  align-content: center;
  justify-content: center; 
  flex-direction: column;
  margin-top: 80px;

  label {
    margin-bottom: 0; 
    text-align: 0;
  }

  input + label {
    margin-bottom: 5px;
  }

  .design {
    padding-bottom: 5px;

    label {
      padding-right: 10px;
    }

    input {
      width: 200px; 
      height: 25px;
      border-radius: 4px;
      border: 1px solid #000;
    }
  }
`