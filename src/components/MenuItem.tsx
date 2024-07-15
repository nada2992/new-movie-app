import Link from "next/link"

type children = {
  title: any;
  address: any;
  Icon: any;
};

const MenuItem = ({title, address, Icon}: children) => {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  )
}

export default MenuItem
