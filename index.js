// Task 1

const users = [
  {
    userName: "Oleksandr",
    balance: 1200,
  },
  {
    userName: "Roman",
    balance: 900,
  },
  {
    userName: "Pavlo",
    balance: 150,
  },
  {
    userName: "Valeriy",
    balance: 500,
  },
  {
    userName: "Georgey",
    balance: 3000,
  },
];

const totalBalanceOfUsers = users.reduce((acc, user) => acc + user.balance, 0);

console.log(`Загальна сума всіх користувачів дорівнює: ${totalBalanceOfUsers} грн.`);

// Task 2

const friendlyPeople = [
  {
    name: "Ivan",
    friends: ["Dima", "Artur", "Vlad", "Vika"],
  },
  {
    name: "Andrey",
    friends: ["Artur", "Maksym"],
  },
  {
    name: "Mykola",
    friends: ["Arsen", "Alina", "Valeria", "Georgey"],
  },
  {
    name: "Nazar",
    friends: ["Masha"],
  },
  {
    name: "Fedir",
    friends: ["Vasya", "Mihailo", "Artur"],
  },
  {
    name: "Nastya",
    friends: ["Vadim", "Taras"],
  },
];

const peopleWithSimilarFriend = friendlyPeople.reduce((acc, friend) => {
  if (friend.friends.includes("Artur")) {
    acc.push(friend.name);
  }
  return acc;
}, []);

console.log(peopleWithSimilarFriend);

// Task 3

const secondFriendlyPeople = [
  {
    name: "Ivan",
    friends: ["Dima", "Artur", "Vlad", "Vika"],
  },
  {
    name: "Andrey",
    friends: ["Artur", "Maksym"],
  },
  {
    name: "Mykola",
    friends: ["Arsen", "Alina", "Valeria", "Georgey"],
  },
  {
    name: "Nazar",
    friends: ["Masha"],
  },
  {
    name: "Fedir",
    friends: ["Vasya", "Mihailo", "Artur"],
  },
  {
    name: "Nastya",
    friends: ["Vadim", "Taras"],
  },
];

const sortedFriendlyPeople = secondFriendlyPeople.reduce(
  (acc, currentPerson) => {
    if (currentPerson.friends.length) {
      acc.push(currentPerson.name);
    }
    
    return acc;
  },
  []
);

sortedFriendlyPeople.sort((currentEl, nextEl) => {
  const friendsCurrentEl = secondFriendlyPeople.find((person) => person.name === currentEl)
    .friends.length;
  const friendsNextEl = secondFriendlyPeople.find((person) => person.name === nextEl)
    .friends.length;
  return friendsCurrentEl - friendsNextEl;
});

console.log(sortedFriendlyPeople);

// Task 4

const humans = [
  {
    name: "Jelly",
    skills: ["cooking", "fishing"],
  },
  {
    name: "Bred",
    skills: ["cleaning", "sweeping"],
  },
  {
    name: "Greg",
    skills: ["protecting"],
  },
  {
    name: "Chico",
    skills: ["driving"],
  },
  {
    name: "Peter",
    skills: ["running", "sweeming", "flying"],
  },
  {
    name: "Garry",
    skills: ["playing"],
  },
  {
    name: "Jack",
    skills: ["programming"],
  },
];

const skillsOfHumans = humans.reduce((acc, human) => acc.concat(human.skills), []).sort();

console.log(skillsOfHumans);
