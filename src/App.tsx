import "./App.css";
import InputField from "./components/InputField";

// let name: string;
// let age: number | string; //union type
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string]; //tuple type

// (age = "khaled"), 34;

// role = [5, "CEO"];

// type Person = {
//   name: string;
//   age?: number;
// };

// type X = Person & {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// };

// let y: {
//   c: "Khaled";
//   d: 34;
// };

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// let person: Person = {
//   name: "Khaled",
// };

// let lotsOfPeople: Person[];

// let printName: (name: string) => void;

// let printSurname: (surname: string) => unknown;

// let printAge: (age: number) => never;

// function printName(name: string) {
//   console.log(name);
// }

let personName: unknown;

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
