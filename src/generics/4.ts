type UserUpdate = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserUpdate>) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
