const calculatePrice = (req, res) => {
  console.log('Calculated price! 😄');

  let mult = 1;
  if (req.param.country === 'Portugal') {
    mult = 1;
  } else if (req.param.country === 'Espanha') {
    return 1;
  } else if (req.param.country === 'Polónia') {
    return 4.48;
  } else if (req.param.country === 'Reino Unido') {
    mult = 4.48;
  } else if (req.param.country === 'USA') {
    return 1.21;
  } else if (req.param.country === 'Brasil') {
    mult = 6.52;
  } else if (req.param.country === 'Australia') {
    return 1.54;
  } else if (req.param.country === 'UAE') {
    return 4.45;
  }
  let agency = 1;
  if (req.params.service === 'Website') {
    agency = 880;
  } else if (req.params.service === 'Logotipo') {
    agency = 700;
  } else if (req.params.service === 'Online Store') {
    return 2530;
  } else if (req.params.service === 'Social Networks') {
    return 500;
  } else if (req.params.service === 'Google Ads') {
    return 350;
  } else if (req.params.service === 'Google SEO') {
    return 600;
  } else if (req.params.service === 'Cyber Security') {
    return 3850;
  }
  let freelancer = 1;
  if (req.param.service === 'Website') {
    freelancer = 528;
  } else if (req.params.service === 'Logotipo') {
    return 280;
  } else if (req.params.service === 'Online Store') {
    return 1518;
  } else if (req.params.service === 'Social Networks') {
    return 200;
  } else if (req.params.service === 'Google Ads') {
    return 140;
  } else if (req.params.service === 'Google SEO') {
    return 240;
  } else if (req.params.service === 'Cyber Security') {
    return 1540;
  }

  res.json({
    f: freelancer,
    agency: agency,
  });
};

module.exports = calculatePrice;
