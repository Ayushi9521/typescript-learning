type student = {
  name: string;
  age: number;
};

function validator(student: student): void {
  if (student.age < 18) {
    console.log(
      `You are not validating student as your age ${student.age} is less than 18`
    );
  } else {
    console.log(
      `You are validating student as your age ${student.age} is greator than 18`
    );
  }
}
const pro = {
  name: "Sam",
  age: 14,
};

const reslut = validator(pro);
