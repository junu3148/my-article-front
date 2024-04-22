import ArticleList from "@/components/ArticleList";
import Header from "@/components/Common/Header/Header";
import ManagedKeyword from "@/components/Common/ManagedKeyword";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="w-[420px] bg-white">
        {/* Header */}
        <Header />
        <div className="mt-[60px] py-10">
          {/* Keyword */}
          <ManagedKeyword/>
          {/* Articles */}
          <ArticleList />
        </div>
      </div>
    </main>
  );
}
