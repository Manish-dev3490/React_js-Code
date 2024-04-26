import { render,screen } from "@testing-library/react"
import { Restacard } from "../components/Restacard"
import MOCK_DATA from "../Mocks/restaMock.json"
import "@testing-library/jest-dom"

test("should resta card is loaded on the application",()=>{
    render(<Restacard  resData={MOCK_DATA}></Restacard>)
    const restaData=screen.getByText("Pizza Hut");
    expect(restaData).toBeInTheDocument();
})