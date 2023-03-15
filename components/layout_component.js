// 'use strict';

// const e = React.createElement;

// class Layout extends React.Component {

// }

// const domContainer = document.querySelector("#app");

// const root = ReactDOM.createRoot(domContainer);

// root.render(e(Layout));

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = React.createElement('h1', null, 'Hello, ', formatName(user), '!');

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);