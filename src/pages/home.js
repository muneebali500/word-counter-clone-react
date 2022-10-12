import WordEditor from "../components/WordEditor";
import Rules from "../components/Rules";
import Layout from "../components/Layout";

export default function home() {
  return (
    <Layout>
      <main className="flex-1">
        <WordEditor />
        <Rules />
      </main>
    </Layout>
  );
}
