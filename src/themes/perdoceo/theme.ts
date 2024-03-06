import type { TTheme } from '../_types/TTheme'

const PerdoceoTheme: TTheme = {
  title: 'perdoceo',
  div: {
    display: 'flex',
  },
  h1: {
    display: 'flex',
    fontSize: '1.8em',
    margin: '0',
    fontWeight: 'bold',
  },
  h2: {
    display: 'flex',
    fontSize: '1.3em',
    margin: '0',
    fontWeight: 'bold',
  },
  h3: {
    display: 'flex',
    fontSize: '1.1em',
    margin: '0',
    fontWeight: 'bold',
  },
  h4: {
    display: 'flex',
    fontSize: '1em',
    margin: '0',
    fontWeight: 'bold',
  },
  h5: {
    display: 'flex',
    fontSize: '.8em',
    margin: '0',
    fontWeight: 'bold',
  },
  p: {
    display: 'flex',
    fontSize: '.7em',
    margin: '0',
  },
  a: {
    color: '--pec-color-bright',
    textDecoration: 'none',
  },
  input: {
    borderRadius: '3px',
    border: '1px solid --pec-color-bright',
  },
  img: {
    display: 'block',
  },
  span: {
    display: 'flex',
    fontSize: '.9em',
  },
}

export default PerdoceoTheme
