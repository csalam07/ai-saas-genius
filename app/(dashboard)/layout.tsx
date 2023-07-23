import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/navbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="relative h-full">
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900 h-full">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <Navbar apiLimitCount={apiLimitCount} isPro={isPro} />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
