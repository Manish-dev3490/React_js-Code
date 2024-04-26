import { fireEvent, render ,screen,T} from "@testing-library/react"
import { HeaderComponent } from "../components/HeaderComponent"
import { Provider } from "react-redux"
import AppStore from "../utils/AppStore"
import { BrowserRouter } from "react-router-dom"
import  "@testing-library/jest-dom"

test("should load the login state ", () => {
    render(<BrowserRouter>
        <Provider store={AppStore}>
            <HeaderComponent>
            </HeaderComponent>
        </Provider>
    </BrowserRouter>
    )

    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton)
    const logoutButton=screen.getByRole("button",{name:"Logout"});

    // assertion
    expect(logoutButton).toBeInTheDocument()
})