"use client";
import { Input } from "../../../ui/components/Forms/Inputs/Input/Input"
import { Button } from "../../../ui/components/Forms/Button/Button"

export const Navbar = () => {
  return (
    <nav className="z-10 py-3 px-8 flex justify-between items-center bg-zinc-900 fixed w-full shadow-zinc-950 shadow-md">
      <strong className="text-lg">
        elsombrero
        <span className="text-yellow-600">.io</span>
      </strong>
      <Input
        placeholder="Search for name, category..."
        left={<i className="lni lni-search"></i>}
        radius="lg"
        inputSize="sm"
        className="bg-black border-none bg-opacity-35"
      />
      <Button size="sm" theme="light" variant="ghost" onClick={() => location.assign('/services/logout')}>
        <i className="lni lni-exit"></i>
        Logout
      </Button>
    </nav>
  )
}