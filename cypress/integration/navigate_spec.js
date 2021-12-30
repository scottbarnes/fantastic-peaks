describe('Connect and navigate', () => {
  it('loads the regions page', () => {
    // Root specified in development.yml.
    cy.visit('/')
    // CSS makes this display as all caps, but the case must match the source.
    cy.contains('Browse by region').click()

    // Should be in /regions now
    cy.url().should('include', '/regions')
    cy.contains('The Kaweahs')
  })

  it('navgates to copper pass', () => {
    cy.visit('/regions')
    cy.contains('The Kaweahs').click()
    cy.url().should('include', '/regions/the-kaweahs')
    cy.contains('Copper Pass').click()
    cy.url().should('include', '/passes/copper-pass')
    // Test class and description attributes.
    cy.contains('Class 2')
    cy.contains('Cloud and Deadman')
    // Ensure metaDescription() works.
    cy.get('meta[name="description"]')
      .should("have.attr", "content", "Copper Pass: Copper Pass just north of the head of the divide between Cloud and Deadman Canyons takes honors for roughness. For a way it traverses an elevated...")
  })

  it('navigates to table mountain, then back via breadcrumbs', () => {
    cy.visit('/regions')
    cy.contains('The Kaweahs').click()
    cy.url().should('include', '/regions/the-kaweahs')
    cy.contains('Table Mountain').click()
    cy.url().should('include', '/peaks/table-mountain')
    // Check peak content
    cy.contains('Paul Shoup')
    cy.contains('North face')
    cy.contains('Table Mountain (13,646 ft.)')
    // Check the breadcrumbs
    cy.contains('The Kaweahs and the Great Western Divide').click()
    cy.contains('Copper Pass')
    cy.contains('Regions').click()
    cy.get('a[href*="/regions"]').click({ multiple: true })
  })

})
