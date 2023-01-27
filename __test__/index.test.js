import { render, screen } from "@testing-library/react"
import IndexPage from "../pages/index"

describe("Home", () => {
  it("renders a heading", () => {
    render(<IndexPage />)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
  })
})
