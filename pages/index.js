import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return <Layout>
      <div className="text-blue-900">
        Not logged in
      </div>
    </Layout>;
  }
  return <Layout>
    <div className="text-blue-900">
      {session?.user?.email}
    </div>
  </Layout>;
}
