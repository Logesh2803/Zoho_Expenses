import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes";
import Emailtemplate from "../components/Emailtemplate"
function home() {
  return (
    <div>
      <Head>
        <title>Email Templates </title>
      </Head>
     <Layout />
      <Emailtemplate />
    </div>
  );
}

export default withAuth(home);
