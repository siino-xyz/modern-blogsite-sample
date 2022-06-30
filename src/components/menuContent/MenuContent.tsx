import Link from "next/link";

type MenuType = {
  id: number;
  text: string;
  link: string;
};

const MenuItem: MenuType[] = [
  { id: 1, text: "トップ", link: "/" },
  { id: 2, text: "サービス", link: "/" },
  { id: 3, text: "ブログ", link: "/" },
  { id: 4, text: "お問い合わせ", link: "/" },
];

const DrawerMenu = () => {
  return (
    <div>
      <div></div>
      <nav>
        <ul>
          {MenuItem.map((MenuItem: MenuType) => (
            <Link href={`${MenuItem.link}`} key={MenuItem.id}>
              <li>{MenuItem.text}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DrawerMenu;
