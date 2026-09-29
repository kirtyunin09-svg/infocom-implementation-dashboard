const teamMembers = [
  { id: 1, name: "Тоев Умар" },
  { id: 2, name: "Магомадов Юсуп" },
  { id: 3, name: "Тюнин Кирилл" }
];

export default function HomePage() {
  return (
    <div>
      <h1>Проект: Шаблон Frontend</h1>
      <h2>Команда:</h2>
      <ul>
        {teamMembers.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
