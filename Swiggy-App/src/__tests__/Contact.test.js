import {render,screen} from "@testing-library/react"
import { ContactPage } from "../components/Contact"
import "@testing-library/jest-dom"

test("should load contact page component ",()=>{
    render(<ContactPage/>)
    const heading=screen.getAllByRole("heading");
    console.log(heading);
    expect(heading).toBeIntheDocument;
})

test("wehather it have input box load or not",()=>{
    // querying
    const inputBoxes=screen.findAllByRole("input")
    expect(inputBoxes).toBeIntheDocument;
})