import {render,screen} from "@testing-library/react"
import { ContactPage } from "../components/Contact"

test("should load contact page component ",()=>{
    render(<ContactPage/>)
    const heading=screen.getAllByRole("heading");
    expect(heading).toBeIntheDocument;
})