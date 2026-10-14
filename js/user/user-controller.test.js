const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test("add user to userController que no esta en la lista", () => {
  let user = new User(111, "Evelyn", "evelyn@generation.org");
  expect(userController.add(user)).toBe(undefined);
});

test("remove user que no esta en la lista", () => {
  let user = new User(111, "Evelyn", "evelyn@generation.org");
  expect(userController.remove(user)).toBe(undefined);
});

test("findByEmail retorna user cuando el email existe", () => {
  let user = new User(111, "Evelyn", "evelyn@generation.org");
  userController.add(user);
  expect(userController.findByEmail("evelyn@generation.org")).toEqual(user);
});

test("findByEmail retorna undefined cuando el email no existe", () => {
  expect(userController.findByEmail("otrocorreo@generation.org")).toBe(undefined);
});

test("findById retorna user cuando el id existe", () => {
  let user = new User(111, "Evelyn", "evelyn@generation.org");
  userController.add(user);
  expect(userController.findById(111)).toEqual(user);
});

test("findById retorna undefined cuando el id no existe", () => {
  expect(userController.findById(99999)).toBe(undefined);
});