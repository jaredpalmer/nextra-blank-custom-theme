import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';

export default function Home(props) {
  return (
    <>
      <Header />
      <div className="max-w-3xl px-8 mx-auto py-4">
        <ul className="space-y-3">
          {posts.posts.map((p) => (
            <li key={p.slug} className="flex items-center space-x-3">
              <span className="block text-gray-500 w-[9.5rem] text-right">
                {p.date}
              </span>
              <Link href={p.slug}>
                <a className="block font-bold">{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
