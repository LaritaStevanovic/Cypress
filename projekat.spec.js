
    it.only('Nav bar menu is visible', () => {
      cy
        .get('#menu').should('be.visible')
    });

    it('Options from Nav bar menu is clickable', () => {
      cy
        .get('.link-top').first().click({force: true})
        .get('.i-tv-audio-video').first().click({force: true})
        .url().should('contain', 'tv-audio-video')
    });

    it('Options from Nav bar menu is clickable', () => {
        cy
          .get('.link-top').first().click({force: true})
          .get('.i-foto-oprema').first().click({force: true})
          .url().should('contain', 'foto-oprema')
          
    });

    it('Options from Nav bar menu is clickable', () => {
      cy
        .get('.link-top').first().click({force: true})
        .get('.i-bela-tehnika').first().click({force: true})
        .url().should('contain', 'bela-tehnika')
        
  });

  it('Options from Nav bar menu is clickable', () => {
    cy
      .get('.link-top').first().click({force: true})
      .get('.i-kuca-i-stan').first().click({force: true})
      .url().should('contain', 'kuca-i-stan')
      
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-mobilni-i-fiksni-telefoni').first().click({force: true})
    .url().should('contain', 'mobilni-i-fiksni-telefoni')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-laptop-i-tablet-racunari').first().click({force: true})
    .url().should('contain', 'laptop-i-tablet-racunari')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-racunari-i-komponente').first().click({force: true})
    .url().should('contain', 'racunari-i-komponente')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-pc-periferije-monitori').first().click({force: true})
    .url().should('contain', 'pc-periferije-monitori')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-stampaci-office').first().click({force: true})
    .url().should('contain', 'stampaci-office')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-mreze-sigurnosna-oprema').first().click({force: true})
    .url().should('contain', 'mreze-sigurnosna-oprema')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-alati-i-basta').first().click({force: true})
    .url().should('contain', 'alati-i-basta')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-auto-moto-oprema').first().click({force: true})
    .url().should('contain', 'auto-moto-oprema')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-gaming-igrice-konzole').first().click({force: true})
    .url().should('contain', 'gaming-igrice-konzole')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-igracke-skolska-i-decija-oprema').first().click({force: true})
    .url().should('contain', 'igracke-skolska-i-decija-oprema')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-lepota-zdravlje-i-moda').first().click({force: true})
    .url().should('contain', 'lepota-zdravlje-i-moda')
    
});

it('Options from Nav bar menu is clickable', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-sportska-oprema-i-fitnes').first().click({force: true})
    .url().should('contain', 'sportska-oprema-i-fitnes')
    
});

it('promenistranicu', () => {
  cy
     .contains('Akcije').click({force: true})
     .url().should('contain', 'filters/product/action/')
    
});

it('promenistranicu', () => {
  cy
     .get('.new-catalog').should('be.visible').click()
     .get('.page-title').should('be.visible')
});

it('phone number', () => {
  cy
      .get('.telephone-fix').should('be.visible').and('contain', '0700 330 330' )
      .get('.telephone-fix.telephone-company').should('be.visible').and('contain', '011/78 56 777')
});

it('where to buy', () => {
  cy
    .get('.where-to-bye').should('be.visible')
    .contains('Gde kupiti').click({force: true})
    .url().should('contain', 'gde-kupiti')
    
});

it('Nacini placanja', () => {
  cy 
    .get('.widget.widget-cms-link-inline').should('be.visible').click()
    .url().should('contain', 'nacini-placanja')

});

it('najcesca pitanja', () => {
  cy
    .get('.widget.widget-cms-link').should('be.visible')
    .contains('Najčešća pitanja').click()
    .url().should('contain', 'najcesca_pitanja')
});

it('logo back to the home page', () => {
  cy
    .get('.logo').should('be.visible').click()
    
});

it('Neuspesna registracija', () => {
  cy
    .get('.welcome-msg').trigger('mouseover')
    .get('.account-log-in').should('contain', 'Prijavi se').click({force: true})
    .url().should('contain' , 'customer/account/login/')
    .get('.btn-register').should('be.visible').click()
    .url().should('contain', 'customer/account/create/')
    .get('#firstname').type('Larita')
    .get('#lastname').type('Stojanovic')
    .get('#email_address').type('stevanovic.larita@gmail.com')
    .get('#is_subscribed').check() 
    .get('#password').type('bonbabonba?')
    .get('#confirmation').type('bonbabonba?')
    .get('#captcha_user_create').type('yB92')
    .get('.btn-primary').contains('Pošalji').click({multiple: true})
    .get('.error-msg').should('be.visible').and('contain', 'Neispravna CAPTCHA.')
    
    
});

it('Adding to cart', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-tv-audio-video').first().click({force: true})
    .url().should('contain', 'tv-audio-video')
    .get('.i.i-arrow').first().click({force: true})
    .url().should('contain', 'tv')
    .get('a[href*="tv-audio-video/tv/televizori"]').first().click({force: true})
    .get('a[href*="tv-audio-video/tv/televizori/televizor-32-led-alpha-32g7nhs-hd-ready-8667899"]').first().click({force: true})
    .get('.button.btn-cart').first().click({force: true})
    .get('.success-msg').should('contain', '32" LED Alpha 32G7NHS, HD Ready je uspešno dodat u Vašu korpu.')
});

it('Adding to cart', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-tv-audio-video').first().click({force: true})
    .url().should('contain', 'tv-audio-video')
    .get('.i.i-arrow').first().click({force: true})
    .url().should('contain', 'tv')
    .get('a[href*="tv-audio-video/tv/digitalni-tv-tuneri.html"]').first().click({force: true})
    .get('a[href*="android-smart-tv-box-gembird-x96-max-s905x2-quad-2gb-16gb-ddr4-8645524.html"]').first().click({force: true})
    .get('.button.btn-cart').first().click({force: true})
    .get('.success-msg').should('contain', 'Android smart TV box Gembird X96 max S905X2 quad 2GB/16GB DDR4 je uspešno dodat u Vašu korpu.')
});

it('Adding to cart', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-tv-audio-video').first().click({force: true})
    .url().should('contain', 'tv-audio-video')
    .get('.i.i-arrow').first().click({force: true})
    .url().should('contain', 'tv')
    .get('a[href*="tv-audio-video/tv/oprema-za-televizore.html"]').first().click({force: true})
    .get('a[href*="antena-sobna-dvb-t-dvb-t2-thomson-ant1418bk-crna-132183-8656694.html"]').first().click({force: true})
    .get('.button.btn-cart').first().click({force: true})
    .get('.success-msg').should('contain', 'Antena sobna DVB-T/DVB-T2 Thomson ANT1418BK, crna 132183 je uspešno dodat u Vašu korpu.')
});

it('Adding to cart', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-tv-audio-video').first().click({force: true})
    .url().should('contain', 'tv-audio-video')
    .get('.i.i-arrow').first().click({force: true})
    .url().should('contain', 'tv')
    .get('a[href*="/tv-audio-video/tv/sredstva-za-ciscenje"]').first().click({force: true})
    .get('a[href*="tv-audio-video/tv/sredstva-za-ciscenje/maramice-za-ciscenje-lcd-monitora-hama-113806-8623971.html"]').first().click({force: true})
    .get('.button.btn-cart').first().click({force: true})
    .get('.success-msg').should('contain', 'Maramice za čišćenje LCD monitora, Hama 113806 je uspešno dodat u Vašu korpu.')
});

it('Clicking on all TVs', () => {
  cy
    .get('.link-top').first().click({force: true})
    .get('.i-tv-audio-video').first().click({force: true})
    .url().should('contain', 'tv-audio-video')
    .get('.i.i-arrow').first().click({force: true})
    .url().should('contain', 'tv')
    .get('a[href*="/tv-audio-video/tv/televizori.html"]').first().click({force: true})
    var niz = cy.get('.item')
    for(let i=0; i<niz.length; i++) {
      niz[i].click()
    }
})
