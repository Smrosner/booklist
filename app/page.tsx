import MyBooksPage from "./mybooks/page";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-200 pb-4">
        <h1 className="text-slate-900 text-xl font-medium px-5 pt-5 text-center">
          BookList
        </h1>
      </div>
      <div className="p-5">
        <MyBooksPage />
      </div>
    </main>
  );
}
