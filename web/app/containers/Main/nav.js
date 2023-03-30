const nav = [{
  link: '/',
  text: 'Home',
  selected: true,
  mobileOnly: true
// },{
//   external: 'https://signalfox.zendesk.com/hc/en-us',
//   text: 'Documentation',
//   selected: false
}]

const social = [];
// const social = [{
//   link: 'https://www.linkedin.com/company/17989795/',
//   iconClass: ['fab', 'linkedin']
// },{
//   link: 'https://www.instagram.com/signalfox_princeton/',
//   iconClass: ['fab', 'instagram']
// },{
//   link: 'https://www.facebook.com/SignalFox-1495534370746038',
//   iconClass: ['fab', 'facebook-square']
// }];

const filterForFooter = (nav) => {
  return nav.filter(n => !('dropdown' in n)).map(n => {
    return Object.assign({}, n, {selected: false});
  });
};

export {
  social,
  nav,
  filterForFooter
};
