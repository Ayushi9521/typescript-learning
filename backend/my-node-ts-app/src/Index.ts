function greet(name: string): string {
  return `Hello, ${name}! `;
}

const userName: string = "Ayushi";
console.log(greet(userName));

const email: string = "email@gmail.com";

function isEven(num: number): boolean {
  return num % 2 === 0;
}

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "Laptop",
  price: 342,
};

const techStack: string[] = ["TS", "React", "Node"];
