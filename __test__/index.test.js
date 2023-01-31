import { render, screen } from "@testing-library/react"
import IndexPage from "../pages/index"

describe("Index", () => {
  it("render page", () => {
    render(<IndexPage />)
  })

  it("renders a elements", () => {
    render(<IndexPage />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    // expect(screen.getByRole("button", { name: "search" })).toBeDisabled()
  })
})
