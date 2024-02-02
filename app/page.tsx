import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="mb-5">Firebaseでログイン機能を実装する</h1>
      <Main />
    </div>
  );
}
