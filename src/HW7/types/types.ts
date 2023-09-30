// Определите интерфейс, который использует индексную сигнатуру с объединением типов.
// Например, тип значения для каждого ключа может быть числом или строкой.
export interface IType1 {
  [key: string]: string | number;
}

// Создайте интерфейс, в котором типы значений в индексной сигнатуре являются функциями.
// Ключами могут быть строки, а значениями - функции, которые принимают любые аргументы.
export interface IType2 {
  [key: string]: (...values: any[]) => void;
}

// Опишите интерфейс, который использует индексную сигнатуру для описания объекта, подобного массиву.
// Ключи должны быть числами, а значения - определенного типа.
export interface IType3 {
  [key: number]: string;
}

// Создайте интерфейс с определенными свойствами и индексной сигнатурой.
// Например, у вас могут быть свойства, такие как name: string, и индексная сигнатура для дополнительных динамических свойств.

export interface IType4 {
  [key: string]: string | boolean | number;

  name: string;
  age: number;
  isMarried: boolean;
}

// Создайте два интерфейса: один с индексной сигнатурой, а другой расширяет первый, добавляя специфичные свойства.
interface IType5Base {
  [key: string]: string | Array<string>;
}

export interface IType5 extends IType5Base {
  name: string;
  lastName: string;
}

// Напишите функцию, которая принимает объект с индексной сигнатурой и проверяет,
// соответствуют ли значения определенным критериям (например, являются ли все значения числами).
export interface IType6 {
  [key: string]: number | string;
}
