interface Profile {
   name: string;
   age: number;
   email: string;
}

type Partial<T> = {
   [index in keyof T]?: T[index];
};

const updateProfile = (obj: Profile, updateObj: Partial<Profile>): Profile => {
   return { ...obj, ...updateObj };
};
