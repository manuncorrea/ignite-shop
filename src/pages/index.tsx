import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocktseat',
  borderRadius: 6,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  }
})

export default function Home() {
  return (
    <Button>Enviary <span>teste</span></Button>
  )
}
