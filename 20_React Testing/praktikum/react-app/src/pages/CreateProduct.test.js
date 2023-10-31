import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("CreateProduct", () => {
	it("Test input product name", () => {
		render(<Form />);
        const inputElement = screen.getByPlaceholderText(/product name/i);
		fireEvent.change(inputElement, { target: { value: "test" } });
		expect(inputElement).toHaveValue("test");
    })

    it('Product name should not contain symbols', () => {
        render(<Form />);
        const inputElement = screen.getByPlaceholderText(/product name/i);
		fireEvent.change(inputElement, { target: { value: "product name test" } });
        const regex = /[!@#$%^&*()_+//\\{}]/;
        const inputValue = inputElement.value;
        
        const isValid = regex.test(inputValue);
        expect(isValid).toBe(false);
    });

    it('Product name length should not exceed 25 characters', () => {
        render(<Form />);
        const inputElement = screen.getByPlaceholderText(/product name/i);
		fireEvent.change(inputElement, { target: { value: "product! name test" } });
        const inputValue = inputElement.value;
        
        expect(inputValue.length).not.toBeGreaterThan(25);
    });
})