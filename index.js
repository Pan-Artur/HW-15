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

let totalBalance = 0;

users
  .map((user) => user.balance)
  .forEach((userBalance) => (totalBalance += userBalance));

console.log(`Загальна сума всіх користувачів дорівнює: ${totalBalance} грн.`);

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

const peopleWithSimilarFriend = friendlyPeople
  .filter((friend) => friend.friends.includes("Artur"))
  .map((someFriend) => someFriend.name);

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

const sortedfriendlyPeople = [...secondFriendlyPeople]
  .sort((currentEl, nextEl) => currentEl.friends.length - nextEl.friends.length)
  .map((friend) => friend.name);

console.log(sortedfriendlyPeople);

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

const skillsOfHumans = humans.map(human => human.skills).flat().sort();

console.log(skillsOfHumans);
