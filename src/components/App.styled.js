import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e5e5e5;
  border-radius: 60px;
  padding: 30px 20px;
  text-align: center;
  height: calc(100% - 60px);
`;

export const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 8px;
  text-transform: uppercase;
`;


export const toastOptions = {
  // Set default for all toasts
  style: {
    color: 'white',
    boxShadow: '0px 4px 12px 4px rgba(0,0,0,0.5)',
  },

  // Set default for specific types
  success: {
    style: {
      background: `#007aff`,
    },
    iconTheme: {
      primary: 'green',
      secondary: 'white',
    },
  },

  error: {
    style: {
      background: '#007aff',
    },
    iconTheme: {
      primary: 'red',
      secondary: 'white',
    },
  },
};