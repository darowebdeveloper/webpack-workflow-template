const users = [
  {name: 'Daro', premium: true},
  {name: 'Cena', premium: false},
  {name: 'Ray', premium: true},
  {name: 'John', premium: true},
  {name: 'Bastita', premium: false}
];

export const getPremUsers = (users) => {
  return users.filter(user => {
    return user.premium
  });
};
export default users;

// export {getPremUsers, users as default}