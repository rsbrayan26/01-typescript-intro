const Deprecated = (deprecationReason: string) => {
  return (
    tarjet: any,
    memberName: string,
    propertyDescription: PropertyDescriptor
  ) => {
    console.log({ tarjet });
    return {
      get() {
        const wrapperFN = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //   ! llamar la funcion propiamente con sus argumentos
          propertyDescription.value.apply(this, args);
        };
        return wrapperFN;
      },
    };
  };
};

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toLocaleUpperCase()}!!`);
  }

  @Deprecated("Most use speak2 method used")
  speak() {
    console.log(`${this.name}, ${this.name}!`);
  }

  speak2() {
    console.log(`${this.name}, ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");
charmander.scream();
charmander.speak2();
