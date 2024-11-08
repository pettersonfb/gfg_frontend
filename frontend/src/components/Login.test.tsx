// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import Login from "./login";
// import axios from "axios";

// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("Login Component", () => {
//   it("deve renderizar o formulário de login corretamente", () => {
//     render(<Login />);
//     expect(screen.getByLabelText("Username")).toBeInTheDocument();
//     expect(screen.getByLabelText("Password")).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
//   });

//   it("deve exibir um alerta de sucesso no login bem-sucedido", async () => {
//     mockedAxios.post.mockResolvedValue({ data: { token: "test-token" } });

//     render(<Login />);

//     fireEvent.change(screen.getByLabelText("Username"), { target: { value: "testuser" } });
//     fireEvent.change(screen.getByLabelText("Password"), { target: { value: "testpassword" } });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));

//     await waitFor(() => {
//       expect(window.alert).toHaveBeenCalledWith("Login successful!");
//     });
//   });

//   it("deve exibir um alerta de erro no login mal-sucedido", async () => {
//     mockedAxios.post.mockRejectedValue(new Error("Login failed"));

//     render(<Login />);

//     fireEvent.change(screen.getByLabelText("Username"), { target: { value: "wronguser" } });
//     fireEvent.change(screen.getByLabelText("Password"), { target: { value: "wrongpassword" } });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));

//     await waitFor(() => {
//       expect(window.alert).toHaveBeenCalledWith("Login failed!");
//     });
//   });
// });