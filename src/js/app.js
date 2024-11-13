export class Character {
  constructor(name) {
    this.name = name;
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
    return this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character.name);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
