import Image from "next/image";
import Link from "next/link";
import DoCard from "./components/ToDo";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className="flex justify-center font-bold ">
        <br></br>
        <br></br>
        Welcome to my ToDo App! <br></br>
        This is a trial I'm doing to learn something about Next.JS, TailWindCSS, and Typescript. Hope to do much better
        later on.<br></br>
        Click Checklist to go through a very simple and basic todo app. 
        <br></br>Thank you :)
      </h1>
      <br></br><br></br>
      <Link className="flex justify-self-center btn btn-primary" href = "/users" >CheckList</Link>
    </main>
  );
}
