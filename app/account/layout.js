import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid lg:grid-cols-[16rem_1fr] h-full gap-12 ">
      <SideNavigation />
      <div className="py-10 px-10 sm:pr-10">{children}</div>
    </div>
  );
}
