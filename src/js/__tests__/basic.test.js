import { Character, Team } from "../app";

test ('Add only one character', ()=> {
  const createCharacter = new Character("Маг", 100, 5);
  const expectedCharacter = [{name: "Маг", health: 100, attack: 5}];
  const newTeamAdd = new Team();
  newTeamAdd.add(createCharacter);
 
  expect(newTeamAdd.toArray()).toEqual(expectedCharacter)
})

test ('Add all character', () => {
  const createCharacter = new Character("Маг", 100, 5);
  const createCharacter1 = new Character("Мечник", 100, 4);
  const createCharacter2 = new Character("Лучник", 100, 7);
  const teamAdd = new Team();
  teamAdd.addAll(createCharacter, createCharacter1, createCharacter2);
  const expectedCharacter = [
    {name: "Маг", health: 100, attack: 5},
    {name: "Мечник", health: 100, attack: 4},
    {name: "Лучник", health: 100, attack: 7}
  ];
  expect(teamAdd.toArray()).toEqual(expectedCharacter);
})

test ('Character has already been added', () => {
  const createCharacter = new Character("Маг", 100, 5);
  const newTeamAdd = new Team();
  newTeamAdd.add(createCharacter);
  
  expect(() => newTeamAdd.add(createCharacter)).toThrow(`Персонаж ${createCharacter.name} уже добавлен`);
})

test ('Characters has alreay been added', () => {
  const characters = [
    new Character("Маг", 100, 5),
    new Character("Мечник", 100, 4),
    new Character("Лучник", 100, 7),
    new Character("Маг", 100, 5)
  ];
  const teamAdd = new Team();
  teamAdd.addAll(characters[0], characters[1], characters[2]);
  expect(() => teamAdd.addAll(characters[3])).toThrow(`Персонаж ${characters[3].name} уже добавлен`)
})