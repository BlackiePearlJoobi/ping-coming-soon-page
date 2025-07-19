import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";

describe("Form component", () => {
  it("shows validation error when email is empty", async () => {
    render(<Form />);
    const submitButton = screen.getByRole("button", { name: /notify me/i });

    await userEvent.click(submitButton);

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  it("submits form with valid email and resets input", async () => {
    // Mock window.alert (it replaces the real alert dialog with a mock function created by jest.fn(), preventing actual popup interruptions when running tests)
    window.alert = jest.fn();

    render(<Form />);
    const input = screen.getByPlaceholderText(/your email address/i);
    const submitButton = screen.getByRole("button", { name: /notify me/i });

    await userEvent.type(input, "test@example.com");
    await userEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining("test@example.com"),
    );
    expect(input).toHaveValue(""); // Confirm reset
  });

  it("shows validation error for invalid email - without @", async () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/your email address/i);
    const submitButton = screen.getByRole("button", { name: /notify me/i });

    await userEvent.type(input, "invalid-email");
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/please provide a valid email address/i),
    ).toBeInTheDocument();
  });

  it("shows validation error for invalid email - with too short a domain", async () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/your email address/i);
    const submitButton = screen.getByRole("button", { name: /notify me/i });

    await userEvent.type(input, "invalid@email.a");
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/please provide a valid email address/i),
    ).toBeInTheDocument();
  });
});
