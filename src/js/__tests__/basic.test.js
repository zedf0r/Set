import { Character, Team } from "../app";

test ('Add only one character', ()=> {
  const character = new Character("Маг");
  const expectedCharacter = [{name: "Маг"}];
  const newTeam = new Team();
  newTeam.add(character);
 
  expect(newTeam.toArray()).toEqual(expectedCharacter)
})

test ('Add all character', () => {
  const character1 = new Character("Маг");
  const character2 = new Character("Мечник");
  const character3 = new Character("Лучник");
  const newTeam = new Team();
  newTeam.addAll(character1, character2, character3);
  const expectedCharacter = [
    "Маг",
    "Мечник",
    "Лучник"
  ];
  expect(newTeam.toArray()).toEqual(expectedCharacter);
})

test ('Character has already been added', () => {
  const character = new Character("Маг");
  const newTeamAdd = new Team();
  newTeamAdd.add(character);
  
  expect(() => newTeamAdd.add(character)).toThrow(`Персонаж ${character.name} уже добавлен`);
})

test ('Add all characters and one copy character', () => {
  const character1 = new Character("Маг");
  const character2 = new Character("Мечник");
  const character3 = new Character("Лучник");
  const character4 = new Character("Маг");
  const newTeam = new Team();
  newTeam.addAll(character1, character2, character3, character4);
  const expectedCharacter = [
    "Маг",
    "Мечник",
    "Лучник",
  ];
  expect(newTeam.toArray()).toEqual(expectedCharacter);
})
