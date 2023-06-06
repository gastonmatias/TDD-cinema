import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('When home page is mounted', () => {
  
  beforeEach(() => render(<Home/>))

  // GUS_1
  test('the navbar should have the links to: on theathers, coming soon & about', () => {
    
    // identifica navbar
    const navElement = screen.getByRole('navigation'); // Obtener el elemento <nav>
    
    // identifica links
    const onTheathersLink = screen.queryByText(/On Theathers/i, { selector: 'a[id="a-ontheathers-desktop"]' }); // Buscar el elemento <a> por el texto y el id
    const comingSoonLink  = screen.queryByText(/Coming Soon!/i, { selector: 'a[id="a-comingsoon-desktop"]' }); 
    const aboutLink       = screen.queryByText(/About/i,        { selector: 'a[id="a-about-desktop"]' }); 
  
    // Verificar que el elemento <a> está dentro del elemento <nav>
    expect(onTheathersLink?.closest('nav')).toBe(navElement); 
    expect(comingSoonLink?. closest('nav')).toBe(navElement); 
    expect(aboutLink?.      closest('nav')).toBe(navElement);      

  })

  //GUS_2
  test('there should be the sections "on theathers" and "coming soon"', () => {

    const onTheathersHeading = screen.getByRole('heading',{name:/On Theathers/i})
    const comingSoonHeading = screen.getByRole('heading',{name:/Coming Soon/i})
    
    expect(onTheathersHeading).toBeInTheDocument()
    expect(comingSoonHeading).toBeInTheDocument()
  })

  //GUS_2.1
  test('the "on theathers" section must have at least 5 movies', () => {

    const onTheathersSection = screen.getByTestId('onTheathers'); // Obtener el elemento padre por su atributo data-testid
  
    const onTheathersMovies = onTheathersSection.getElementsByTagName('div'); // Obtener todos los elementos <div> dentro del elemento padre
    
    expect(onTheathersMovies.length).toBeGreaterThanOrEqual(5); // Verificar que haya al menos 5 elementos
  })
})