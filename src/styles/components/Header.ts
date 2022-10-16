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

  

})

export const ButtonCheckoutNavbar =  styled('button', {
  position: 'relative',
  padding: '0.625rem',
  
  backgroundColor: '$gray800',
  color: '$white',
  
  border: 0,
  borderRadius: 6,
  
  lineHeight: 0,

  cursor: 'pointer',


  span: {
    position: 'absolute',
    padding: '0.313rem',

    borderRadius: '50%',
    border: '2px solid $gray900',

    backgroundColor: '$green300',

    top: -6,
    lineHeight: 0.5,
  }
})