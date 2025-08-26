import Card from "../common/Card";

const mockData = [
  { id: 1, title: "Card 1", content: "Content for Card 1" },
  { id: 2, title: "Card 2", content: "Content for Card 2" },
  { id: 3, title: "Card 3", content: "Content for Card 3" },
  { id: 4, title: "Card 4", content: "Content for Card 4" },
  { id: 5, title: "Card 5", content: "Content for Card 5" },
];

function Dashboard() {
  return (
    <div
      className="flex-1 p-7 overflow-y-auto 
    grid grid-cols-1 sm:grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
    gap-4 justify-items-center"
    >
      {mockData.map((card) => {
        return <Card key={card.id} title={card.title} content={card.content} />;
      })}
    </div>
  );
}
export default Dashboard;
