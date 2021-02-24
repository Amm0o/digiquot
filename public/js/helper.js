// NavBAR
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const login = document.querySelector('.login');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

const userLang = navigator.language || navigator.userLanguage;
//alert('The language is: ' + userLang);
let activeService = '';

let serviceData = {
  service: '',
  country: '',
  client: {
    name: '',
    phone: '',
    email: '',
    message: '',
  },
  logo: {
    tipologia: '',
  },
  website: {
    pages: '',
    form: '',
    cert: '',
    domainHosting: '',
    emails: '',
    langs: '',
  },
  onlineStore: {
    form: '',
    cert: '',
    domainHosting: '',
    emails: '',
    langs: '',
    payment: '',
    billing: '',
  },
  socialNetwork: {
    socialNetworks: '',
    posts: '',
    interaction: '',
    publicityManagment: '',
  },
  seo: {
    revision: '',
    improvement: '',
    contentCreation: '',
    langs: '',
  },
  googleAds: {
    countries: '',
    management: '',
    reports: '',
  },
  cyber: {
    secCert: '',
    pentesting: '',
    renew: '',
    simulate: '',
  },
  freelancer: {
    type: 'Freelancer',
    quant: '',
    cost: '',
  },
  agency: {
    type: 'Agency',
    quant: '',
    cost: '',
  },
};

// Proximo Function
function proximo(previouseScetion, nextSection, button, checkField) {
  $(`${button}`).click(() => {
    if (checkField) {
      $(`.${previouseScetion}`).addClass('hide');
      $(`.${nextSection}`).removeClass('hide');
      fillTracker('step-status3', serviceData.logo.tipologia);
    }
  });
}

// Anterior Button function
function anterior(currentSection, previouseSection, button) {
  $(button).click(() => {
    $(currentSection).addClass('hide');
    $(previouseSection).removeClass('hide');
  });
}

// Tracker fill Step3
function fillTracker(step, data) {
  $('.status-step3').removeClass('hide');
  document.getElementById(step).innerHTML = `Data: ${data}`;
}

// Function to get Values and continue
function getValueSelect(
  select,
  button,
  data,
  obj,
  currentSection,
  nextSection
) {
  $(button).click(() => {
    for (let i = 0; i < select.length; i++) {
      obj[data[i]] = $(select[i]).val();
    }

    const result = Object.values(obj);
    const result2 = result.join(' | ');
    if (result.includes(null)) {
      alert('Fill all the fields pls');
    } else {
      $(currentSection).addClass('hide');
      $(nextSection).removeClass('hide');
      fillTracker('step-status3', result2);
    }
    console.log(obj);
  });
}

function getValueSelect2(
  select,
  button,
  data,
  obj,
  currentSection,
  nextSection
) {
  $(button).click(() => {
    for (let i = 0; i < select.length; i++) {
      obj[data[i]] = $(select[i]).val();
    }

    const result = Object.values(obj);
    if (result.includes(null)) {
      alert('Fill all the fields pls');
    } else {
      $(currentSection).addClass('hide');
      $(nextSection).removeClass('hide');
    }
    console.log(obj);
  });
}

// Function Post service data
async function sendService(data) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`/api/v1/service/${serviceData.service}`, options);
}

// Function to fill tracker
$('#continuar-step-1').click(() => {
  if (serviceData.service) {
    $('.services').addClass('hide');
    $('#simulator-title').addClass('hide');
    $('.services-block2').addClass('hide');
    $('.container-simulator').addClass('launcher');
    $('.container-simulator').removeClass('container-simulator');
    $('.step2').removeClass('hide');
    $('.wrapper').removeClass('hide');
    $('.status-step1').removeClass('hide');
    document.getElementById(
      'step-status1'
    ).innerHTML = `Service: ${serviceData.service}`;
  }
});

$('#continuar-step-2').click(() => {
  if (serviceData.country) {
    $('.wrapper').removeClass('hide');
    $('.step2').addClass('hide');
    if (serviceData.service === 'Logotipo') {
      $('.logotipo').removeClass('hide');
      activeService = '.logotipo';
    } else if (serviceData.service === 'Website') {
      $('.website').removeClass('hide');
      activeService = '.website';
    } else if (serviceData.service === 'Online Store') {
      $('.onlineStore').removeClass('hide');
      activeService = '.onlineStore';
    } else if (serviceData.service === 'Social Networks') {
      $('.social-networks').removeClass('hide');
      activeService = '.social-networks';
    } else if (serviceData.service === 'Google Ads') {
      $('.ads').removeClass('hide');
      activeService = '.ads';
    } else if (serviceData.service === 'Google SEO') {
      $('.googleSeo').removeClass('hide');
      activeService = '.googleSeo';
    } else if (serviceData.service === 'Cyber Security') {
      $('.cyberSecurity').removeClass('hide');
      activeService = '.cyberSecurity';
    }
    $('.status-step2').removeClass('hide');
    document.getElementById(
      'step-status2'
    ).innerHTML = `Country: ${serviceData.country}`;
  }
});

// Fill service
$('.service').click(e => {
  serviceData.service = e.target.getAttribute('id');
});

// Fill country
$('.countrie').click(e => {
  serviceData.country = e.target.getAttribute('id');
});

// Fill Logo Tipologia
$('.tipologiasLogo').click(e => {
  serviceData.logo.tipologia = e.target.getAttribute('id');
  proximo(
    'logotipo',
    'contactForm',
    '#continuar-step-3-logo',
    serviceData.logo.tipologia
  );
});

// Client Data
$('#continuar-step-4-logo').click(() => {
  serviceData.client.name = $('#clientName').val();
  serviceData.client.phone = $('#clientPhone').val();
  serviceData.client.email = $('#clientEmail').val();
  if (
    serviceData.client.name === '' ||
    serviceData.client.phone === '' ||
    serviceData.client.email === ''
  ) {
    alert('Insert The missing data on the form! 🖕');
  } else {
    $('.contactForm').addClass('hide');
    $('.extraInfo').removeClass('hide');
    $('.status-step4').removeClass('hide');
  }
});

anterior('.logotipo', '.step2', '.anterior-step-3-logo');
anterior('.website', '.step2', '#anterior-step-3-website');
anterior('.onlineStore', '.step2', '#anterior-step-3-online-store');
anterior('.social-networks', '.step2', '#anterior-step-3-social-networks');
anterior('.googleSeo', '.step2', '#anterior-step-3-seo');
anterior('.ads', '.step2', '#anterior-step-3-google-ads');
anterior('.cyberSecurity', '.step2', '#anterior-step-3-cyber');
anterior('.orcamentos', '.extraInfo', '.anterior-step-5-logo');
anterior('.extraInfo', '.contactForm', '.anterior-step-5');
//Anterior Contact FORM (DUMB SHIT)
$('.anterior-step-4-logo').click(() => {
  if (activeService === '.logotipo') {
    $('.contactForm').addClass('hide');
    $('.logotipo').removeClass('hide');
  } else if (activeService === '.website') {
    $('.contactForm').addClass('hide');
    $('.website').removeClass('hide');
  } else if (activeService === '.onlineStore') {
    $('.contactForm').addClass('hide');
    $('.onlineStore').removeClass('hide');
  } else if (activeService === '.social-networks') {
    $('.contactForm').addClass('hide');
    $('.social-networks').removeClass('hide');
  } else if (activeService === '.googleSeo') {
    $('.contactForm').addClass('hide');
    $('.googleSeo').removeClass('hide');
  } else if (activeService === '.cyberSecurity') {
    $('.contactForm').addClass('hide');
    $('.cyberSecurity').removeClass('hide');
  } else if (activeService === '.ads') {
    $('.contactForm').addClass('hide');
    $('.ads').removeClass('hide');
  }
});

//Anterior step2
$('#anterior-step-2').click(() => {
  $('.step2').addClass('hide');
  $('.wrapper').addClass('hide');
  $('.services').removeClass('hide');
  $('#simulator-title').removeClass('hide');
  $('.services-block2').removeClass('hide');
  $('.launcher').addClass('container-simulator');
  $('.container-simulator').removeClass('launcher');
});

// Get Values From Website Service
getValueSelect(
  [
    '#numero-paginas-website',
    '#contact-form-website',
    '#sec-cert-website',
    '#domain-hosting-website',
    '#emails-website',
    '#langs-website',
  ],
  '#continuar-step-3-website',
  ['pages', 'form', 'cert', 'domainHosting', 'emails', 'langs'],
  serviceData.website,
  '.website',
  '.contactForm'
);

// Get values Online Store
getValueSelect(
  [
    '#contact-form-online-store',
    '#sec-cert-online-store',
    '#domain-hosting-online-store',
    '#emails-online-store',
    '#langs-online-store',
    '#payment-online-store',
    '#billing-online-store',
  ],
  '#continuar-step-3-online-store',
  ['form', 'cert', 'domainHosting', 'emails', 'langs', 'payment', 'billing'],
  serviceData.onlineStore,
  '.onlineStore',
  '.contactForm'
);

// Get values Social Networks
getValueSelect(
  [
    '#number-social-networks',
    '#posts-social-networks',
    '#clients-social-networks',
    '#campaign-managment-social-networks',
  ],
  '#continuar-step-3-social-networks',
  ['socialNetworks', 'posts', 'interaction', 'publicityManagment'],
  serviceData.socialNetwork,
  '.social-networks',
  '.contactForm'
);

// SEO
getValueSelect(
  ['#revision-seo', '#improve-seo', '#content-creation-seo', '#langs-seo'],
  '#continuar-step-3-seo',
  ['revision', 'improvement', 'contentCreation', 'langs'],
  serviceData.seo,
  '.googleSeo',
  '.contactForm'
);

// Google Ads
getValueSelect(
  [
    '#countries-google-ads',
    '#monthly-management-google-ads',
    '#report-google-ads',
  ],
  '#continuar-step-3-google-ads',
  ['countries', 'management', 'reports'],
  serviceData.googleAds,
  '.ads',
  '.contactForm'
);

// Cyber Security
getValueSelect(
  [
    '#sec-cert-cyber',
    '#pentesting-cyber',
    '#renew-sec-cyber',
    '#simulate-cyber',
  ],
  '#continuar-step-3-cyber',
  ['secCert', 'pentesting', 'renew', 'simulate'],
  serviceData.cyber,
  '.cyberSecurity',
  '.contactForm'
);

// Get message
getValueSelect2(
  ['#extraInfo-text'],
  '#continuar-step-5',
  ['message'],
  serviceData.client,
  '.extraInfo',
  '.orcamentos'
);

// Calculate Price
async function calculatePrice() {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `/api/v1/price${serviceData.country}/${serviceData.service}`,
    options
  );
  const data = await response.json();
  const freelancerPrice = data.freelancer;
  const agencyPrice = data.agency;
}

// Garbage Code

function fillTrackerStep3(step, data) {
  $('#continuar-step-2').click(() => {
    document.getElementById(step).innerHTML = data;
  });
}

$('#freelancer').change(() => {
  serviceData.freelancer.quant = $('#freelancer').val();
});

$('#agency').change(() => {
  serviceData.agency.quant = $('#agency').val();
});

$('#finish').click(() => {
  if (serviceData.freelancer.quant || serviceData.agency.quant) {
    $('.status-step1').addClass('hide');
    $('.status-step2').addClass('hide');
    $('.status-step3').addClass('hide');
    $('.status-step4').addClass('hide');
    $('.wrapper').addClass('hide');
    $('.services').removeClass('hide');
    $('#simulator-title').removeClass('hide');
    $('.services-block2').removeClass('hide');
    $('.launcher').addClass('container-simulator');
    $('.container-simulator').removeClass('launcher');
    $('.orcamentos').addClass('hide');
    $('.last-section').removeClass('hide');
    $('.simulator').addClass('hide');
    sendService(serviceData);
  } else {
    alert('Choose one option!');
  }
  console.log(serviceData);
});

$('#voltar-inicio').click(() => {
  $('.simulator').removeClass('hide');
  $('.last-section').addClass('hide');
  $('.status-step1').addClass('hide');
  $('.status-step2').addClass('hide');
  $('.status-step3').addClass('hide');
  $('.status-step4').addClass('hide');
  $('.wrapper').addClass('hide');
  $('.services').removeClass('hide');
  $('#simulator-title').removeClass('hide');
  $('.services-block2').removeClass('hide');
  $('.launcher').addClass('container-simulator');
  $('.container-simulator').removeClass('launcher');
  $('.orcamentos').addClass('hide');
  $('select').prop('selectedIndex', 0);
  $('textarea').val('');
  $('input').val('');
  serviceData.client.name = '';
  serviceData.client.phone = '';
  serviceData.client.email = '';
  serviceData.logo.tipologia = '';
  serviceData.freelancer.quant = '';
  serviceData.agency.quant = '';
});

// Calculate Price

let agency = '';
if (serviceData.service === 'Website') {
  serviceData.agency.cost = '880';
} else if (serviceData.service === 'Logotipo') {
  serviceData.agency.cost = '700';
} else if (serviceData.service === 'Online Store') {
  serviceData.agency.cost = '2530';
} else if (serviceData.service === 'Social Networks') {
  serviceData.agency.cost = '500';
} else if (serviceData.service === 'Google Ads') {
  serviceData.agency.cost = '350';
} else if (serviceData.service === 'Google SEO') {
  serviceData.agency.cost = '600';
} else if (serviceData.service === 'Cyber Security') {
  serviceData.agency.cost = '3850';
}
let freelancer = 1;
if (serviceData.service === 'Website') {
  freelancer = 528;
} else if (serviceData.service === 'Logotipo') {
  freelancer = 280;
} else if (serviceData.service === 'Online Store') {
  freelancer = 1518;
} else if (serviceData.service === 'Social Networks') {
  freelancer = 200;
} else if (serviceData.service === 'Google Ads') {
  freelancer = 140;
} else if (serviceData.service === 'Google SEO') {
  freelancer = 240;
} else if (serviceData.service === 'Cyber Security') {
  freelancer = 1540;
}

$('#continuar-step-4-logo').click(() => {
  var mult = 1;
  function setMult() {
    if (serviceData.country === 'Portugal') {
      mult = 1;
    } else if (serviceData.country === 'Espanha') {
      mult = 1;
    } else if (serviceData.country === 'Polónia') {
      mult = 4.48;
    } else if (serviceData.country === 'Reino Unido') {
      mult = 4.48;
    } else if (serviceData.country === 'USA') {
      mult = 1.21;
    } else if (serviceData.country === 'Brasil') {
      mult = 6.52;
    } else if (serviceData.country === 'Australia') {
      mult = 1.54;
    } else if (serviceData.country === 'UAE') {
      mult = 4.45;
    }
  }
  setMult();
  console.log(`This is the mult: ${mult}`);

  if (serviceData.service === 'Website') {
    serviceData.agency.cost = '880';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Logotipo') {
    serviceData.agency.cost = '700';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Online Store') {
    serviceData.agency.cost = '2530';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Social Networks') {
    serviceData.agency.cost = '500';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Google Ads') {
    serviceData.agency.cost = '350';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Google SEO') {
    serviceData.agency.cost = '600';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Cyber Security') {
    serviceData.agency.cost = '3850';
    $('#agency-cost').text(
      `${Math.round(serviceData.agency.cost * mult)} ~ ${Math.round(
        serviceData.agency.cost * mult * 1.15
      )}`
    );
  }

  if (serviceData.service === 'Website') {
    serviceData.freelancer.cost = '528';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Logotipo') {
    serviceData.freelancer.cost = '280';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Online Store') {
    serviceData.freelancer.cost = '1518';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Social Networks') {
    serviceData.freelancer.cost = '200';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Google Ads') {
    serviceData.freelancer.cost = '140';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Google SEO') {
    serviceData.freelancer.cost = '240';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  } else if (serviceData.service === 'Cyber Security') {
    serviceData.freelancer.cost = '1540';
    $('#freelancer-cost').text(
      `${Math.round(serviceData.freelancer.cost * mult)} ~ ${Math.round(
        serviceData.freelancer.cost * mult * 1.15
      )}`
    );
  }
});
