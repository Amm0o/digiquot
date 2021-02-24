const freelancer = require('../models/freeLancerModel');

exports.createFreelancer = (name, email, pt, br, uk, au, es, pol, usa, uae) => {
  const freelancerObj = {
    name: name,
    email: email,
    pt: pt,
    br: br,
    uk: uk,
    au: au,
    es: es,
    pol: pol,
    usa: usa,
    uae: uae,
  };
  const newFreelancer = freelancer.create(freelancerObj);
};
