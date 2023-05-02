import Page from "../components/Page.tsx";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Menu's", () => {
    it("Renders the page", () => {
        render(<Page />);
        expect(screen.getByTestId("menuPrimary")).toBeInTheDocument();
        expect(screen.getByTestId("select")).toBeInTheDocument();
        expect(screen.getByTestId("menuSecundary")).toBeInTheDocument();
    });
    it("Shows the Primary Menu in English", () => {
        render(<Page />);
        expect(screen.getByTestId("2359")).toBeInTheDocument();
        expect(screen.getByTestId("2383")).toBeInTheDocument();
        expect(screen.getByTestId("2390")).toBeInTheDocument();
        expect(screen.getByTestId("2428")).toBeInTheDocument();
        expect(screen.getByTestId("2435")).toBeInTheDocument();
    });
    it("Shows the Secundary Menu when clicking on KNOW", () => {
        render(<Page />);
        fireEvent.click(screen.getByTestId("2359"));
        expect(screen.getByTestId("2360")).toBeInTheDocument();
        expect(screen.getByTestId("2372")).toBeInTheDocument();
        expect(screen.getByTestId("2376")).toBeInTheDocument();
        expect(screen.getByTestId("2381")).toBeInTheDocument();
        expect(screen.getByTestId("2382")).toBeInTheDocument();
    });
    it("Shows the Secundary Menu when clicking on PREPARE", () => {
        render(<Page />);
        fireEvent.click(screen.getByTestId("2383"));
        expect(screen.getByTestId("2384")).toBeInTheDocument();
        expect(screen.getByTestId("2386")).toBeInTheDocument();
        expect(screen.getByTestId("2389")).toBeInTheDocument();
    });
    it("Shows the Secundary Menu when clicking on PARTICIPATE", () => {
        render(<Page />);
        fireEvent.click(screen.getByTestId("2390"));
        expect(screen.getByTestId("2391")).toBeInTheDocument();
        expect(screen.getByTestId("2403")).toBeInTheDocument();
        expect(screen.getByTestId("2407")).toBeInTheDocument();
        expect(screen.getByTestId("2413")).toBeInTheDocument();
        expect(screen.getByTestId("2412")).toBeInTheDocument();
        expect(screen.getByTestId("2414")).toBeInTheDocument();
        expect(screen.getByTestId("2418")).toBeInTheDocument();
        expect(screen.getByTestId("2422")).toBeInTheDocument();
    });
    it("Shows the Secundary Menu when clicking on SUPPORT", () => {
        render(<Page />);
        fireEvent.click(screen.getByTestId("2428"));
        expect(screen.getByTestId("2432")).toBeInTheDocument();
        expect(screen.getByTestId("2433")).toBeInTheDocument();
    });
    it("Shows the Secundary Menu when clicking on BROADCAST", () => {
        render(<Page />);
        fireEvent.click(screen.getByTestId("2435"));
        expect(screen.getByTestId("2436")).toBeInTheDocument();
        expect(screen.getByTestId("2437")).toBeInTheDocument();
        expect(screen.getByTestId("2438")).toBeInTheDocument();
    });
});