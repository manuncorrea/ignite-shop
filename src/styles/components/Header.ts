import { styled } from "..";

export const ContainerHeader = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  img: {
    cursor: 'pointer'
  },

  button: {
    width: '3rem',
    height: '3rem',
    backgroundColor: '$gray800',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$gray500',

    border: 0,
    cursor: 'pointer'
  }

})