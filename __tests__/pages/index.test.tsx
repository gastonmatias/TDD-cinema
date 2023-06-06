import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('When home page is mounted', () => {
  
  // GUS_1
  test('the navbar should have the links to: on theathers, coming soon & about', () => {
    
    render(<Home />)

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
})