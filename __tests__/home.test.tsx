import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Newsletter from "@/components/sections/newslatter";

describe("Home Page", () => {
    it("teste para verificar se estou conseguindo renderizar as imagens", () => {
        render(<Home />);

        const images = screen.getAllByRole('img');
        images.forEach((image) => {
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src');
        });
    });

    it("teste para verificar se estou conseguindo preencher os inputs", () => {
        render(<Newsletter />);

        const nameInput = screen.getByPlaceholderText("Seu nome");
        const emailInput = screen.getByPlaceholderText("Seu melhor e-mail");

        fireEvent.change(nameInput, { target: { value: "Gabriel Ceratti Cabral" } });
        fireEvent.change(emailInput, { target: { value: "gabrielceratticabral@gmail.com" } });

        expect(nameInput).toHaveValue("Gabriel Ceratti Cabral");
        expect(emailInput).toHaveValue("gabrielceratticabral@gmail.com");
    });

});
