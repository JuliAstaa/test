export default async function Home() {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/top/anime`
  );
  const datas = await results.json();

  return (
    <div>
      <ul>
        {datas.data.map((nimek) => {
          return <li>{nimek.title}</li>;
        })}
      </ul>
    </div>
  );
}
