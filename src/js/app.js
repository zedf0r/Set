export class Character {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Персонаж ${character.name} уже добавлен`)
    }
    this.members.add(character);
    console.log(`Персонаж ${character.name} добавлен в команду`);
    return this.members
  }

  addAll(...characters) {
    characters.forEach((item) => {
      if (Array.from(this.members).find(member => member.name === item.name)) {
        throw new Error(`Персонаж ${item.name} уже добавлен`)
      } else {
        this.members.add(item);
        console.log(`Персонаж ${item.name} добавлен в команду`);
      }
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}


// const createCharacter3 = new Character("Маг", 100, 5);

// const addTeam = new Team();
// addTeam.add(createCharacter);

// const addAllTeam = new Team();
// addAllTeam.addAll(createCharacter1, createCharacter2, createCharacter3);
// addAllTeam.toArray();