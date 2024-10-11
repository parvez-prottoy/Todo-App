import Sidebar from "../components/sidebar/Sidebar";

const TodosPage = () => {
  return (
    <section className="flex h-screen">
      <div className="flex-none relative">
        <Sidebar />
      </div>
      <div className="flex-1 border">Main Content</div>
    </section>
  );
};

export default TodosPage;
