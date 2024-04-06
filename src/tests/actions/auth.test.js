import { login, logout } from "../../actions/auth";

jest.mock('firebase/auth', () => ({
    GoogleAuthProvider: jest.fn(() => ({
      setCustomParameters: jest.fn(),
    })),
    getAuth: jest.fn(() => ({})),
}));

test("Should login with uid", () => {
    const uid = 'abc123' 
    const res = login(uid);
    expect(res).toEqual({type:'LOGIN', uid});
});

test("Should logout", () => {
    const res = logout();
    expect(res).toEqual({type:'LOGOUT'});
});