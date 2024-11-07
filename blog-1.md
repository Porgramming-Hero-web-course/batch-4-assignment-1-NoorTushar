# The significance of union and intersection types in TypeScript.

## 1. Union

### 1.1 Basic Concept

Let us talk about union types.

Look at this example: We want to declare a variable named `country` where we explicitly want the value to be either `Bangladesh` or `India`

```ts
const country = "Bangladesh";
```

OR

```ts
const country = "India";
```

Now, we can do several things to set the type:

1. we can set the type of the country to `string`.

But in this case, we can enter any value that represents type string.

example we can set the value of the country to `USA` and TypeScript will not mind.

```ts
const country: string = "USA";
```

So TypeScript is unable to correct us.

2. We can explicitly say that the country type will be Country and this Country type must be `Bangladesh` or `India`.

```ts
type Country = "Bangladesh" | "India";

const country: Country = "Bangladesh";
```

Now here, if we try to assign `USA` to the country value, TypeScript will show us this error:

```
Type '"USA"' is not assignable to type 'Country'.
```

Now this is called Union of types, which is formed by using pipe symbol `|` in between the types. This means, the type `Country` must be equal to either type `Bangladesh` or `India` and not anything else.

We can create Union

### 1.2 Combining Union Types

We can also declare Union types with already created Types.

Suppose, `Country2` is another type which will be either `Malaysia` or `Nepal` or `Bhutan`

And then finally when declaring the `country` variable, we must be able to set the type to either `Bangladesh`, `India`, `Malaysia`, `Nepal` or `Bhutan`

We can also do this by using `|` union type:

```ts
type Country = "Bangladesh" | "India";
type Country2 = "Malaysia" | "Nepal" | "Bhutan";

type Countries = Country | Country2;

const country: Countries = "Nepal";
```

Here we are explicitly saying that country variable will be of type `Countries` which is a type union of `Country` and `Country2`

So finally, we can give value of the country to either `Bangladesh`, `India`, `Malaysia`, `Nepal` or `Bhutan`. Any value other than these, TypeScript will show error.

### 1.3 Union and Objects

First let us declare a type `Student` which will be an object type having id, name, email and course as its properties.

```ts
type Student = {
   id: number;
   name: string;
   email: string;
   course: string;
};
```

Now we will declare a variable and set the type to `Student`.

```ts
const student1: Student = {
   id: 2,
   name: "Tushar",
   email: "tushar@gmail.com",
   course: "PH",
};
```

All good.

But management requirement also adds that, the value of the course should either be `Level1` or `Level2`.

Now whenever we create a new student, if we wither a value outside `Level1` or `Level2`, TypeScript will give us an error.

So here also, what does it mean? Either `Level1` OR `Level2`. So here also we can use Union type.

```ts
type Student = {
   id: number;
   name: string;
   email: string;
   course: "Level1" | "Level2";
};

const student1: Student = {
   id: 2,
   name: "Tushar",
   email: "tushar@gmail.com",
   course: "Level1",
};
```

See how we have set the course value in the `Student` type to either `Level1` or `Level2`, using `|` operator.

Now whenever we will create a new student variable object, if we pass a value of the course outside `Level1` or `Level2`, TypeScript will show us an error.

### 1.4 Union in function parameters

```ts
const showMessage = (message: string | number) => {
   if (typeof message === "string") {
      console.log(`Your message is ${message}`);
   } else if (typeof message === "number") {
      console.log(`Your number is ${message}}`);
   }
};
```

Consider the above example, we are taking in an argument `message` which will be either `string` or `number` by using pipe operator.

Based on the message type we are displaying a custom message.

### 1.4 Summarizing importance of Union

So we can see that Union is really important in the world of TypeScript.

Because there will be cases where declaring a variable or function, we have to explicitly mention the value or then argument type, which might be either option of multiple types. And also, based on that type we can further do custom operations.

So this assigning of multiple type values to form and use a single type is called Type Union

## 2. Intersection

### 2.1 Basic Concept

This is quite opposite of Union. In Union we had to use `either` type value right?

But by doing intersection, we must include `all` the type values.

Let us go back to our `Student` object type.

```ts
type Student = {
   id: number;
   name: string;
   email: string;
   course: string;
};
```

Now, let us say we want the student to also have phone, without phone the object will be incomplete.

So let us make another type `StudentWithPhone`:

```ts
type StudentWithPhone = {
   id: number;
   name: string;
   email: string;
   course: string;
   phone: string;
};
```

Now what we will do is we will create a new type which will combine both `Student` AND `StudentWithPhone` using `&`, and, operator.

```ts
type CompleteStudent = Student & StudentWithPhone;
```

Now, when we declare a student variable using type `CompleteStudent`, it must have all the fields including `phone`.

```ts
const student1: CompleteStudent = {
   id: 2,
   name: "Tushar",
   email: "tushar@gmail.com",
   course: "PH",
   phone: "81515926",
};
```

---

Here what happened is, both the types merged with each other. The common properties of both types merged and the properties which were not common, in our case `phone`, were added in the new type.

But even if we did not have common properties, we could have added the `phone` property like this:

```ts
type Student = {
   id: number;
   name: string;
   email: string;
   course: string;
};

type Phone = {
   //    id: number;
   //    name: string;
   //    email: string;
   //    course: string;
   phone: string;
};

type CompleteStudent = Student & Phone;

const student1: CompleteStudent = {
   id: 2,
   name: "Tushar",
   email: "tushar@gmail.com",
   course: "PH",
   phone: "81515926",
};
```

Here `Phone` only had `phone` property. And we merged it with `Student` to create a new type called `CompleteStudent`. Which is then used as the type of creating a variable named `student1`.

### 2.2 Summarizing importance of Intersection

There will be cases where, we need to check if the value meets all the criteria of multiple types, that is where `Intersection` comes in handy.

### 3. Summary

As we can see, both `Union` and `Intersection` are important in TypeScript world depending on our use cases.

Union is created using pipe operator, `|`. We must include either one type from the selected types.

And Intersection is created by and operator, `&`. We must use all the type properties from the selected types.
