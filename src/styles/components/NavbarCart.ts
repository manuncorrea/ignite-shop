import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "..";

export const NavbarCartContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "30rem",
  background: "$gray800",
  padding: "3rem",
  paddingTop: "4.5rem",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",

  h2: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "2rem",
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    flex: 1,
    overflowY: "auto",
  },
});

export const NavbarCartCartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray500",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",

  cursor: 'pointer',

  '&:hover': {
    color: "$gray600",
  }
});

export const NavbarCartContainer = styled('div', {
  width: "100%",

  display: "flex",
  alignItems: "center",

  gap: "1.25rem",
  height: "5.8125rem",
})

export const NavbarContentImage =  styled('div', {
  width: '6.371rem',
  height: '5.813rem',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: 8
})

export const NavbarCartDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  

  p: {
    display: 'flex',
    alignItems: 'center',

    fontSize: "$md",
    color: "$gray300",
    fontWeight: 400,
    lineHeight: '160%',
  },

  strong: {
    lineHeight: '160%',
    fontSizes: '$md',
    color: "$gray100",
    fontWeight: 700,
  },

  button: {
    background: 'transparent',
    color: "$green500",
    fontWeight: 700,
    fontSize: "1rem",
    border: 'none',
    marginTop: "auto",
    width: "max-content",
    lineHeight: '160%',

    cursor: 'pointer'
  }
})

export const NavbarCartFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '1.25rem 2rem',
    gap: '0.625rem',

    border: 'none',
    borderRadius: 8,
    background: '$green500',

    fontWeight: 700,
    fontSize: "$md",
    color: "$gray100",


    cursor: 'pointer',

    
    '&:hover': {
      background: '$green300',
      transition: '0.2s'
    }

  }
})


export const NavbarCartFooterSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  gap: '0.5rem',
  marginBottom: '3.438rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      color: "$gray300",
      fontSize: '$md',
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },

      p: {
        color: "$gray100",
        fontSize: "$xl",
      },
    },
  }
})


