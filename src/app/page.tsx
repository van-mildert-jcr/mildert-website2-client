import Link from 'next/link';

export default function Home() {
  return (
    <div className="App">
      <h1>Project Home</h1>
      <Link href="/list">My List</Link>
    </div>
  );
}
